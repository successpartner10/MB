"use client";

import Link from "next/link";
import { useState } from "react";
import { post } from "@/lib/api";

const TIERS = [
  { id: "MEALS_4", meals: 4, perMeal: 14, total: 56 },
  { id: "MEALS_6", meals: 6, perMeal: 13, total: 78 },
  { id: "MEALS_8", meals: 8, perMeal: 12, total: 96 },
];

export default function LandingPage() {
  const [tier, setTier] = useState("MEALS_6");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<null | {
    totalChargedCAD: number;
    userId: string;
    subscriptionId: string;
    nextDeliveryDate: string;
    cutoffAt: string;
  }>(null);
  const [error, setError] = useState("");

  async function checkout() {
    setBusy(true);
    setError("");
    setResult(null);
    try {
      const r = await post("/api/v1/auth/wallet-checkout", {
        paymentToken: "tok_1NdemoApplePay0001",
        planTier: tier,
        deliveryDay: "TUESDAY_PM",
        dietaryBadges: ["HIGH_PROTEIN", "GLUTEN_FREE"],
        dropoffPreference: "CONCIERGE",
        shippingAddress: {
          street: "120 Bay St",
          unit: "Suite 1402",
          postalCode: "M5J 2R8",
          city: "Toronto",
          province: "ON",
        },
        fullName: "Demo Wallet User",
        phone: "+14165550123",
      });
      if (r.status === "ERROR") throw new Error(JSON.stringify(r.errors));
      setResult(r);
    } catch (e: any) {
      setError(e.message ?? "Checkout failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      {/* Hero */}
      <header className="flex flex-wrap items-center justify-between gap-4 pb-8">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white font-black">MB</span>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">Minimal Bites</div>
            <div className="text-xs text-slate-500">Zero-friction meals · GTA</div>
          </div>
        </div>
        <nav className="flex gap-2">
          <Link href="/dashboard" className="btn btn-ghost">Subscriber Dashboard</Link>
          <Link href="/kitchen" className="btn btn-ghost">Kitchen Portal</Link>
        </nav>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Chef-prepared meals. <span className="text-brand-600">Zero decision fatigue.</span>
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            A curated weekly menu delivered across Toronto. One flat all-inclusive price —
            taxes, delivery and service fees are already in the number you see. No forms, no
            passwords, no exit surveys. Sign up in a single Apple Pay / Google Pay tap.
          </p>

          {/* Pricing tiers */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTier(t.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  tier === t.id
                    ? "border-brand-600 bg-brand-50 ring-2 ring-brand-600"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="text-xs font-semibold text-slate-500">{t.meals} meals/wk</div>
                <div className="mt-1 text-2xl font-extrabold">${t.perMeal}<span className="text-sm font-medium text-slate-500">/meal</span></div>
                <div className="text-sm text-slate-600">${t.total}/wk all-in</div>
              </button>
            ))}
          </div>

          {/* Wallet checkout demo */}
          <div className="mt-6 card p-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
              Live demo — POST /api/v1/auth/wallet-checkout
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              One call creates the account, extracts the address from the wallet token, charges
              Stripe and selects your meals.
            </p>
            <button onClick={checkout} disabled={busy} className="btn btn-primary mt-4 w-full">
              {busy ? "Authorizing Apple Pay…" : "Apple Pay / Google Pay — subscribe"}
            </button>
            {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
            {result && (
              <pre className="mt-3 overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-emerald-300">
                {JSON.stringify(result, null, 2)}
              </pre>
            )}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid content-start gap-3 sm:grid-cols-2">
          {[
            { icon: "🧠", t: "Zero Choice Fatigue", d: "6–10 curated chef-prepared meals weekly. No 50-item menus." },
            { icon: "💸", t: "Zero Fee Surprise", d: "Flat $12–$14/meal. Taxes, shipping & service included. Always." },
            { icon: "⚡", t: "Passwordless Onboarding", d: "Apple Pay / Google Pay creates your account & address in one tap." },
            { icon: "👆", t: "1-Tap Subscription Controls", d: "Skip, pause, swap or change your window without exit surveys." },
            { icon: "🏭", t: "Kitchen Batch Aggregation", d: "Partners get 'Cook 140x Shawarma Bowls', not 140 separate tickets." },
            { icon: "🗓️", t: "Auto-Selection Engine", d: "Forgot to choose? Dietary-badge-aware meals are picked for you." },
          ].map((f) => (
            <div key={f.t} className="card p-4">
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-2 font-bold">{f.t}</div>
              <p className="mt-1 text-sm text-slate-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        Minimal Bites — Technical prototype (Next.js + Express). Explore the{" "}
        <Link href="/dashboard" className="font-semibold text-brand-600">Subscriber Dashboard</Link> and{" "}
        <Link href="/kitchen" className="font-semibold text-brand-600">Kitchen Partner Portal</Link>.
      </footer>
    </main>
  );
}
