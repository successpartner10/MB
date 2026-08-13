// ============================================================================
// Seed script — boots the demo database with the GTA subscriber (Aria) plus a
// realistic multi-customer production matrix that matches the Section 5.2
// kitchen totals exactly: 265 meals (140 shawarma / 85 salmon / 25 teriyaki /
// 15 falafel), routed across downtown Toronto postal prefixes.
// ============================================================================

import {
  db,
  seedMeals,
  seedRestaurants,
  type Order,
  type User,
  type Address,
  type Subscription,
} from "./db.js";
import { seedCatalog } from "./catalog.js";
import { TIER_PRICING } from "./lib/pricing.js";

// price/type defaults for the legacy 18 seed meals (v5 fields)
const SEED_PRICE: Record<string, { price: number; type: "veg" | "nonveg" }> = {
  meal_shawarma_1: { price: 13, type: "nonveg" },
  meal_salmon_2: { price: 14, type: "nonveg" },
  meal_teriyaki_3: { price: 13, type: "nonveg" },
  meal_falafel_4: { price: 12, type: "veg" },
  meal_steak_5: { price: 14, type: "nonveg" },
  meal_padthai_6: { price: 14, type: "nonveg" },
  meal_caesar_7: { price: 13, type: "nonveg" },
  meal_chili_8: { price: 12, type: "nonveg" },
  meal_brisket_9: { price: 14, type: "nonveg" },
  meal_harissa_10: { price: 13, type: "nonveg" },
  meal_skewer_11: { price: 13, type: "nonveg" },
  meal_kofte_12: { price: 13, type: "nonveg" },
  meal_halloumi_13: { price: 13, type: "veg" },
  meal_zaatar_14: { price: 13, type: "nonveg" },
  meal_tunapoke_15: { price: 14, type: "nonveg" },
  meal_kungpao_16: { price: 13, type: "nonveg" },
  meal_yakisoba_17: { price: 12, type: "veg" },
  meal_teriyakitofu_18: { price: 12, type: "veg" },
};

const DAY_MS = 86_400_000;

export function nextTuesday18(): Date {
  const now = new Date();
  const day = new Date(now);
  const diff = (2 - day.getDay() + 7) % 7 || 7;
  day.setDate(day.getDate() + diff);
  day.setHours(17, 0, 0, 0); // 5:00 PM window start
  return day;
}

export function cutoffFor(delivery: Date): Date {
  const c = new Date(delivery);
  const diff = (c.getDay() - 0 + 7) % 7; // days back to Sunday
  c.setDate(c.getDate() - diff);
  c.setHours(23, 59, 59, 0);
  return c;
}

const toIso = (d: Date) => d.toISOString();

// ---------------------------------------------------------------------------
// Aria — the primary subscriber the dashboards are built around.
// ---------------------------------------------------------------------------
const nowIso = toIso(new Date());

const aria: User = {
  id: "usr_99812",
  phone: "+14165550198",
  email: "aria@example.com",
  fullName: "Aria Chen",
  stripeCustomerId: "cus_MinimalBites1",
  dietaryBadges: ["HIGH_PROTEIN", "GLUTEN_FREE"],
  dropoffPreference: "CONCIERGE",
  createdAt: nowIso,
};

const ariaAddress: Address = {
  id: "addr_1",
  userId: aria.id,
  street: "120 Bay St",
  unit: "Suite 1402",
  city: "Toronto",
  province: "ON",
  postalCode: "M5J 2R8",
  buzzerCode: "1402",
  instructions: "Concierge will hold in the lobby.",
};

const ariaSubscription: Subscription = {
  id: "sub_77123",
  userId: aria.id,
  planTier: "MEALS_6",
  deliveryDay: "TUESDAY_PM",
  isPaused: false,
  // Aria starts in Mixed mode (variety across kitchens). She can switch to a
  // single restaurant with one tap to commit her full weekly box to one kitchen.
  boxMode: "MIXED",
  preferredRestaurantId: undefined,
  cadence: "weekly",
  stripeSubscriptionId: "sub_stripe_abc123",
  currentPeriodEnd: cutoffFor(nextTuesday18()).toISOString(),
};

const ariaOrder: Order = {
  id: "ord_aria_20260818",
  userId: aria.id,
  deliveryDate: toIso(nextTuesday18()),
  status: "SCHEDULED",
  totalAmount: TIER_PRICING.MEALS_6.totalCAD, // 78.00
  items: [
    { id: "oi_01", mealId: "meal_shawarma_1", quantity: 1 },
    { id: "oi_02", mealId: "meal_salmon_2", quantity: 1 },
    { id: "oi_03", mealId: "meal_teriyaki_3", quantity: 1 },
    { id: "oi_04", mealId: "meal_falafel_4", quantity: 1 },
    { id: "oi_05", mealId: "meal_shawarma_1", quantity: 1 },
    { id: "oi_06", mealId: "meal_steak_5", quantity: 1 },
  ],
  cutoffAt: toIso(cutoffFor(nextTuesday18())),
};

// ---------------------------------------------------------------------------
// Production matrix volume. Target totals (Section 5.2):
//   shawarma 140, salmon 85, teriyaki 25, falafel 15  => 265 meals
// These are the "extra" kitchen orders across ~75 downtown customers, so the
// spec totals are hit exactly.
// ---------------------------------------------------------------------------
// Kitchen matrix target totals (Section 5.2): 140 shawarma / 85 salmon /
// 25 teriyaki / 15 falafel = 265. Aria's own order contributes +2 shawarma,
// +1 salmon, +1 teriyaki, +1 falafel, so the OTHER customers must produce the
// remainder below.
const TARGET: Record<string, number> = {
  meal_shawarma_1: 138,
  meal_salmon_2: 84,
  meal_teriyaki_3: 24,
  meal_falafel_4: 14,
};

const ROUTES = [
  { prefix: "M5J", boxCount: 30 },
  { prefix: "M5V", boxCount: 35 },
  { prefix: "M5K", boxCount: 28 },
  { prefix: "M5H", boxCount: 22 },
];

function buildExtraOrders(): Order[] {
  const orders: Order[] = [];
  const mealPool = Object.keys(TARGET);
  const counts: Record<string, number> = { ...TARGET };

  const boxMeals: string[] = [];
  // Build a flat list of meals for all boxes (each box ~3.5 meals).
  const totalBoxes = ROUTES.reduce((s, r) => s + r.boxCount, 0);
  for (let i = 0; i < totalBoxes * 3; i++) {
    boxMeals.push(mealPool[i % mealPool.length]);
  }
  // Trim/adjust so per-meal counts match TARGET exactly.
  const final: string[] = [];
  for (const m of mealPool) {
    const needed = counts[m];
    const have = boxMeals.filter((x) => x === m).length;
    final.push(...boxMeals.filter((x) => x === m));
    // top up shortfalls
    if (have < needed) {
      for (let k = 0; k < needed - have; k++) final.push(m);
    }
    // if over, they'll be trimmed below in order of oversupply
  }
  // remove oversupply
  for (const m of mealPool) {
    while (final.filter((x) => x === m).length > counts[m]) {
      final.splice(final.indexOf(m), 1);
    }
  }
  // chunk into per-user orders (max 8 meals each, realistically 3-4)
  const chunks: string[][] = [];
  for (let i = 0; i < final.length; i += 4) {
    chunks.push(final.slice(i, i + 4));
  }
  chunks.forEach((meals, i) => {
    const route = ROUTES[i % ROUTES.length];
    const virtualUserId = `usr_${route.prefix.toLowerCase()}_${i}`;
    if (!db.users.find((u) => u.id === virtualUserId)) {
      db.users.push({
        id: virtualUserId,
        phone: `+1416${String(2000000 + i).padStart(7, "0")}`,
        fullName: `Customer ${i}`,
        dietaryBadges: [],
        dropoffPreference: "CONCIERGE",
        createdAt: nowIso,
      });
    }
    if (!db.addresses.find((a) => a.userId === virtualUserId)) {
      db.addresses.push({
        id: `addr_v_${i}`,
        userId: virtualUserId,
        street: "100 King St W",
        unit: `Unit ${100 + i}`,
        city: "Toronto",
        province: "ON",
        postalCode: `${route.prefix} 1A1`,
      });
    }
    orders.push({
      id: `ord_v_${i}`,
      userId: virtualUserId,
      deliveryDate: toIso(nextTuesday18()),
      status: "SCHEDULED",
      totalAmount: meals.length * 13,
      items: meals.map((m, k) => ({ id: `ovi_${i}_${k}`, mealId: m, quantity: 1 })),
      cutoffAt: toIso(cutoffFor(nextTuesday18())),
    });
  });
  return orders;
}

// ---------------------------------------------------------------------------
export function seedAll() {
  db.users = [aria];
  db.addresses = [ariaAddress];
  db.subscriptions = [ariaSubscription];
  db.restaurants = seedRestaurants;
  // attach v5 price/type to the legacy meals, then load the full v5 catalog
  db.meals = seedMeals.map((m) => {
    const d = SEED_PRICE[m.id];
    return d ? { ...m, price: d.price, type: d.type } : { ...m, price: 13, type: "nonveg" as const };
  });
  db.orders = [ariaOrder];
  db.packing = { meal_shawarma_1: 80, meal_salmon_2: 85, meal_teriyaki_3: 0, meal_falafel_4: 15 };
  db.courier = { M5V: 30, M5J: 30 };

  // add the full v5 catalog (15 restaurants, 128 dishes, 24 users) additively
  seedCatalog();

  const extras = buildExtraOrders();
  db.orders.push(...extras);

  const matrixCounts: Record<string, number> = {};
  for (const o of db.orders) {
    for (const it of o.items) {
      matrixCounts[it.mealId] = (matrixCounts[it.mealId] || 0) + it.quantity;
    }
  }

  console.log("=== MINIMAL BITES SEED COMPLETE ===");
  console.log(`Primary user: ${aria.id} (${aria.fullName})`);
  console.log(`Orders seeded: ${db.orders.length}`);
  console.log(`Partner restaurants: ${db.restaurants.map((r) => r.name).join(" · ")}`);
  const total = Object.values(matrixCounts).reduce((s, n) => s + n, 0);
  console.log(`Production matrix total: ${total} meals`);
  for (const [k, v] of Object.entries(matrixCounts)) {
    const meal = db.meals.find((m) => m.id === k);
    const rest = meal ? db.restaurants.find((r) => r.id === meal.restaurantId) : null;
    console.log(`  ${v}x  ${meal?.title}  [${rest?.name}]`);
  }
}

// run when invoked directly
if (process.argv[1] && process.argv[1].endsWith("seed.ts")) {
  seedAll();
}
