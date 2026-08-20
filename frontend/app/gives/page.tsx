"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getGives } from "@/lib/api";

export default function GivesPage() {
  const [data, setData] = useState<any>(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    getGives(q || undefined).then(setData).catch(() => {});
  }, [q]);

  return (
    <div className="mx-auto max-w-4xl px-5 py-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="font-extrabold tracking-tight">Supper Club Direct — Gives</div>
        <Link href="/" className="btn btn-ghost text-sm">← Home</Link>
      </header>

      <section className="mt-5 rounded-3xl bg-teal-50 p-6 text-teal-900">
        <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Supper Club Gives</div>
        <h1 className="mt-1 text-2xl font-black">Feeding our community, transparently</h1>
        <p className="mt-1 text-sm text-teal-700">Every week, a restaurant + a sponsor + Supper Club Direct each give $500 ($1,500 total) to feed a local shelter. Here's the full, searchable record.</p>
        {data && (
          <div className="mt-4 flex flex-wrap gap-6">
            <div><div className="text-3xl font-black">{data.totals.mealsGiven.toLocaleString()}</div><div className="text-xs">meals given</div></div>
            <div><div className="text-3xl font-black">${data.totals.donated.toLocaleString()}</div><div className="text-xs">donated</div></div>
            <div><div className="text-3xl font-black">{data.totals.partners}</div><div className="text-xs">partners</div></div>
          </div>
        )}
      </section>

      <div className="mt-4">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by sponsor, restaurant, or shelter…"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" />
      </div>

      <section className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="grid grid-cols-[90px_1.1fr_1fr_1fr_110px] gap-3 border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-400">
          <span>Date</span><span>Sponsor</span><span>Restaurant</span><span>Shelter</span><span>Amount</span>
        </div>
        {(data?.entries ?? []).map((g: any) => (
          <div key={g.date + g.restaurant} className="grid grid-cols-[90px_1.1fr_1fr_1fr_110px] gap-3 border-b border-slate-50 px-4 py-3 text-sm">
            <span className="font-bold">{g.date}</span>
            <span className="font-semibold">{g.sponsor}</span>
            <span>{g.restaurant}</span>
            <span className="text-slate-500">{g.shelter}</span>
            <span className="font-bold text-teal-700">$500×3</span>
          </div>
        ))}
      </section>
      <p className="mt-4 text-xs text-slate-400">Meals valued at the app-standard ${data?.mealRate ?? 13}/meal. Receipts issued by each registered shelter/charity.</p>
    </div>
  );
}
