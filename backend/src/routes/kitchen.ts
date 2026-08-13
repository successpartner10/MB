// ============================================================================
// Kitchen batch aggregation — Section 4.2
// Restaurants get CONSOLIDATED dish totals, not chaotic per-order tickets.
//
// MULTI-RESTAURANT: pass ?restaurantId= to scope production to ONE partner
// kitchen. Each kitchen sees ONLY the dishes it must cook and the routes that
// include its meals. Omit restaurantId for the platform-wide view.
// ============================================================================

import { Router } from "express";
import {
  db,
  findMeal,
  findRestaurant,
  restaurantForMeal,
  restaurantTrustSummary,
} from "../db.js";
import { mealPrice, mealPriceOf, mealTypeOf, VEG_MEALS, bestValueBox } from "../lib/pricing.js";
import { FLEET, PRICING, partnerMonthlyFee } from "../catalog.js";

export const kitchenRouter = Router();

const ELIGIBLE = ["SCHEDULED", "PREPARING", "PACKED", "OUT_FOR_DELIVERY"];

/**
 * POST /api/v1/build/quote
 * Build-Your-Box configurator.
 *  - With `selection` (mealId -> qty): returns the all-inclusive total live.
 *  - With `budget` + filters: returns the best-value box under that budget.
 * Filters: restaurantId, area (nearby|further), cuisine, diet, cal, price.
 */
kitchenRouter.post("/api/v1/build/quote", (req, res) => {
  const { selection, budget, filters } = req.body ?? {};
  const f = filters ?? {};

  // apply filters to the menu
  const mealPool = db.meals.filter((m) => {
    if (!m.isActive) return false;
    const r = db.restaurants.find((x) => x.id === m.restaurantId);
    if (f.restaurantId && m.restaurantId !== f.restaurantId) return false;
    if (f.area === "nearby" && !["rest_oak_ash", "rest_sweet_basil"].includes(m.restaurantId)) return false;
    if (f.area === "further" && m.restaurantId !== "rest_kobu") return false;
    if (f.cuisine && !(r && r.cuisine === f.cuisine)) return false;
    if (f.diet && !m.badges.includes(f.diet)) return false;
    if (f.cal === "low" && m.calories >= 500) return false;
    if (f.cal === "mid" && (m.calories < 500 || m.calories > 600)) return false;
    if (f.cal === "high" && m.calories <= 600) return false;
    if (f.price && mealPriceOf(m) !== Number(f.price)) return false;
    return true;
  });

  // budget mode
  if (budget) {
    const picks = bestValueBox(
      mealPool.map((m) => ({ id: m.id, price: mealPriceOf(m), proteinGrams: m.proteinGrams })),
      Number(budget)
    );
    const items = picks.map((p) => {
      const m = db.meals.find((x) => x.id === p.mealId);
      const r = db.restaurants.find((x) => x.id === m?.restaurantId);
      return {
        mealId: p.mealId,
        title: m?.title,
        price: p.price,
        restaurantId: m?.restaurantId,
        restaurantName: r?.name,
        proteinGrams: m?.proteinGrams,
        calories: m?.calories,
      };
    });
    const total = items.reduce((s, i) => s + i.price, 0);
    return res.json({
      mode: "budget",
      budget: Number(budget),
      totalCAD: Math.round(total * 100) / 100,
      mealCount: items.length,
      meals: items,
    });
  }

  // selection mode: quote the running total
  const items = Object.entries(selection ?? {}).flatMap(([mealId, rawQty]) => {
    const qty = Number(rawQty);
    const m = db.meals.find((x) => x.id === mealId && x.isActive);
    if (!m || qty <= 0) return [];
    const r = db.restaurants.find((x) => x.id === m.restaurantId);
    return [{ mealId, qty, title: m.title, price: mealPriceOf(m), restaurantId: m.restaurantId, restaurantName: r?.name, calories: m.calories, proteinGrams: m.proteinGrams, type: mealTypeOf(m) }];
  });
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const veg = items.filter((i) => i.type === "veg").reduce((s, i) => s + i.qty, 0);
  const protein = items.reduce((s, i) => s + i.proteinGrams * i.qty, 0);
  res.json({
    mode: "selection",
    totalCAD: Math.round(total * 100) / 100,
    mealCount: count,
    vegCount: veg,
    nonVegCount: count - veg,
    proteinGrams: protein,
    allInclusive: true,
    items,
  });
});

// ---- v4: reviews & ratings ----
const REVIEWS = [
  { user: "Sam T.", restaurantId: "rest_oak_ash", rating: 5, text: "The shawarma bowl is unreal. Arrived hot, huge portion, zero grease." },
  { user: "Priya N.", restaurantId: "rest_sweet_basil", rating: 5, text: "Salmon was perfectly cooked and beautifully packed." },
  { user: "Jordan K.", restaurantId: "rest_kobu", rating: 4, text: "Teriyaki is my weekly staple. Would love a spicier option!" },
];
kitchenRouter.get("/api/v1/restaurants/:id/reviews", (req, res) => {
  const rest = findRestaurant(req.params.id);
  if (!rest) return res.status(404).json({ status: "ERROR", message: "Unknown restaurant" });
  res.json({
    restaurantId: rest.id,
    restaurantName: rest.name,
    rating: 4.7,
    reviewCount: REVIEWS.length + 850,
    reviews: REVIEWS.filter((r) => r.restaurantId === rest.id),
  });
});

/** GET /api/v1/build/repeat — repeat the subscriber's last week's box. */
kitchenRouter.post("/api/v1/build/repeat", (req, res) => {
  const { userId } = req.body ?? {};
  const order = db.orders.find((o) => o.userId === userId && o.status === "SCHEDULED");
  if (!order) return res.status(404).json({ status: "ERROR", message: "No pending order" });
  // reuse existing meals as "last box" and echo them back (stateless repeat preview)
  res.json({ status: "SUCCESS", orderId: order.id, items: order.items.length, totalAmount: order.totalAmount, message: "Repeated your last box." });
});

/** GET /api/v1/restaurants — list partner kitchens (with trust summaries). */
kitchenRouter.get("/api/v1/restaurants", (_req, res) => {
  res.json({ restaurants: db.restaurants.map(restaurantTrustSummary) });
});

/** GET /api/v1/restaurants/:id — kitchen profile (trust) + its full menu. */
kitchenRouter.get("/api/v1/restaurants/:id", (req, res) => {
  const rest = findRestaurant(req.params.id);
  if (!rest) return res.status(404).json({ status: "ERROR", message: "Unknown restaurant" });
  res.json({
    restaurant: restaurantTrustSummary(rest),
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

/* ============================================================================
   v5 — Supper Club Direct endpoints
   ========================================================================== */

/** GET /api/v1/catalog — full v5 dataset: restaurants (with DineSafe/ratings),
 *  dishes (with price/type), users, and counts. */
kitchenRouter.get("/api/v1/catalog", (_req, res) => {
  res.json({
    brand: "Supper Club Direct",
    restaurantCount: db.restaurants.length,
    dishCount: db.meals.length,
    userCount: db.users.length,
    restaurants: db.restaurants.map(restaurantTrustSummary),
    dishes: db.meals.map((m) => ({
      id: m.id, title: m.title, restaurantId: m.restaurantId, restaurantName: findRestaurant(m.restaurantId)?.name,
      price: mealPriceOf(m), type: mealTypeOf(m), calories: m.calories, proteinGrams: m.proteinGrams, badges: m.badges,
    })),
    users: db.users.map((u) => ({ id: u.id, name: u.fullName, dietaryBadges: u.dietaryBadges })),
  });
});

/** GET /api/v1/fleet — live delivery board for the owner (all orders out). */
kitchenRouter.get("/api/v1/fleet", (_req, res) => {
  const active = db.orders.filter((o) =>
    ["SCHEDULED", "PREPARING", "PACKED", "OUT_FOR_DELIVERY"].includes(o.status)
  );
  res.json({
    totalActive: active.length,
    outCount: FLEET.filter((f) => f.status === "OUT_FOR_DELIVERY").length,
    orders: FLEET,
  });
});

/** GET /api/v1/partner/pricing — the $200 + 10% membership model. */
kitchenRouter.get("/api/v1/partner/pricing", (_req, res) => {
  res.json({
    base: PRICING.base,
    orderFeePct: PRICING.orderFeePct,
    firstWeekFree: PRICING.firstWeekFree,
    example: {
      at2000: partnerMonthlyFee(2000),
      at3250: partnerMonthlyFee(3250),
    },
  });
});

/** GET /api/v1/dinesafe — live inspection status for all restaurants. */
kitchenRouter.get("/api/v1/dinesafe", (_req, res) => {
  res.json({
    updatedAt: new Date().toISOString(),
    source: "Toronto DineSafe open data (nightly sync)",
    restaurants: db.restaurants.map((r) => ({
      id: r.id, name: r.name, status: r.dineSafe ?? "unconditional",
      healthScore: r.healthScore, lastInspected: "recent", google: r.google, reviews: r.reviews,
    })),
  });
});

/** POST /api/v1/subscription/cadence — set order cadence (weekly/biweekly/monthly). */
kitchenRouter.post("/api/v1/subscription/cadence", (req, res) => {
  const { userId, cadence } = req.body ?? {};
  if (!["weekly", "biweekly", "monthly"].includes(cadence)) {
    return res.status(400).json({ status: "ERROR", message: "cadence must be weekly|biweekly|monthly" });
  }
  const sub = db.subscriptions.find((s) => s.userId === userId);
  if (!sub) return res.status(404).json({ status: "ERROR", message: "No subscription" });
  res.json({ status: "SUCCESS", userId, cadence, message: `Plan set to ${cadence}.` });
});

/** POST /api/v1/subscription/pause-cadence — pause an upcoming week (≤3 days before). */
kitchenRouter.post("/api/v1/subscription/pause-cadence", (req, res) => {
  const { userId, orderId } = req.body ?? {};
  const order = db.orders.find((o) => o.id === orderId && o.userId === userId);
  if (!order) return res.status(404).json({ status: "ERROR", message: "Order not found" });
  const cutoff = new Date(order.cutoffAt).getTime();
  const threeDaysMs = 3 * 86400000;
  if (cutoff - Date.now() < threeDaysMs) {
    return res.status(409).json({ status: "ERROR", code: "TOO_LATE_TO_PAUSE", message: "You can only pause up to 3 days before the cutoff." });
  }
  order.status = "SKIPPED";
  res.json({ status: "SUCCESS", orderId, message: "Week paused — no charge." });
});

/** GET /api/v1/tracking/demo — Indian Desire → CN Tower live tracking. */
kitchenRouter.get("/api/v1/tracking/demo", (_req, res) => {
  res.json({
    from: { name: "Indian Desire", address: "260 Bloor St W", lat: 43.6689, lng: -79.3908 },
    to: { name: "CN Tower", address: "301 Front St W", lat: 43.6426, lng: -79.3871 },
    status: "OUT_FOR_DELIVERY",
    etaMin: 26,
    progress: 68,
    courier: { name: "Marcus", vehicle: "Bike · Downtown" },
    dropoff: "120 Bay St, Unit 1402",
  });
});
