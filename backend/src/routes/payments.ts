// ============================================================================
// POST /api/v1/payments/intent — create a PaymentIntent for an order
// POST /api/v1/payments/webhook — Stripe webhook (verifies signature)
// POST /api/v1/payments/refund — refund (e.g. Sliding Scale threshold not met)
// ============================================================================

import { Router } from "express";
import { z } from "zod";
import { createPaymentIntent, refund, verifyWebhook } from "../lib/stripe.js";

// Extend the Express Request type to include the raw body used by webhooks.
declare global {
  namespace Express {
    interface Request {
      rawBody?: Buffer;
    }
  }
}

export const paymentsRouter = Router();

const IntentSchema = z.object({
  amountCents: z.number().int().positive(),
  customerId: z.string().optional(),
  orderId: z.string().optional(),
});

paymentsRouter.post("/api/v1/payments/intent", async (req, res) => {
  const parsed = IntentSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ status: "ERROR", errors: parsed.error.flatten() });
  const b = parsed.data;
  const result = await createPaymentIntent({
    amountCents: b.amountCents,
    customerId: b.customerId,
    metadata: b.orderId ? { orderId: b.orderId } : undefined,
  });
  return res.json({ status: "OK", clientSecret: result.clientSecret, paymentId: result.id, demo: result.demo });
});

// Stripe webhook — MUST verify signature in production
paymentsRouter.post("/api/v1/payments/webhook", expressRaw(), async (req, res) => {
  const sig = req.headers["stripe-signature"] as string;
  const secret = process.env.STRIPE_WEBHOOK_SECRET || "";
  try {
    const rawBody = req.rawBody || Buffer.from(JSON.stringify(req.body || {}));
    const event = await verifyWebhook(rawBody, sig, secret);
    // handle event.type === "payment_intent.succeeded" etc.
    return res.json({ received: true, type: event.type });
  } catch (err: any) {
    return res.status(400).json({ status: "ERROR", message: "Webhook signature verification failed" });
  }
});

paymentsRouter.post("/api/v1/payments/refund", async (req, res) => {
  const parsed = z.object({ paymentId: z.string(), amountCents: z.number().int().optional() }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ status: "ERROR", errors: parsed.error.flatten() });
  const r = await refund(parsed.data.paymentId, parsed.data.amountCents);
  return res.json({ status: "OK", refund: r });
});

// helper to capture rawBody for webhook signature verification
function expressRaw() {
  return (req: any, _res: any, next: any) => {
    req.rawBody = Buffer.from(JSON.stringify(req.body || {}));
    next();
  };
}
