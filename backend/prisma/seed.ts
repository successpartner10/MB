// ============================================================================
// Prisma seed — populates the real PostgreSQL database with the Minimal Bites
// demo dataset (Aria's full subscriber profile + the Tuesday production matrix).
// Run:  npx prisma db seed
// ============================================================================

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DAY_MS = 86_400_000;

function nextTuesday18(): Date {
  const now = new Date();
  const day = new Date(now);
  const diff = (2 - day.getDay() + 7) % 7 || 7;
  day.setDate(day.getDate() + diff);
  day.setHours(17, 0, 0, 0);
  return day;
}

function cutoffFor(delivery: Date): Date {
  const c = new Date(delivery);
  const back = (c.getDay() - 0 + 7) % 7;
  c.setDate(c.getDate() - back);
  c.setHours(23, 59, 59, 0);
  return c;
}

// Kitchen matrix target (Section 5.2) minus Aria's contribution:
// 140 shawarma, 85 salmon, 25 teriyaki, 15 falafel.
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

async function main() {
  // ---- restaurants ----
  const restaurants = [
    { id: "rest_oak_ash", name: "Oak & Ash Kitchen", cuisine: "Grill & bowls", neighborhood: "Downtown / Bay", postalPrefixes: ["M5J", "M5K"] },
    { id: "rest_sweet_basil", name: "Sweet Basil", cuisine: "Mediterranean & veg", neighborhood: "Harbourfront", postalPrefixes: ["M5V", "M5J"] },
    { id: "rest_kobu", name: "Kobu Noodle & Rice", cuisine: "Asian bowls", neighborhood: "Financial District", postalPrefixes: ["M5K", "M5H"] },
  ];
  for (const r of restaurants) {
    await prisma.restaurant.upsert({
      where: { id: r.id },
      update: r,
      create: r,
    });
  }

  // ---- meals (each prepared by a partner restaurant) ----
  const meals = [
    { id: "meal_shawarma_1", restaurantId: "rest_oak_ash", title: "Grilled Chicken Shawarma Bowl", description: "Tandoor-grilled chicken, roasted veg, garlic tahini, basmati rice.", calories: 580, proteinGrams: 48, carbsGrams: 54, fatGrams: 16, badges: ["HIGH_PROTEIN"], imageUrl: "" },
    { id: "meal_salmon_2", restaurantId: "rest_sweet_basil", title: "Lemon Herb Atlantic Salmon", description: "BC-farmed salmon, lemon herb butter, charred greens, farro.", calories: 520, proteinGrams: 42, carbsGrams: 30, fatGrams: 24, badges: ["GLUTEN_FREE"], imageUrl: "" },
    { id: "meal_teriyaki_3", restaurantId: "rest_kobu", title: "Beef Teriyaki & Jasmine Rice", description: "Glazed strip loin, tender broccoli, fragrant jasmine rice.", calories: 610, proteinGrams: 40, carbsGrams: 66, fatGrams: 18, badges: ["BALANCED"], imageUrl: "" },
    { id: "meal_falafel_4", restaurantId: "rest_sweet_basil", title: "Mediterranean Falafel Plate", description: "Crispy chickpea falafel, tzatziki, tabbouleh, warm pita.", calories: 480, proteinGrams: 18, carbsGrams: 52, fatGrams: 22, badges: ["VEGETARIAN"], imageUrl: "" },
    { id: "meal_steak_5", restaurantId: "rest_oak_ash", title: "Chili Lime Steak & Sweet Potato", description: "Flank steak, chili-lime glaze, roasted sweet potato, slaw.", calories: 640, proteinGrams: 52, carbsGrams: 44, fatGrams: 26, badges: ["HIGH_PROTEIN"], imageUrl: "" },
    { id: "meal_padthai_6", restaurantId: "rest_kobu", title: "Shrimp Pad Thai", description: "Rice noodles, tiger shrimp, tamarind sauce, crushed peanuts.", calories: 590, proteinGrams: 33, carbsGrams: 72, fatGrams: 18, badges: ["GLUTEN_FREE"], imageUrl: "" },
    { id: "meal_caesar_7", restaurantId: "rest_sweet_basil", title: "Roasted Chicken Caesar Bowl", description: "Crispy chicken, romaine, parmesan, sourdough croutons.", calories: 540, proteinGrams: 44, carbsGrams: 38, fatGrams: 24, badges: ["BALANCED"], imageUrl: "" },
    { id: "meal_chili_8", restaurantId: "rest_oak_ash", title: "Turkey Chili & Brown Rice", description: "Slow-cooked turkey chili, cheddar, brown rice, pickled jalapeno.", calories: 470, proteinGrams: 36, carbsGrams: 48, fatGrams: 12, badges: ["HIGH_PROTEIN"], imageUrl: "" },
  ];

  for (const m of meals) {
    await prisma.meal.upsert({
      where: { id: m.id },
      update: m,
      create: m,
    });
  }

  // ---- Aria (primary subscriber) ----
  const delivery = nextTuesday18();
  const cutoff = cutoffFor(delivery);

  const aria = await prisma.user.upsert({
    where: { id: "usr_99812" },
    update: {},
    create: {
      id: "usr_99812",
      phone: "+14165550198",
      email: "aria@example.com",
      fullName: "Aria Chen",
      stripeCustomerId: "cus_MinimalBites1",
      dietaryBadges: ["HIGH_PROTEIN", "GLUTEN_FREE"],
      dropoffPreference: "CONCIERGE",
      deliveryAddress: {
        create: { street: "120 Bay St", unit: "Suite 1402", city: "Toronto", province: "ON", postalCode: "M5J 2R8", buzzerCode: "1402" },
      },
      subscription: {
        create: { id: "sub_77123", planTier: "MEALS_6", deliveryDay: "TUESDAY_PM", isPaused: false, currentPeriodEnd: cutoff },
      },
    },
  });

  await prisma.order.upsert({
    where: { id: "ord_aria_20260818" },
    update: {},
    create: {
      id: "ord_aria_20260818",
      userId: aria.id,
      deliveryDate: delivery,
      status: "SCHEDULED",
      totalAmount: 78.0,
      cutoffAt: cutoff,
      items: {
        create: [
          { mealId: "meal_shawarma_1", quantity: 1 },
          { mealId: "meal_salmon_2", quantity: 1 },
          { mealId: "meal_teriyaki_3", quantity: 1 },
          { mealId: "meal_falafel_4", quantity: 1 },
          { mealId: "meal_shawarma_1", quantity: 1 },
          { mealId: "meal_steak_5", quantity: 1 },
        ],
      },
    },
  });

  // ---- extra customers to hit production totals ----
  const pool = Object.keys(TARGET);
  const flat: string[] = [];
  for (const m of pool) {
    const needed = TARGET[m];
    for (let i = 0; i < needed; i++) flat.push(m);
  }
  // deterministic-ish shuffle for variety
  flat.sort(() => 0.5 - Math.random());

  const chunks: string[][] = [];
  for (let i = 0; i < flat.length; i += 4) chunks.push(flat.slice(i, i + 4));

  let n = 0;
  for (const chunk of chunks) {
    const route = ROUTES[n % ROUTES.length];
    const userId = `usr_${route.prefix.toLowerCase()}_${n}`;
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        phone: `+1416${String(2000000 + n).padStart(7, "0")}`,
        fullName: `Customer ${n}`,
        dietaryBadges: [],
        dropoffPreference: "CONCIERGE",
        deliveryAddress: { create: { street: "100 King St W", city: "Toronto", province: "ON", postalCode: `${route.prefix} 1A1` } },
      },
    });
    const orderId = `ord_v_${n}`;
    await prisma.order.upsert({
      where: { id: orderId },
      update: {},
      create: {
        id: orderId,
        userId,
        deliveryDate: delivery,
        status: "SCHEDULED",
        totalAmount: chunk.length * 13,
        cutoffAt: cutoff,
        items: { create: chunk.map((m, k) => ({ mealId: m, quantity: 1 })) },
      },
    });
    n++;
  }

  // ---- summary ----
  const orderCount = await prisma.order.count();
  const items = await prisma.orderItem.groupBy({ by: ["mealId"], _sum: { quantity: true } });
  console.log("=== PRISMA SEED COMPLETE (PostgreSQL) ===");
  console.log(`Users: ${await prisma.user.count()}   Orders: ${orderCount}   Meals: ${await prisma.meal.count()}`);
  console.log("Production matrix:");
  let total = 0;
  for (const it of items) {
    const q = it._sum.quantity ?? 0;
    total += q;
    const m = meals.find((x) => x.id === it.mealId);
    console.log(`  ${q}x  ${m?.title}`);
  }
  console.log(`TOTAL: ${total}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
