// ============================================================================
// POST /api/v1/auth/wallet-checkout  (Section 4.1)
// Passwordless onboarding: create account, extract shipping address from the
// Apple Pay / Google Pay token, charge Stripe, and set initial meals — in ONE
// call. No forms, no passwords.
// ============================================================================

import { Router } from "express";
import { z } from "zod";
import { db, uid, type DeliveryDay, type DropoffPreference } from "../db.js";
import { priceForTier, type PlanTier } from "../lib/pricing.js";
import { cutoffFor, nextDeliveryDate, toIso } from "../lib/delivery.js";

export const authRouter = Router();

const CheckoutSchema = z.object({
  paymentToken: z.string().min(1),
  planTier: z.enum(["MEALS_4", "MEALS_6", "MEALS_8"]),
  deliveryDay: z.enum(["SUNDAY_AM", "SUNDAY_PM", "TUESDAY_AM", "TUESDAY_PM"]),
  dietaryBadges: z.array(z.string()).optional().default([]),
  dropoffPreference: z
    .enum(["CONCIERGE", "UNIT_DOOR", "FRONT_PORCH"])
    .optional()
    .default("CONCIERGE"),
  // In production this object is DECODED server-side from the wallet token's
  // shipping contact. Accepted here so the demo can pass a real address.
  shippingAddress: z
    .object({
      street: z.string(),
      unit: z.string().optional(),
      city: z.string().optional().default("Toronto"),
      province: z.string().optional().default("ON"),
      postalCode: z.string(),
      buzzerCode: z.string().optional(),
      instructions: z.string().optional(),
    })
    .optional(),
  // phone/email/name come from the Apple Pay contact in production; demo allows override.
  phone: z.string().optional().default("+14165550000"),
  email: z.string().optional(),
  fullName: z.string().optional().default("Wallet Customer"),
  mealIds: z.array(z.string()).optional(), // optional curated picks; else auto-select
});

authRouter.post("/api/v1/auth/wallet-checkout", (req, res) => {
  const parsed = CheckoutSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      status: "ERROR",
      errors: parsed.error.flatten(),
    });
  }
  const b = parsed.data;

  // 1) Idempotency by token (demo: one user per token).
  const existing = db.users.find((u) => u.stripeCustomerId === `cus_${b.paymentToken}`);
  if (existing) {
    return res.status(200).json({
      status: "SUCCESS",
      existingUser: true,
      userId: existing.id,
      subscriptionId: db.subscriptions.find((s) => s.userId === existing.id)?.id,
      message: "Wallet token already registered.",
    });
  }

  // 2) Create user.
  const userId = uid("usr");
  const user = {
    id: userId,
    phone: b.phone,
    email: b.email,
    fullName: b.fullName,
    stripeCustomerId: `cus_${b.paymentToken}`,
    dietaryBadges: b.dietaryBadges,
    dropoffPreference: b.dropoffPreference as DropoffPreference,
    createdAt: toIso(new Date()),
  };
  db.users.push(user);

  // 3) Create address (extracted from wallet token).
  const addr = b.shippingAddress ?? {
    street: "100 King St W",
    unit: "Unit 2201",
    city: "Toronto",
    province: "ON",
    postalCode: "M5X 1A9",
  };
  db.addresses.push({
    id: uid("addr"),
    userId,
    street: addr.street,
    unit: addr.unit,
    city: addr.city,
    province: addr.province,
    postalCode: addr.postalCode,
    buzzerCode: addr.buzzerCode,
    instructions: addr.instructions,
  });

  // 4) Create subscription.
  const subscriptionId = uid("sub");
  const delivery = nextDeliveryDate(b.deliveryDay as DeliveryDay);
  db.subscriptions.push({
    id: subscriptionId,
    userId,
    planTier: b.planTier as PlanTier,
    deliveryDay: b.deliveryDay as DeliveryDay,
    isPaused: false,
    stripeSubscriptionId: `sub_stripe_${uid()}`,
    currentPeriodEnd: toIso(cutoffFor(delivery)),
  });

  // 5) Auto-select meals (respect dietary badges) OR use provided picks.
  const price = priceForTier(b.planTier as PlanTier);
  const chosen = pickMeals(b.mealIds, b.dietaryBadges, price.mealCount);

  // 6) Charge via Stripe (mocked).
  const charge = mockStripeCharge(b.paymentToken, price.totalCAD);

  // 7) Create the first order.
  db.orders.push({
    id: uid("ord"),
    userId,
    deliveryDate: toIso(delivery),
    status: "SCHEDULED",
    totalAmount: price.totalCAD,
    items: chosen.map((mealId, i) => ({ id: `oi_${uid()}`, mealId, quantity: 1 })),
    cutoffAt: toIso(cutoffFor(delivery)),
  });

  return res.status(201).json({
    status: "SUCCESS",
    stripeCharge: charge,
    userId,
    subscriptionId,
    totalChargedCAD: price.totalCAD,
    nextDeliveryDate: toIso(delivery),
    cutoffAt: toIso(cutoffFor(delivery)),
    shippingAddress: {
      street: addr.street,
      unit: addr.unit,
      postalCode: addr.postalCode,
      city: addr.city,
      province: addr.province,
    },
    mealsSelected: chosen.length,
  });
});

/** Auto-selection fallback engine (Section 6 Rule 3). */
function pickMeals(
  explicit: string[] | undefined,
  badges: string[],
  count: number
): string[] {
  const active = db.meals.filter((m) => m.isActive);
  if (explicit && explicit.length > 0) {
    const picks = explicit.map((id) => active.find((m) => m.id === id)).filter(Boolean);
    return picks.map((m) => m!.id);
  }
  // rank by how many requested badges the meal satisfies
  const scored = [...active].sort((a, b) => {
    const sa = a.badges.filter((x) => badges.includes(x)).length;
    const sb = b.badges.filter((x) => badges.includes(x)).length;
    return sb - sa || b.proteinGrams - a.proteinGrams;
  });
  return scored.slice(0, count).map((m) => m.id);
}

function mockStripeCharge(token: string, amountCAD: number) {
  return {
    id: `ch_${uid()}`,
    amount: Math.round(amountCAD * 100),
    currency: "cad",
    paymentMethod: token.startsWith("tok_") ? "card" : "wallet",
    status: "succeeded",
  };
}
