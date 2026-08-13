// ============================================================================
// Kitchen batch aggregation — Section 4.2
// Restaurants get CONSOLIDATED dish totals, not chaotic per-order tickets.
//
// MULTI-RESTAURANT: pass ?restaurantId= to scope production to ONE partner
// kitchen. Each kitchen sees ONLY the dishes it must cook and the routes that
// include its meals. Omit restaurantId for the platform-wide view.
// ============================================================================

import { Router } from "express";
import { db, findMeal, findRestaurant, restaurantForMeal } from "../db.js";

export const kitchenRouter = Router();

const ELIGIBLE = ["SCHEDULED", "PREPARING", "PACKED", "OUT_FOR_DELIVERY"];

/** GET /api/v1/restaurants — list partner kitchens for the portal selector. */
kitchenRouter.get("/api/v1/restaurants", (_req, res) => {
  res.json({ restaurants: db.restaurants });
});

/** GET /api/v1/restaurants/:id — kitchen profile + its full menu. */
kitchenRouter.get("/api/v1/restaurants/:id", (req, res) => {
  const rest = findRestaurant(req.params.id);
  if (!rest) return res.status(404).json({ status: "ERROR", message: "Unknown restaurant" });
  res.json({
    restaurant: rest,
    menu: db.meals.filter((m) => m.isActive && m.restaurantId === rest.id),
  });
});

/** GET /api/v1/restaurants/:id/commitment — weekly committed customers & meals. */
kitchenRouter.get("/api/v1/restaurants/:id/commitment", (req, res) => {
  const rest = findRestaurant(req.params.id);
  if (!rest) return res.status(404).json({ status: "ERROR", message: "Unknown restaurant" });

  const mealIds = new Set(
    db.meals.filter((m) => m.restaurantId === rest.id).map((m) => m.id)
  );
  const activeOrders = db.orders.filter((o) =>
    ["SCHEDULED", "PREPARING", "PACKED", "OUT_FOR_DELIVERY"].includes(o.status)
  );

  // restaurant-first committed subscribers
  const committedSubs = db.subscriptions.filter(
    (s) => s.boxMode === "SINGLE_RESTAURANT" && s.preferredRestaurantId === rest.id
  );
  const committedCustomers = committedSubs.length;
  const committedMeals = committedSubs.reduce((sum, s) => {
    const tier = s.planTier;
    return sum + { MEALS_4: 4, MEALS_6: 6, MEALS_8: 8 }[tier]!;
  }, 0);

  // total portions this kitchen must cook this week (across all box modes)
  const weeklyPortions = activeOrders.reduce((sum, o) => {
    for (const it of o.items) {
      const m = findMeal(it.mealId);
      if (m && m.restaurantId === rest.id) sum += it.quantity;
    }
    return sum;
  }, 0);

  res.json({
    restaurantId: rest.id,
    restaurantName: rest.name,
    committedCustomers, // subscribers who chose this kitchen
    committedMeals, // guaranteed full-week portions (predictable volume)
    weeklyPortions, // total portions this week incl. mixed-box orders
    deliveryWindow: "Tue 5PM-7PM",
  });
});

/**
 * GET /api/v1/kitchen/production-matrix?date=YYYY-MM-DD&restaurantId=...
 * Aggregates all active orders (optionally scoped to one restaurant).
 */
kitchenRouter.get("/api/v1/kitchen/production-matrix", (req, res) => {
  const { date, restaurantId } = req.query as {
    date?: string;
    restaurantId?: string;
  };
  const restaurant = restaurantId ? findRestaurant(restaurantId) : undefined;
  if (restaurantId && !restaurant) {
    return res.status(404).json({ status: "ERROR", message: "Unknown restaurantId" });
  }

  const orders = db.orders.filter((o) => {
    if (!ELIGIBLE.includes(o.status)) return false;
    if (date && o.deliveryDate.slice(0, 10) !== String(date)) return false;
    if (restaurant) {
      // include order only if it contains at least one meal from this kitchen
      const has = o.items.some(
        (it) => findMeal(it.mealId)?.restaurantId === restaurant.id
      );
      if (!has) return false;
    }
    return true;
  });

  // ---- aggregate dish totals (scoped to restaurant) ----
  const dishMap = new Map<string, { totalQuantity: number }>();
  for (const o of orders) {
    for (const it of o.items) {
      const meal = findMeal(it.mealId);
      if (!meal) continue;
      if (restaurant && meal.restaurantId !== restaurant.id) continue;
      const cur = dishMap.get(it.mealId) ?? { totalQuantity: 0 };
      cur.totalQuantity += it.quantity;
      dishMap.set(it.mealId, cur);
    }
  }

  const dishes = [...dishMap.entries()]
    .map(([mealId, { totalQuantity }]) => {
      const meal = findMeal(mealId);
      const rest = restaurantForMeal(mealId);
      return {
        mealId,
        title: meal?.title ?? mealId,
        restaurantId: meal?.restaurantId,
        restaurantName: rest?.name,
        calories: meal?.calories,
        badges: meal?.badges ?? [],
        totalQuantity,
        packedQuantity: db.packing[mealId] ?? 0,
      };
    })
    .sort((a, b) => b.totalQuantity - a.totalQuantity);

  // ---- route box counts: distinct users per postal prefix among scoped orders ----
  const routeMap = new Map<string, Set<string>>();
  for (const o of orders) {
    const pc = db.addresses.find((a) => a.userId === o.userId)?.postalCode;
    const prefix = pc ? pc.replace(/\s/g, "").slice(0, 3).toUpperCase() : "M5J";
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
    restaurantId: restaurant?.id ?? null,
    restaurantName: restaurant?.name ?? "All partner kitchens",
    totalMealsToCook,
    totalPacked,
    dishes,
    routes,
    courier: db.courier,
  });
});

// ---- transient Kanban state (in-memory overlay; Redis in production) ----
kitchenRouter.post("/api/v1/kitchen/pack", (req, res) => {
  const { mealId, qty } = req.body ?? {};
  if (!mealId) return res.status(400).json({ status: "ERROR", message: "mealId required" });
  const current = db.packing[mealId] ?? 0;
  db.packing[mealId] = Math.max(0, current + (Number(qty) || 1));
  res.json({ status: "SUCCESS", mealId, packedQuantity: db.packing[mealId] });
});

kitchenRouter.post("/api/v1/kitchen/ship", (req, res) => {
  const { postalPrefix, boxCount } = req.body ?? {};
  if (!postalPrefix)
    return res.status(400).json({ status: "ERROR", message: "postalPrefix required" });
  db.courier[postalPrefix] = (db.courier[postalPrefix] ?? 0) + (Number(boxCount) || 0);
  res.json({ status: "SUCCESS", postalPrefix, outWithCourier: db.courier[postalPrefix] });
});
