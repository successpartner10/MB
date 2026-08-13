// ============================================================================
// Kitchen batch aggregation — Section 4.2
// Restaurants get CONSOLIDATED dish totals, not chaotic per-order tickets.
// The demo backend runs on the in-memory store that mirrors the Prisma schema.
// (Production: swap `db.ts` for the Prisma Client backed by PostgreSQL — the
// schema + migration + seed live in backend/prisma and are verified in PG.)
// ============================================================================

import { Router } from "express";
import { db, findMeal } from "../db.js";

export const kitchenRouter = Router();

const PREFIX_MAP: Record<string, string> = {
  usr_99812: "M5J",
  usr_m5j: "M5J",
  usr_m5v: "M5V",
  usr_m5k: "M5K",
  usr_m5h: "M5H",
};

function postalPrefixFor(userId: string): string {
  for (const key of Object.keys(PREFIX_MAP)) {
    if (userId === key || userId.startsWith(`${key}_`)) return PREFIX_MAP[key];
  }
  return "M5J";
}

const ELIGIBLE = ["SCHEDULED", "PREPARING", "PACKED", "OUT_FOR_DELIVERY"];

/**
 * GET /api/v1/kitchen/production-matrix?date=2026-08-18
 * date defaults to the next Tuesday delivery window.
 */
kitchenRouter.get("/api/v1/kitchen/production-matrix", (req, res) => {
  const { date } = req.query;
  const orders = db.orders.filter((o) => {
    if (!ELIGIBLE.includes(o.status)) return false;
    if (date) return o.deliveryDate.slice(0, 10) === String(date);
    return true;
  });

  // ---- aggregate dish totals ----
  const dishMap = new Map<string, { totalQuantity: number }>();
  for (const o of orders) {
    for (const it of o.items) {
      const cur = dishMap.get(it.mealId) ?? { totalQuantity: 0 };
      cur.totalQuantity += it.quantity;
      dishMap.set(it.mealId, cur);
    }
  }

  const dishes = [...dishMap.entries()]
    .map(([mealId, { totalQuantity }]) => {
      const meal = findMeal(mealId);
      return {
        mealId,
        title: meal?.title ?? mealId,
        calories: meal?.calories,
        badges: meal?.badges ?? [],
        totalQuantity,
        packedQuantity: db.packing[mealId] ?? 0,
      };
    })
    .sort((a, b) => b.totalQuantity - a.totalQuantity);

  // ---- route box counts ----
  const routeMap = new Map<string, Set<string>>();
  for (const o of orders) {
    const prefix = postalPrefixFor(o.userId);
    if (!routeMap.has(prefix)) routeMap.set(prefix, new Set());
    routeMap.get(prefix)!.add(o.userId);
  }
  const routes = [...routeMap.entries()].map(([postalPrefix, users]) => ({
    postalPrefix,
    boxCount: users.size,
  }));

  const totalMealsToCook = dishes.reduce((s, d) => s + d.totalQuantity, 0);
  const totalPacked = dishes.reduce((s, d) => s + d.packedQuantity, 0);

  res.json({
    deliveryDate: date ? String(date) : "upcoming",
    totalMealsToCook,
    totalPacked,
    dishes,
    routes,
    courier: db.courier,
  });
});

/** POST /api/v1/kitchen/pack  { mealId, qty } — advance packing state. */
kitchenRouter.post("/api/v1/kitchen/pack", (req, res) => {
  const { mealId, qty } = req.body ?? {};
  if (!mealId) return res.status(400).json({ status: "ERROR", message: "mealId required" });
  const current = db.packing[mealId] ?? 0;
  db.packing[mealId] = Math.max(0, current + (Number(qty) || 1));
  res.json({ status: "SUCCESS", mealId, packedQuantity: db.packing[mealId] });
});

/** POST /api/v1/kitchen/ship  { postalPrefix, boxCount } — move boxes to courier. */
kitchenRouter.post("/api/v1/kitchen/ship", (req, res) => {
  const { postalPrefix, boxCount } = req.body ?? {};
  if (!postalPrefix)
    return res.status(400).json({ status: "ERROR", message: "postalPrefix required" });
  db.courier[postalPrefix] = (db.courier[postalPrefix] ?? 0) + (Number(boxCount) || 0);
  res.json({ status: "SUCCESS", postalPrefix, outWithCourier: db.courier[postalPrefix] });
});
