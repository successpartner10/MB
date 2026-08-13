// ============================================================================
// Cutoff Automation Engine — Section 6 Rule 2
// Fires Sunday 11:59 PM EST: charges Stripe for active orders, auto-selects
// meals for users who never opened the app, and emits the kitchen production
// matrix for the week. Skipped orders are never charged.
// ============================================================================

import { db, findMeal, selectBoxMeals } from "../db.js";
import { priceForQuantity } from "../lib/pricing.js";
import { cutoffFor } from "../lib/delivery.js";

export interface CutoffResult {
  processedAt: string;
  ordersCharged: number;
  totalChargedCAD: number;
  mealsAutoSelected: number;
  productionTotal: number;
}

export function processCutoff(): CutoffResult {
  const now = new Date();
  let ordersCharged = 0;
  let totalChargedCAD = 0;
  let mealsAutoSelected = 0;

  for (const order of db.orders) {
    // only pending orders for the upcoming window
    if (order.status !== "SCHEDULED") continue;

    // Auto-select meals for any empty order (user never opened the app).
    // Respects the subscription's box mode: restaurant-first users get a full
    // box from their chosen kitchen.
    if (order.items.length === 0) {
      const user = db.users.find((u) => u.id === order.userId);
      const sub = db.subscriptions.find((s) => s.userId === order.userId);
      const badges = user?.dietaryBadges ?? [];
      const count = estimateMealCount(order.userId);
      const restId =
        sub?.boxMode === "SINGLE_RESTAURANT" ? sub.preferredRestaurantId : undefined;
      const picks = selectBoxMeals(count, badges, restId);
      order.items = picks.map((m, i) => ({ id: `oc_${i}`, mealId: m, quantity: 1 }));
      order.totalAmount = order.totalAmount || priceForQuantity("MEALS_6", picks.length);
      mealsAutoSelected += picks.length;
    }

    // Charge Stripe (mocked) — only for non-skipped active orders.
    const charged = mockCharge(order.id, order.totalAmount);
    ordersCharged += 1;
    totalChargedCAD += order.totalAmount;
    order.status = "PREPARING";
  }

  // Recompute production matrix snapshot.
  const productionTotal = db.orders
    .filter((o) => ["PREPARING", "PACKED", "OUT_FOR_DELIVERY", "SCHEDULED"].includes(o.status))
    .reduce((s, o) => s + o.items.reduce((x, it) => x + it.quantity, 0), 0);

  return {
    processedAt: now.toISOString(),
    ordersCharged,
    totalChargedCAD: Math.round(totalChargedCAD * 100) / 100,
    mealsAutoSelected,
    productionTotal,
  };
}

function estimateMealCount(userId: string): number {
  const sub = db.subscriptions.find((s) => s.userId === userId);
  const tier = sub?.planTier ?? "MEALS_6";
  return { MEALS_4: 4, MEALS_6: 6, MEALS_8: 8 }[tier] ?? 6;
}

function mockCharge(orderId: string, amountCAD: number) {
  return {
    id: `ch_${Math.random().toString(36).slice(2, 12)}`,
    orderId,
    amount: Math.round(amountCAD * 100),
    currency: "cad",
    status: "succeeded",
  };
}

/**
 * Scheduler: check every 30s; fire when the wall clock crosses Sunday 23:59:30
 * EST. (EST = UTC-5; keep it simple and EST-anchored for the demo.)
 */
export function startCutoffCron(intervalMs = 30_000) {
  const estOffset = 5 * 60 * 60 * 1000; // EST (UTC-5)
  console.log("[cutoff] Cron running — will process at each Sunday 11:59 PM EST");
  return setInterval(() => {
    const now = new Date();
    const est = new Date(now.getTime() - estOffset);
    const isSunday = est.getDay() === 0;
    const inWindow = est.getHours() === 23 && est.getMinutes() >= 59;
    if (isSunday && inWindow) {
      console.log("[cutoff] Triggered at Sunday 11:59 PM EST.");
      const result = processCutoff();
      console.log("[cutoff] Result:", JSON.stringify(result, null, 2));
    }
  }, intervalMs);
}
