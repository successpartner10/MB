// ============================================================================
// Subscriber dashboard endpoints + 1-tap subscription controls (Section 5.1 /
// Core Directive #4). Single-tap skip, pause, swap, add-meal, change address,
// change window — no exit surveys, no multi-step retention flows.
// ============================================================================

import { Router } from "express";
import { z } from "zod";
import { db, findAddress, findMeal, findSubscription, ordersFor } from "../db.js";
import { priceForQuantity } from "../lib/pricing.js";
import { cutoffFor, nextDeliveryDate, toIso, windowLabel } from "../lib/delivery.js";

export const dashboardRouter = Router();

// ---------------------------------------------------------------------------
// GET /api/v1/dashboard/:userId — full dashboard payload for the app screen.
// ---------------------------------------------------------------------------
dashboardRouter.get("/api/v1/dashboard/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = db.users.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ status: "ERROR", message: "User not found" });

  const sub = findSubscription(userId);
  const addr = findAddress(userId);
  const orders = ordersFor(userId).filter((o) => o.status === "SCHEDULED");
  const upcoming = orders[0];

  const items = upcoming
    ? upcoming.items.map((it, idx) => {
        const meal = findMeal(it.mealId);
        const rest = meal ? db.restaurants.find((r) => r.id === meal.restaurantId) : undefined;
        return {
          slot: idx + 1,
          mealId: meal?.id,
          title: meal?.title,
          restaurantId: meal?.restaurantId,
          restaurantName: rest?.name,
          calories: meal?.calories,
          proteinGrams: meal?.proteinGrams,
          carbsGrams: meal?.carbsGrams,
          fatGrams: meal?.fatGrams,
          badges: meal?.badges ?? [],
        };
      })
    : [];

  return res.json({
    userId,
    user: {
      fullName: user.fullName,
      phone: user.phone,
      dietaryBadges: user.dietaryBadges,
      dropoffPreference: user.dropoffPreference,
    },
    subscription: sub
      ? {
          id: sub.id,
          planTier: sub.planTier,
          deliveryDay: sub.deliveryDay,
          deliveryLabel: sub.deliveryDay.replace("_", " "),
          window: windowLabel(sub.deliveryDay),
          isPaused: sub.isPaused,
          perMeal: priceForQuantity(sub.planTier, 1),
        }
      : null,
    address: addr
      ? {
          street: addr.street,
          unit: addr.unit,
          city: addr.city,
          province: addr.province,
          postalCode: addr.postalCode,
        }
      : null,
    order: upcoming
      ? {
          id: upcoming.id,
          deliveryDate: upcoming.deliveryDate,
          status: upcoming.status,
          totalAmount: upcoming.totalAmount,
          cutoffAt: upcoming.cutoffAt,
          items,
        }
      : null,
  });
});

// ---------------------------------------------------------------------------
// 1-tap controls
// ---------------------------------------------------------------------------
const skipBody = z.object({ orderId: z.string() });
dashboardRouter.post("/api/v1/subscription/skip", (req, res) => {
  const b = skipBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR" });
  const order = db.orders.find((o) => o.id === b.data.orderId);
  if (!order) return res.status(404).json({ status: "ERROR", message: "Order not found" });
  order.status = "SKIPPED"; // no charge (per Section 6 Rule 2)
  res.json({ status: "SUCCESS", orderId: order.id, message: "Week skipped — no charge." });
});

const pauseBody = z.object({ userId: z.string(), paused: z.boolean() });
dashboardRouter.post("/api/v1/subscription/pause", (req, res) => {
  const b = pauseBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR" });
  const sub = findSubscription(b.data.userId);
  if (!sub) return res.status(404).json({ status: "ERROR", message: "No subscription" });
  sub.isPaused = b.data.paused;
  res.json({ status: "SUCCESS", isPaused: sub.isPaused });
});

const swapBody = z.object({
  orderId: z.string(),
  slotIndex: z.number().int().min(0),
  mealId: z.string(),
});
dashboardRouter.post("/api/v1/subscription/swap", (req, res) => {
  const b = swapBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR" });
  const order = db.orders.find((o) => o.id === b.data.orderId);
  if (!order) return res.status(404).json({ status: "ERROR", message: "Order not found" });
  const item = order.items[b.data.slotIndex];
  if (!item) return res.status(400).json({ status: "ERROR", message: "Bad slot" });
  if (!findMeal(b.data.mealId))
    return res.status(404).json({ status: "ERROR", message: "Meal not found" });
  item.mealId = b.data.mealId;
  res.json({ status: "SUCCESS", orderId: order.id, slotIndex: b.data.slotIndex, mealId: b.data.mealId });
});

const addMealBody = z.object({ orderId: z.string(), mealId: z.string(), qty: z.number().int().min(1).optional().default(1) });
dashboardRouter.post("/api/v1/subscription/add-meal", (req, res) => {
  const b = addMealBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR" });
  const order = db.orders.find((o) => o.id === b.data.orderId);
  if (!order) return res.status(404).json({ status: "ERROR", message: "Order not found" });
  const sub = findSubscription(order.userId);
  const meal = findMeal(b.data.mealId);
  if (!sub || !meal) return res.status(404).json({ status: "ERROR", message: "Meal or sub missing" });
  order.items.push({ id: `oi_${Math.random().toString(36).slice(2, 8)}`, mealId: meal.id, quantity: b.data.qty });
  order.totalAmount = priceForQuantity(sub.planTier, order.items.length);
  res.json({
    status: "SUCCESS",
    orderId: order.id,
    items: order.items.length,
    totalAmount: order.totalAmount,
  });
});

const addressBody = z.object({
  userId: z.string(),
  street: z.string(),
  unit: z.string().optional(),
  postalCode: z.string(),
  city: z.string().optional().default("Toronto"),
  province: z.string().optional().default("ON"),
});
dashboardRouter.post("/api/v1/subscription/change-address", (req, res) => {
  const b = addressBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR" });
  let addr = findAddress(b.data.userId);
  if (!addr) {
    addr = {
      id: `addr_${Math.random().toString(36).slice(2, 8)}`,
      userId: b.data.userId,
      street: b.data.street,
      unit: b.data.unit,
      city: b.data.city,
      province: b.data.province,
      postalCode: b.data.postalCode,
    };
    db.addresses.push(addr);
  } else {
    Object.assign(addr, b.data);
  }
  res.json({ status: "SUCCESS", address: addr });
});

const windowBody = z.object({ userId: z.string(), deliveryDay: z.enum(["SUNDAY_AM","SUNDAY_PM","TUESDAY_AM","TUESDAY_PM"]) });
dashboardRouter.post("/api/v1/subscription/change-window", (req, res) => {
  const b = windowBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR" });
  const sub = findSubscription(b.data.userId);
  if (!sub) return res.status(404).json({ status: "ERROR", message: "No subscription" });
  sub.deliveryDay = b.data.deliveryDay;
  const delivery = nextDeliveryDate(sub.deliveryDay);
  // reschedule the pending order
  const pending = ordersFor(b.data.userId).filter((o) => o.status === "SCHEDULED")[0];
  if (pending) {
    pending.deliveryDate = toIso(delivery);
    pending.cutoffAt = toIso(cutoffFor(delivery));
  }
  res.json({ status: "SUCCESS", deliveryDay: sub.deliveryDay, window: windowLabel(sub.deliveryDay) });
});
