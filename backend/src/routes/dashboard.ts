// ============================================================================
// Subscriber dashboard endpoints + 1-tap subscription controls (Section 5.1 /
// Core Directive #4). Single-tap skip, pause, swap, add-meal, change address,
// change window — no exit surveys, no multi-step retention flows.
// ============================================================================

import { Router } from "express";
import { z } from "zod";
import {
  db,
  findAddress,
  findMeal,
  findSubscription,
  findRestaurant,
  ordersFor,
  selectBoxMeals,
  activeMenuCount,
  type BoxMode,
} from "../db.js";
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
  const preferred = sub?.preferredRestaurantId
    ? findRestaurant(sub.preferredRestaurantId)
    : undefined;

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
          boxMode: sub.boxMode,
          preferredRestaurant: preferred
            ? {
                id: preferred.id,
                name: preferred.name,
                neighborhood: preferred.neighborhood,
                hygieneRating: preferred.hygieneRating,
                healthScore: preferred.healthScore,
                verified: preferred.verified,
              }
            : null,
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

// ---------------------------------------------------------------------------
// Restaurant-first control: commit the whole weekly box to ONE kitchen.
// This is the trust + predictable-weekly-volume feature the subscriber asked for.
// ---------------------------------------------------------------------------
const chooseRestaurantBody = z.object({
  userId: z.string(),
  restaurantId: z.string(),
});
dashboardRouter.post("/api/v1/subscription/choose-restaurant", (req, res) => {
  const b = chooseRestaurantBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR", errors: b.error.flatten() });
  const sub = findSubscription(b.data.userId);
  if (!sub) return res.status(404).json({ status: "ERROR", message: "No subscription" });
  const restaurant = findRestaurant(b.data.restaurantId);
  if (!restaurant || !restaurant.isActive)
    return res.status(404).json({ status: "ERROR", message: "Unknown restaurant" });

  // Eligibility: a kitchen must offer enough distinct weekly dishes to build a
  // complete box for this plan (trust + full-week commitment requirement).
  const planSize = { MEALS_4: 4, MEALS_6: 6, MEALS_8: 8 }[
    sub.planTier as "MEALS_4" | "MEALS_6" | "MEALS_8"
  ] ?? 6;
  const menuCount = activeMenuCount(restaurant.id);
  const required = Math.max(restaurant.minWeeklyDishes, planSize);
  if (menuCount < required) {
    return res.status(409).json({
      status: "ERROR",
      code: "KITCHEN_MENU_TOO_SMALL",
      message: `${restaurant.name} currently offers ${menuCount} weekly dishes, but a ${planSize}-meal box needs at least ${required}. We'll notify you when their menu grows, or pick another kitchen.`,
    });
  }

  // switch the subscription to restaurant-first
  sub.boxMode = "SINGLE_RESTAURANT" as BoxMode;
  sub.preferredRestaurantId = restaurant.id;

  // rebuild the current week's order entirely from that kitchen's menu
  const pending = ordersFor(b.data.userId).find((o) => o.status === "SCHEDULED");
  if (pending) {
    const tier = sub.planTier as "MEALS_4" | "MEALS_6" | "MEALS_8";
    const count = { MEALS_4: 4, MEALS_6: 6, MEALS_8: 8 }[tier] ?? 6;
    const user = db.users.find((u) => u.id === b.data.userId);
    // full box from this kitchen only (cycles menu if smaller than plan size)
    const picks = selectBoxMeals(count, user?.dietaryBadges ?? [], restaurant.id);
    pending.items = picks.map((id, i) => ({ id: `oi_${i}`, mealId: id, quantity: 1 }));
    pending.totalAmount = priceForQuantity(sub.planTier, picks.length);
  }

  res.json({
    status: "SUCCESS",
    boxMode: "SINGLE_RESTAURANT",
    restaurant: { id: restaurant.id, name: restaurant.name, neighborhood: restaurant.neighborhood },
    message: `Your whole weekly box is now from ${restaurant.name}.`,
  });
});

// Switch back to a curated Mixed box (variety across kitchens).
const chooseMixedBody = z.object({ userId: z.string() });
dashboardRouter.post("/api/v1/subscription/choose-mixed", (req, res) => {
  const b = chooseMixedBody.safeParse(req.body);
  if (!b.success) return res.status(400).json({ status: "ERROR" });
  const sub = findSubscription(b.data.userId);
  if (!sub) return res.status(404).json({ status: "ERROR", message: "No subscription" });
  sub.boxMode = "MIXED" as BoxMode;
  sub.preferredRestaurantId = undefined;
  res.json({
    status: "SUCCESS",
    boxMode: "MIXED",
    message: "Your box is now curated variety across partner kitchens.",
  });
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
