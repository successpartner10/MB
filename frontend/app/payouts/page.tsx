"use client";

import { useState } from "react";
import Link from "next/link";
import OwnerGate from "@/components/OwnerGate";

const BARS = [62, 78, 45, 90, 70, 100, 82];

export default function PayoutsPage() {
  const [k, setK] = useState("Oak & Ash Kitchen");
  const kitchens = ["Oak & Ash Kitchen", "Sweet Basil", "Kobu Noodle & Rice"];
  const data = {
    "Oak & Ash Kitchen": { orders: 3250, meals: 250, cust: 38 },
    "Sweet Basil": { orders: 2600, meals: 200, cust: 31 },
    "Kobu Noodle & Rice": { orders: 1900, meals: 146, cust: 24 },
  }[k] ?? { orders: 0, meals: 0, cust: 0 };
  const fee = 200 + Math.round(data.orders * 0.1);

  return (
    <OwnerGate>
    <div className="mx-auto max-w-4xl px-5 py-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="font-extrabold tracking-tight">Supper Club Direct — Partner Payouts</div>
        <Link href="/kitchen" className="btn btn-ghost text-sm">← Kitchen</Link>
      </header>

      <div className="mt-4 flex gap-2">
        {kitchens.map((name) => (
          <button key={name} onClick={() => setK(name)} className={`btn btn-ghost text-sm ${k === name ? "!bg-slate-900 !text-white" : ""}`}>
            {name}
          </button>
        ))}
      </div>

      <section className="mt-5 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-700 p-6 text-white">
        <div className="text-xs font-bold uppercase tracking-wider opacity-85">Your fee this month</div>
        <div className="text-5xl font-black">${fee}</div>
        <div className="mt-1 text-sm opacity-90">$200 flat + 10% of ${data.orders.toLocaleString()} in app orders · first week free</div>
      </section>

      <section className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Fee breakdown</div>
          {[
            ["Flat membership", "$200"],
            ["10% of app orders", `$${Math.round(data.orders * 0.1)}`],
            ["Meals sold", String(data.meals)],
            ["Committed customers", String(data.cust)],
          ].map(([l, v]) => (
            <div key={l} className="mt-3 flex justify-between border-b border-slate-100 pb-2 text-sm">
              <span className="text-slate-500">{l}</span>
              <span className="font-bold">{v}</span>
            </div>
          ))}
        </div>
        <div className="card p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">7-week trend</div>
          <div className="mt-3 flex h-40 items-end gap-2">
            {BARS.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center justify-end" style={{ height: "100%" }}>
                <div className="w-full rounded-t bg-amber-400" style={{ height: `${v}%` }} />
                <span className="mt-1 text-[10px] text-slate-400">W{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="mt-4 text-xs text-slate-400">Predictable: flat $200 + 10% of the orders we bring. No 25% commission. Never.</p>
    </div>
    </OwnerGate>
  );
}
