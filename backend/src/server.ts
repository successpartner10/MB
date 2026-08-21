// ============================================================================
// Minimal Bites — API server entrypoint
// Express + TypeScript. In-memory store (swap `db.ts` for Prisma in prod).
// ============================================================================

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { seedAll } from "./seed.js";
import { startCutoffCron } from "./services/cutoff.js";
import { authRouter } from "./routes/auth.js";
import { kitchenRouter } from "./routes/kitchen.js";
import { dashboardRouter } from "./routes/dashboard.js";
import { contentRouter } from "./routes/content.js";
import { paymentsRouter } from "./routes/payments.js";
import { deliveryRouter } from "./routes/delivery.js";
import { requireAuth } from "./lib/auth.js";
import { db, findMeal } from "./db.js";

const app = express();
const PORT = Number(process.env.PORT || 4000);
const HOST = "0.0.0.0";

app.use(cors());
app.use(express.json({ limit: "1mb" }));

// ---- security / compliance headers (PIPEDA, PCI-friendly) ----
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
});

// ---- security hardening: rate limiting (protect auth/bids/writes from abuse) ----
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 50, standardHeaders: true, legacyHeaders: false, message: { status: "ERROR", message: "Too many requests. Try again later." } });
const writeLimiter = rateLimit({ windowMs: 60 * 1000, max: 120, standardHeaders: true, legacyHeaders: false, message: { status: "ERROR", message: "Too many requests." } });
app.use("/api/v1/auth", authLimiter);
app.use("/api/v1/subscription", writeLimiter);
app.use("/api/v1/auctions", writeLimiter);
app.use("/api/v1/kitchen", writeLimiter);

// Seed the demo dataset on boot (idempotent).
seedAll();

// ---- route modules ----
app.use(authRouter);
app.use(kitchenRouter);
app.use(dashboardRouter);
app.use(contentRouter);
app.use(paymentsRouter);
app.use(deliveryRouter);

// Protected example: require a valid JWT (used by restaurant owner tools)
app.get("/api/v1/me", requireAuth, (req: any, res) => {
  res.json({ status: "OK", auth: req.auth });
});

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
