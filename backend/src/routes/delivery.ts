// ============================================================================
// POST /api/v1/delivery/quote — best-price delivery quote across providers
// POST /api/v1/delivery/create — create delivery on chosen provider
// ============================================================================

import { Router } from "express";
import { z } from "zod";
import { quoteBest, createDelivery } from "../lib/delivery-providers.js";

export const deliveryRouter = Router();

const DeliverySchema = z.object({
  pickupAddress: z.string(),
  dropoffAddress: z.string(),
  pickupPostal: z.string(),
  dropoffPostal: z.string(),
  items: z.array(z.object({ qty: z.number().int().positive(), name: z.string() })).min(1),
  scheduledAt: z.string().optional(),
});

// Best-price quote (lowest cost + ETA) across Uber Direct / OrderOut
deliveryRouter.post("/api/v1/delivery/quote", async (req, res) => {
  const parsed = DeliverySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ status: "ERROR", errors: parsed.error.flatten() });
  const quote = await quoteBest(parsed.data as any);
  return res.json({ status: "OK", quote });
});

// Create delivery on the chosen provider
deliveryRouter.post("/api/v1/delivery/create", async (req, res) => {
  const parsed = DeliverySchema.extend({ provider: z.enum(["UBER_DIRECT", "DOORDASH_DRIVE", "ORDEROUT"]) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ status: "ERROR", errors: parsed.error.flatten() });
  const d = await createDelivery(parsed.data.provider, parsed.data as any);
  return res.json({ status: "OK", ...d });
});
