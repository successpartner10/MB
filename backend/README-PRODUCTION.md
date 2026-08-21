# Supper Club Direct — Production Backend

Real payment + delivery integration, multi-brand/multi-location, JWT auth, security/compliance.

## What's built
- **Stripe payments** (`lib/stripe.ts`, `routes/payments.ts`)
  - PaymentIntent for orders, customer creation, subscriptions, webhook signature verification, refunds.
  - **PCI:** card data never touches our server — Stripe Elements/PaymentIntent only. Requires `STRIPE_SECRET_KEY`.
- **Delivery** (`lib/delivery-providers.ts`, `routes/delivery.ts`)
  - Best-price routing across **Uber Direct** (white-label) and **OrderOut** (aggregator) — lowest cost + ETA, auto-failover.
  - Requires `UBER_DIRECT_TOKEN` and/or `ORDEROUT_API_KEY`.
- **Multi-brand / multi-location** (`prisma/schema.prisma`)
  - `Brand`, `Location`, `DeliveryZone`, linked to `Restaurant` / `Order` / `User` — franchise model.
- **Auth** (`lib/auth.ts`)
  - JWT access tokens + bcrypt password hashing. `requireAuth` / `requireAdmin` middleware.
- **Security & compliance**
  - Security headers (CSP, X-Frame-Options DENY, HSTS, Referrer-Policy, Permissions-Policy).
  - Rate limiting on auth/writes.
  - PIPEDA-ready privacy posture (see `legal/` docs).
  - zod input validation on all write endpoints.

## Demo vs. live
Everything runs in **demo mode** when the relevant API key is absent — payments return mock success, delivery returns realistic mock quotes. Set the real keys in `.env` (see `.env.example`) to go live; the code paths are the real production calls.

## Run
```bash
npm install
cp .env.example .env   # fill in real keys
npx prisma migrate dev
npm start              # http://localhost:4000
```

## Key endpoints
- `POST /api/v1/payments/intent` — create PaymentIntent
- `POST /api/v1/payments/webhook` — Stripe webhook (sig verified)
- `POST /api/v1/payments/refund` — refund (e.g. Sliding Scale threshold not met)
- `POST /api/v1/delivery/quote` — best-price delivery quote
- `POST /api/v1/delivery/create` — create delivery on chosen provider
- `GET  /api/v1/me` — protected example (JWT required)

## Before going live (checklist for a chain)
- [ ] Real Stripe keys + webhook secret
- [ ] Uber Direct + OrderOut accounts/keys
- [ ] Strong `JWT_SECRET`
- [ ] Real PostgreSQL + migrations
- [ ] Lawyer-reviewed ToS / Privacy / Partner Agreement / Delivery & Refund (`legal/`)
- [ ] Food-safety & delivery liability insurance
