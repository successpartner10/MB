# Minimal Bites — Zero-Friction Meal Subscription Platform

**Target market:** Greater Toronto Area (GTA), Canada.
Built from `system-requirements.txt`. A zero-friction, subscription-first meal
delivery platform: flat all-inclusive pricing, passwordless Apple Pay / Google Pay
onboarding, 1-tap subscription controls, and kitchen batch aggregation.

---

## 🔗 Live URLs

| What | URL |
|------|-----|
| **GitHub Pages (static PWA)** | **https://successpartner10.github.io/MB/** |
| GitHub repository | https://github.com/successpartner10/MB |
| Landing + wallet-checkout demo | `/#` (root) |
| Subscriber dashboard | `/#dashboard` |
| Kitchen partner portal | `/#kitchen` |

The GitHub Pages site is a **fully offline-capable installable PWA** served from
the `docs/` folder (main branch). It embeds the demo data so it works with **no
backend and no network** — open `docs/index.html` or the offline zip anywhere.

---

## 📦 Offline zips

- **`minimal-bites-offline-site.zip`** — self-contained static PWA. Unzip, open
  `index.html` (or serve the folder) — works fully offline. Includes manifest,
  service worker, and icons for installation.
- **`minimal-bites-full-source.zip`** — the complete project source (backend,
  frontend, Prisma schema/migration/seed, static site). Excludes `node_modules`,
  builds, and `.env`.

> Zip locations: repo root or the workspace (`/home/user/`). They are not
> committed to git to keep the repo lean.

---

## 🏪 Multi-restaurant model

**One curated box for the subscriber; many partner kitchens behind it.**

The subscriber still gets **one box, one order, one delivery, one bill** — they never
pick a restaurant (that would be choice fatigue). But the meals inside their box are
**prepared by different partner kitchens**. Each kitchen logs in and sees **only its
own** consolidated production sheet.

| Partner kitchen | Neighborhood | Signature dishes | Serves |
|-----------------|--------------|------------------|--------|
| **Oak & Ash Kitchen** | Downtown / Bay | Shawarma Bowl, Steak, Turkey Chili | M5J, M5K |
| **Sweet Basil** | Harbourfront | Salmon, Falafel, Caesar Bowl | M5V, M5J |
| **Kobu Noodle & Rice** | Financial District | Teriyaki, Pad Thai | M5K, M5H |

**User-facing:** each meal card shows *"prepared by {kitchen}"* + a **"by kitchen"
filter** chip row — but billing/delivery stay fully unified.

**Kitchen-facing:** the portal has a **kitchen selector** (`?restaurantId=`). Each
partner sees only its dishes and its routes. E.g. **Oak & Ash** sees 141 meals
(140× Shawarma + 1× Steak); **Sweet Basil** sees 100 (85× Salmon + 15× Falafel);
**Kobu** sees 25× Teriyaki. The `production-matrix` API supports
`?restaurantId=rest_oak_ash`.

**Data model:** a `Restaurant` table (name, cuisine, neighborhood, served postal
prefixes); `Meal.restaurantId` → `Restaurant`. Mirrored in Prisma schema, in-memory
store, the API, both UIs, and PostgreSQL (migration `add_restaurants` applied).

---

## 🧭 What's inside

```
minimal-bites/
├── backend/                  # Express + TypeScript API (in-memory demo store)
│   ├── src/
│   │   ├── server.ts         # entrypoint, mounts routes, starts cutoff cron
│   │   ├── routes/           # auth (wallet-checkout), kitchen, dashboard, controls
│   │   ├── services/cutoff.ts# Sunday 11:59 PM EST cutoff automation engine
│   │   ├── lib/              # pricing tiers, delivery scheduling
│   │   └── db.ts             # in-memory store mirroring the Prisma schema
│   └── prisma/               # Prisma schema, migration, seed (PostgreSQL)
├── frontend/                 # Next.js (App Router) + Tailwind — subscriber + kitchen UI
│   └── public/               # PWA icons + manifest + service worker
├── prisma/                   # (reference copy of schema.prisma)
├── docs/                     # ✂️ STATIC PWA — served by GitHub Pages
├── site/                     # source of the static PWA
├── system-requirements.txt   # the original spec
└── README.md
```

---

## ✅ Requirements coverage (Section 7 execution tasks)

| # | Task | Status | Where |
|---|------|--------|-------|
| 1 | Node + TypeScript + Express + Prisma + Stripe scaffold | ✅ | `backend/` |
| 2 | Prisma migrations from schema (Section 3) | ✅ | `backend/prisma/migrations/…` (applied to PG 17) |
| 3 | `POST /api/v1/auth/wallet-checkout` passwordless onboarding | ✅ | `backend/src/routes/auth.ts` |
| 4 | `GET /api/v1/kitchen/production-matrix` batch aggregation | ✅ | `backend/src/routes/kitchen.ts` |
| 5 | Sunday 11:59 PM EST cutoff cron | ✅ | `backend/src/services/cutoff.ts` (`npm run cutoff`) |
| 6 | Subscriber dashboard (Section 5.1) | ✅ | `frontend/app/dashboard/` + `docs/#dashboard` |
| 7 | Kitchen portal (Section 5.2) | ✅ | `frontend/app/kitchen/` + `docs/#kitchen` |

**PWA:** installable, offline-capable, service worker + manifest + icons.
**PostgreSQL/Prisma:** real schema applied to PostgreSQL 17 with 66 users / 66
orders / 8 meals seeded; the live demo API runs on the matching in-memory store so
it needs no DB server, but `backend/prisma` is production-ready.

---

## 🔌 API endpoints

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/v1/auth/wallet-checkout` | One-call passwordless onboarding + Stripe charge |
| GET | `/api/v1/kitchen/production-matrix?date=` | Batch dish totals + route box counts |
| POST | `/api/v1/kitchen/pack` | Advance packing state |
| POST | `/api/v1/kitchen/ship` | Dispatch boxes to courier |
| GET | `/api/v1/dashboard/:userId` | Full subscriber payload |
| POST | `/api/v1/subscription/skip` | Skip a week (no charge) |
| POST | `/api/v1/subscription/pause` | Pause / resume |
| POST | `/api/v1/subscription/swap` | Swap a meal slot |
| POST | `/api/v1/subscription/add-meal` | Add a meal (re-priced per-meal) |
| POST | `/api/v1/subscription/change-address` | 1-tap address change |
| POST | `/api/v1/subscription/change-window` | 1-tap delivery window change |
| GET | `/api/v1/meals` | Active menu |

## 💰 Business rules (Section 6)

1. **Flat tiers:** MEALS_4 = $56 ($14/ea), MEALS_6 = $78 ($13/ea), MEALS_8 = $96 ($12/ea). All-inclusive.
2. **Cutoff automation:** Sunday 11:59 PM EST → charges active orders, generates kitchen matrix, never charges skipped weeks.
3. **Auto-selection fallback:** unconfigured users get meals picked from their `dietaryBadges`.

---

## ▶️ Run locally (full stack)

```bash
# 1) API (http://localhost:4000)
cd backend
npm install
npm run dev
npm run cutoff        # fire the cutoff engine on demand

# 2) Web (http://localhost:3000) — proxies /api → :4000
cd frontend
npm install
npm run dev
```

### Optional: run the API against real PostgreSQL
```bash
sudo -u postgres psql -c "CREATE USER minimalbites WITH PASSWORD '...' SUPERUSER;"
sudo -u postgres createdb -O minimalbites minimal_bites
cd backend
cp .env.example .env   # set DATABASE_URL
npm run db:migrate     # applies backend/prisma/migrations
npm run db:seed        # seeds 66 users, 66 orders, 8 meals
```

---

## 🛠️ Deploying the GitHub Pages site (repo owner)

```bash
# 1) Build/refresh the static PWA into docs/
rm -rf docs && mkdir docs && cp site/* docs/

# 2) Commit & push
git add -A && git commit -m "update PWA" && git push origin main

# Pages is configured to serve /docs from main.
# → https://successpartner10.github.io/MB/
```

> Configure Pages at **Repo → Settings → Pages → Source: Deploy from a branch →
> main / /docs**.

---

## 🔍 Audit & testing notes

- Static PWA: all 3 views (landing / dashboard / kitchen) render and all assets
  (manifest, SW, icons, JS, CSS) serve with HTTP 200 on GitHub Pages.
- Backend typechecks (`tsc --noEmit` clean) and all endpoints verified with curl.
- Production matrix totals match the spec: **266 meals** = 140× Shawarma,
  85× Salmon, 25× Teriyaki, 15× Falafel, 1× Steak across M5J/M5V/M5K/M5H.
- Prisma migration + seed verified against PostgreSQL 17 (`\d` confirms tables).

## 🧑 Demo user

**Aria Chen** — `usr_99812`, MEALS_6, TUESDAY_PM, concierge drop-off,
120 Bay St Suite 1402 (M5J 2R8), $78.00/week all-inclusive.
