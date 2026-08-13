# Minimal Bites — Zero-Friction Meal Subscription Platform

**Target market:** Greater Toronto Area (GTA), Canada.
Built from `system-requirements.txt`. A zero-friction, subscription-first meal
delivery platform: flat all-inclusive pricing, passwordless Apple Pay / Google Pay
onboarding, 1-tap subscription controls, and kitchen batch aggregation.

---

## 🧭 Design rationale (research-backed)

Modelled on how HelloFresh, Factor, CookUnity, Uber Eats and DoorDash reduce
friction for **both sides**:

- **Eaters want 3 simple steps.** Research consistently shows users onboard fastest
  when the flow is *profile → choose → pay/delivery*, broken into a few big, explicit
  steps — not a long form. → We surface a giant **1️⃣ Register · 2️⃣ Choose · 3️⃣ Get
  delivery** strip, keep signup to one Apple Pay / Google Pay tap, and show trust
  signals (hygiene rating, DineSafe score) right where the user chooses.
- **Restaurants want predictable volume + easy money.** Uber Eats / DoorDash onboarding
  is *set up profile → upload menu → activate to take orders → set payout*. We mirror it
  with **1️⃣ Set up · 2️⃣ Fulfill orders · 3️⃣ Get paid**, plus an automatic weekly
  payout and a **commitment banner** (committed weekly customers & meals) so a kitchen
  plans a full week, not a trickle of 1–2 meals.

### Trust profile (why users trust a kitchen)
Each partner kitchen exposes its **hygiene rating, Toronto DineSafe health score, and
verified status** on the "Your Kitchen" card and in the choose-kitchen picker. A kitchen
must also offer a **minimum of distinct weekly dishes** to be eligible for a box plan
(else the app tells the user "we'll notify you when their menu grows").

---

## 🔗 Live URLs

| What | URL |
|------|-----|
| **GitHub Pages (static PWA)** | **https://successpartner10.github.io/MB/** |
| GitHub repository | https://github.com/successpartner10/MB |
| Landing + wallet-checkout demo | `/#` (root) |
| Subscriber dashboard | `/#dashboard` |
| Restaurant partner portal | `/#partners` · Kitchen dashboard `/#kitchen` |

### 🔖 Versioning (persistent URLs — old links never break)
`/` always serves the **latest** release. Each release is also **archived at a
permanent `/vN/` path** so existing links keep working after you ship a new version.

| Version | URL | Notes |
|---------|-----|-------|
| Latest | https://successpartner10.github.io/MB/v3/ | current release (v3) |
| v3 | https://successpartner10.github.io/MB/v3/ | Build-Your-Box · 2-hr windows · live tracking |
| v2 | https://successpartner10.github.io/MB/v2/ | Raleway redesign (archived) |
| v1 | https://successpartner10.github.io/MB/v1/ | original release (archived) |

### 🍱 Build-Your-Box configurator (v3)
Pick a mix (e.g. **2 non-veg + 3 veg**) and the all-inclusive total updates **instantly**.
- Live per-meal pricing ($12 / $13 / $14, fees included).
- Filters: **restaurant, area (nearby vs further), cuisine, diet, calories, price/meal**, sort by price/protein.
- **Budget mode**: enter a weekly budget → the app picks the best-value box under it and shows the total.
- Quick combos (2 non-veg + 3 veg, high-protein ×6, best-value ×6).
- Backed by `POST /api/v1/build/quote` (selection or `budget` mode).

### 🕐 2-hour delivery window + 🚚 live tracking (v3)
- Choose a 2-hour delivery window (5–7, 6–8, or 7–9 PM) on the dashboard — one tap.
- **Live tracking** (`#track` / `/track`): status timeline (Preparing → Packed → Out for delivery → Delivered), live ETA + progress bar, courier info, and a simulate-step control.

To publish a new version: bump `VERSION` in `site/app.js`, copy the current build
to a new `docs/vN/`, and update `/`. Old `/vN/` folders are left untouched.
A top-level `/` index links all releases.

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

## 🏪 Multi-restaurant model & restaurant-first ordering

**Two box modes** answer the subscriber-trust + kitchen-commitment problem:

- **Option A — "Pick a Kitchen" (restaurant-first, DEFAULT for trust):**
  The subscriber browses partner kitchens and chooses **one**. Their whole weekly
  box (6–8 meals) comes **entirely from that kitchen**. Every meal is from a known,
  chosen, trusted kitchen. Each kitchen sees exactly how many customers are
  **committed for a full week** → predictable, routable volume.
- **Option B — "Curated Mixed Box" (variety):**
  The multi-kitchen curated box, but opt-in and fully transparent — every meal is
  labeled with its kitchen, and a **by-kitchen filter** lets the user group meals.

Both modes keep **one box, one order, one delivery, one bill**.

### Kitchen commitment (the "full week, not 1–2 orders" guarantee)
When a subscriber picks a restaurant, their subscription becomes a **standing weekly
commitment** to that kitchen. The kitchen portal shows a commitment banner:
- **Committed customers** — subscribers signed up for a full week from this kitchen.
- **Guaranteed weekly meals** — predictable volume to plan, cook, and route.
- **Weekly portions (all orders)** — total incl. mixed-box contributions.

The delivery is always a **complete week**, never a sporadic 1–2 meal drop.

| Partner kitchen | Neighborhood | Signature dishes | Serves |
|-----------------|--------------|------------------|--------|
| **Oak & Ash Kitchen** | Downtown / Bay | Shawarma Bowl, Steak, Turkey Chili | M5J, M5K |
| **Sweet Basil** | Harbourfront | Salmon, Falafel, Caesar Bowl | M5V, M5J |
| **Kobu Noodle & Rice** | Financial District | Teriyaki, Pad Thai | M5K, M5H |

**User-facing:** a **"Your Kitchen" card** on the dashboard. In Mixed mode it shows a
*"Choose a kitchen"* picker; in restaurant-first mode it shows the committed kitchen +
*"Switch to variety"*. Each meal card shows *"prepared by {kitchen}"* + a **"by kitchen"
filter** chip row.

**Kitchen-facing:** the portal has a **kitchen selector** (`?restaurantId=`) + the
**commitment banner**. Each partner sees only its dishes, its routes, and its committed
weekly volume. E.g. **Oak & Ash** sees 141 portions; **Sweet Basil** sees 100;
**Kobu** sees 25. API: `GET /production-matrix?restaurantId=rest_oak_ash`,
`GET /restaurants/:id/commitment`, `GET /restaurants/:id` (menu).

**Data model:** `Restaurant` table (name, cuisine, neighborhood, served postal
prefixes); `Meal.restaurantId` → `Restaurant`; `Subscription.boxMode`
(`SINGLE_RESTAURANT` | `MIXED`) + `preferredRestaurantId`. Mirrored in the in-memory
store, the API, both UIs, and the static PWA. (PostgreSQL schema updated; see
migrations `add_restaurants` + subscription box-mode fields.)

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
