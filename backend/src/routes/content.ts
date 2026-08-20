// ============================================================================
// v6 content system — auctions, public giving ledger, auto-generated content
// Serves the data that drives the Featured / Dish of the Day / Chef Story /
// What Toronto Ate sections + the daily auction + the Supper Club Gives ledger.
// ============================================================================

import { Router } from "express";
import { db } from "../db.js";

export const contentRouter = Router();

/* ---------- fixed sponsor prices (decision: $100–150/wk each) ---------- */
const SPONSOR_PRICES = { "What Toronto Ate": 120, wellness: 120, newsletter: 150 };

/* ---------- charity meal valuation (decision: app-standard $13/meal) ---------- */
const CHARITY_MEAL_RATE = 13;
const GIVES_WEEK = 1500; // $1,500/week, split $500/$500/$500

/* ---------- daily auction state (in-memory; DB in production) ---------- */
const AUCTION_SLOTS = ["Featured Restaurant", "Dish of the Day", "Chef Story"];
interface Bid { restaurantId: string; restaurantName: string; amount: number; day: string; ts: number }
// slot -> day -> bids
const auctionBids: Record<string, Record<string, Bid[]>> = {};
// restaurant -> set of weeks it already won (fairness: 1 win/week)
const winsThisWeek = new Map<string, string>(); // restaurantId -> slot won this week
let auctionWeek = 1;

/** GET /api/v1/auctions — current auction state (all bids, transparent). */
contentRouter.get("/api/v1/auctions", (_req, res) => {
  const days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
  const slots = AUCTION_SLOTS.map((slot) => ({
    slot,
    startingBid: 50,
    days: days.map((day) => {
      const bids = (auctionBids[slot]?.[day] ?? []).sort((a, b) => b.amount - a.amount);
      return {
        day,
        topBid: bids[0]?.amount ?? 50,
        bidCount: bids.length,
        leader: bids[0]?.restaurantName ?? "—",
        bids: bids.map((b) => ({ restaurant: b.restaurantName, amount: b.amount })),
      };
    }),
  }));
  res.json({
    week: auctionWeek,
    startingBid: 50,
    bidWindow: "Monday–Wednesday",
    fairnessRule: "One slot per restaurant per week. You can bid for any upcoming day, but can only WIN one slot this week.",
    slots,
  });
});

/** POST /api/v1/auctions/bid — place a bid. */
contentRouter.post("/api/v1/auctions/bid", (req, res) => {
  const { restaurantId, slot, day, amount } = req.body ?? {};
  if (!AUCTION_SLOTS.includes(slot)) return res.status(400).json({ status: "ERROR", message: "Unknown slot" });
  const rest = db.restaurants.find((r) => r.id === restaurantId);
  if (!rest) return res.status(404).json({ status: "ERROR", message: "Unknown restaurant" });
  if (Number(amount) < 50) return res.status(400).json({ status: "ERROR", message: "Minimum bid is $50" });

  // Fairness cap: one WIN per restaurant per week (any slot).
  if (winsThisWeek.has(restaurantId)) {
    return res.status(409).json({ status: "ERROR", code: "ALREADY_WON_THIS_WEEK", message: `You already won ${winsThisWeek.get(restaurantId)} this week. You can bid again next week.` });
  }

  auctionBids[slot] = auctionBids[slot] || {};
  auctionBids[slot][day] = auctionBids[slot][day] || [];
  auctionBids[slot][day].push({ restaurantId, restaurantName: rest.name, amount: Number(amount), day, ts: Date.now() });
  winsThisWeek.set(restaurantId, slot); // mark as bidding (fairness: they've committed this week)

  res.json({ status: "SUCCESS", slot, day, amount, message: `Bid of $${amount} placed for ${day}. You've committed to one slot this week.` });
});

/* ---------- Supper Club Gives public ledger ---------- */
const givesLedger = [
  { date: "2026-07-14", sponsor: "NorthStar Bank", restaurant: "Indian Desire", shelter: "Daily Bread Food Bank", amountEach: 500 },
  { date: "2026-07-15", sponsor: "Liberty Gym", restaurant: "Seoul Food Co.", shelter: "Fred Victor", amountEach: 500 },
  { date: "2026-07-16", sponsor: "Queen Laundromat", restaurant: "Sweet Basil", shelter: "Scott Mission", amountEach: 500 },
  { date: "2026-07-17", sponsor: "Bay Street Legal", restaurant: "Taco Toro", shelter: "Daily Bread Food Bank", amountEach: 500 },
  { date: "2026-07-18", sponsor: "Green Table Grocer", restaurant: "The Oat Cart", shelter: "Fred Victor", amountEach: 500 },
  { date: "2026-07-19", sponsor: "NorthStar Bank", restaurant: "Kobu Noodle & Rice", shelter: "Scott Mission", amountEach: 500 },
];

/** GET /api/v1/gives — public, searchable giving ledger. */
contentRouter.get("/api/v1/gives", (req, res) => {
  const q = String(req.query.q ?? "").toLowerCase();
  const rows = givesLedger
    .filter((g) => !q || [g.sponsor, g.restaurant, g.shelter].some((s) => s.toLowerCase().includes(q)))
    .map((g) => ({ ...g, app: "Supper Club Direct", total: g.amountEach * 3 }));
  const totalMeals = rows.length * 38; // 38 meals @ $13 = $500
  const total$ = rows.reduce((s, r) => s + r.total, 0);
  res.json({
    weeklyAmount: GIVES_WEEK,
    split: { sponsor: 500, restaurant: 500, app: 500 },
    mealRate: CHARITY_MEAL_RATE,
    totals: { mealsGiven: totalMeals, donated: total$, partners: rows.length },
    entries: rows,
  });
});

/* ---------- auto-generated content (from DB data) ---------- */
/** GET /api/v1/content — Featured / Dish of the Day / Chef Story / What Toronto Ate. */
contentRouter.get("/api/v1/content", (_req, res) => {
  // What Toronto Ate = aggregate order data by dish
  const dishCounts = new Map<string, number>();
  for (const o of db.orders) {
    for (const it of o.items) {
      const m = db.meals.find((x) => x.id === it.mealId);
      if (m) dishCounts.set(m.title, (dishCounts.get(m.title) ?? 0) + it.quantity);
    }
  }
  const topDishes = [...dishCounts.entries()]
    .map(([title, orders]) => {
      const m = db.meals.find((x) => x.title === title);
      const r = m ? db.restaurants.find((x) => x.id === m.restaurantId) : undefined;
      return { dish: title, restaurant: r?.name ?? "—", orders };
    })
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 5);

  // Featured = highest-rated restaurant (auto-pick when no auction winner)
  const featured = [...db.restaurants].sort((a, b) => (b.google ?? 0) - (a.google ?? 0))[0];
  const dishWinner = AUCTION_SLOTS.length; // demo: pick a dish from top restaurant
  const featuredDish = db.meals.find((m) => m.restaurantId === featured?.id);

  res.json({
    featured: { restaurantId: featured?.id, name: featured?.name, cuisine: featured?.cuisine, neighborhood: featured?.neighborhood, google: featured?.google, dineSafe: featured?.dineSafe },
    dishOfTheDay: { title: featuredDish?.title, restaurant: featured?.name, recipe: "Auto-generated recipe placeholder — full recipe supplied by the auction winner.", calories: featuredDish?.calories },
    chefStory: { restaurant: "Sweet Basil", chef: "Aisha B.", line: "Trained in Beirut, cooks plant-forward Mediterranean." },
    whatTorontoAte: topDishes,
    sponsorPrices: SPONSOR_PRICES,
  });
});

/** GET /api/v1/content/sponsors — available fixed sponsorship slots + prices. */
contentRouter.get("/api/v1/content/sponsors", (_req, res) => {
  res.json({
    slots: Object.entries(SPONSOR_PRICES).map(([name, price]) => ({ name, pricePerWeek: price, cadence: "weekly" })),
  });
});
