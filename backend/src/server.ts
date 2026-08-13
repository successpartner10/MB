// ============================================================================
// Minimal Bites — API server entrypoint
// Express + TypeScript. In-memory store (swap `db.ts` for Prisma in prod).
// ============================================================================

import express from "express";
import cors from "cors";
import { seedAll } from "./seed.js";
import { startCutoffCron } from "./services/cutoff.js";
import { authRouter } from "./routes/auth.js";
import { kitchenRouter } from "./routes/kitchen.js";
import { dashboardRouter } from "./routes/dashboard.js";
import { db, findMeal } from "./db.js";

const app = express();
const PORT = Number(process.env.PORT || 4000);
const HOST = "0.0.0.0";

app.use(cors());
app.use(express.json());

// Seed the demo dataset on boot (idempotent).
seedAll();

// ---- route modules ----
app.use(authRouter);
app.use(kitchenRouter);
app.use(dashboardRouter);

// convenience: list meals (used by swap + add-meal UIs), with restaurant info
app.get("/api/v1/meals", (_req, res) => {
  res.json({
    restaurants: db.restaurants,
    meals: db.meals
      .filter((m) => m.isActive)
      .map((m) => {
        const rest = db.restaurants.find((r) => r.id === m.restaurantId);
        return { ...m, restaurantName: rest?.name };
      }),
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "OK", service: "minimal-bites", time: new Date().toISOString() });
});

// ---- start cutoff cron ----
startCutoffCron();

app.listen(PORT, HOST, () => {
  console.log(`\n  Minimal Bites API listening on http://${HOST}:${PORT}`);
  console.log(`  Health:   GET  http://localhost:${PORT}/api/health`);
  console.log(`  Onboard:  POST http://localhost:${PORT}/api/v1/auth/wallet-checkout`);
  console.log(`  Kitchen:  GET  http://localhost:${PORT}/api/v1/kitchen/production-matrix`);
  console.log(`  Dashboard:GET  http://localhost:${PORT}/api/v1/dashboard/usr_99812\n`);
});
