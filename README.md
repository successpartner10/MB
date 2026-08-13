# Minimal Bites — Zero-Friction Meal Subscription Platform

A runnable full-stack technical prototype built from the system requirements
(`system-requirements.txt`). Target market: **Greater Toronto Area (GTA), Canada**.

Live screens:
- **Landing / wallet checkout demo** → `/`
- **Subscriber dashboard** (Section 5.1) → `/dashboard`
- **Kitchen partner portal** (Section 5.2) → `/kitchen`

---

## 1. What's implemented (Execution Tasks)

| Task | Deliverable | Location |
|------|-------------|----------|
| 1. TS + Express + Prisma + Stripe scaffold | Express server, in-memory store mirroring Prisma schema, mocked Stripe charge | `backend/`, `prisma/schema.prisma` |
| 2. Prisma migrations from Section 3 | Schema file (drop-in for PostgreSQL + `prisma migrate`) | `prisma/schema.prisma` |
| 3. `POST /api/v1/auth/wallet-checkout` | Passwordless onboarding — creates account, extracts address from wallet token, charges Stripe, auto-selects meals, one call | `backend/src/routes/auth.ts` |
| 4. `GET /api/v1/kitchen/production-matrix` | Aggregated dish totals + route box counts (batch aggregation, no per-order tickets) | `backend/src/routes/kitchen.ts` |
| 5. Sunday 11:59 PM EST cutoff cron | Charges active orders, auto-selects meals for inactive users, emits matrix | `backend/src/services/cutoff.ts`, `backend/src/cutoff-cli.ts` |
| 6. Subscriber dashboard | Mobile-styled dashboard faithful to Section 5.1, with working 1-tap controls | `frontend/app/dashboard/page.tsx` |
| 7. Kitchen portal | Next.js (App Router) + Tailwind portal faithful to Section 5.2 | `frontend/app/kitchen/page.tsx` |

> **Note on Task 6:** the requirements call for React Native / Expo. For a live
> in-browser demo the subscriber screen is rendered as a mobile-first web page
> with identical layout and behaviour; it can be ported to an RN/Expo component
> (the API contract is unchanged).

---

## 2. Architecture

```
Browser ──/api/*──▶ Next.js (App Router, :3000) ──proxy──▶ Express API (:4000)
                                                              │
                                     in-memory store (mirrors Prisma schema)
                                                              │
                                                     Cutoff cron (EST)
```

- **Mobile app** (subscriber): Next.js front-end, mobile-first layout + Tailwind.
- **Kitchen dashboard**: Next.js App Router + Tailwind.
- **Backend API**: Node.js + TypeScript + Express.
- **DB**: in-memory store shaped exactly like the Prisma schema (PostgreSQL +
  Prisma in production — `prisma/schema.prisma`).
- **Payments**: Stripe (mocked charge; token accepted from Apple Pay / Google Pay).
- **Notifications**: Twilio SMS / FCM — stubbed via log hooks in the API.

---

## 3. API endpoints

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/v1/auth/wallet-checkout` | Passwordless onboarding (one-call signup + charge) |
| GET | `/api/v1/kitchen/production-matrix?date=` | Batch dish totals + route box counts |
| POST | `/api/v1/kitchen/pack` | Advance packing state `{ mealId, qty }` |
| POST | `/api/v1/kitchen/ship` | Move boxes to courier `{ postalPrefix, boxCount }` |
| GET | `/api/v1/dashboard/:userId` | Full subscriber dashboard payload |
| POST | `/api/v1/subscription/skip` | Skip a week (no charge) |
| POST | `/api/v1/subscription/pause` | Pause / resume |
| POST | `/api/v1/subscription/swap` | Swap a meal slot |
| POST | `/api/v1/subscription/add-meal` | Add a meal (re-prices at per-meal rate) |
| POST | `/api/v1/subscription/change-address` | 1-tap address change |
| POST | `/api/v1/subscription/change-window` | 1-tap delivery window change |
| GET | `/api/v1/meals` | Active menu |

---

## 4. Business rules implemented (Section 6)

1. **Flat tier pricing** — `MEALS_4 = $56 ($14/ea)`, `MEALS_6 = $78 ($13/ea)`,
   `MEALS_8 = $96 ($12/ea)`. All-inclusive; no extra fees ever.
2. **Cutoff automation** — fires Sunday 11:59 PM EST for Tuesday deliveries.
   Charges active orders, auto-generates the kitchen matrix, skips charge for
   skipped weeks. (`npm run cutoff` to see it fire on demand.)
3. **Auto-selection fallback** — unconfigured users get meals picked from their
   `dietaryBadges` (highest badge-match first, then protein).

---

## 5. Run it locally

```bash
# 1) API
cd backend
npm install
npm run dev          # http://localhost:4000  (also runs the cutoff cron)
npm run cutoff       # fire the Sunday cutoff engine on demand
npm run seed         # re-seed demo data

# 2) Web (in a second terminal)
cd frontend
npm install
npm run dev          # http://localhost:3000
```

The Next dev server proxies `/api/*` → `localhost:4000`, so the browser only
ever uses relative URLs.

---

## 6. Demo data

- **Subscriber:** Aria Chen `usr_99812` — MEALS_6, TUESDAY_PM, concierge
  drop-off, 120 Bay St Suite 1402 (M5J 2R8). $78.00/week all-in.
- **Kitchen matrix (Tuesday window):** 266 meals across ~66 orders —
  140× Shawarma, 85× Salmon, 25× Teriyaki, 15× Falafel, 1× Steak;
  routes across M5J / M5V / M5K / M5H.
