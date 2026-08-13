"use client";

import { useState } from "react";
import Link from "next/link";

const WEEKS = [
  { date: "Aug 18", meals: 6, total: 78, window: "5:00–7:00 PM" },
  { date: "Aug 25", meals: 6, total: 78, window: "6:00–8:00 PM" },
  { date: "Sep 01", meals: 6, total: 78, window: "5:00–7:00 PM" },
  { date: "Sep 08", meals: 6, total: 78, window: "7:00–9:00 PM" },
];

export default function SchedulePage() {
  const [skips, setSkips] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setSkips((s) => ({ ...s, [i]: !s[i] }));

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col pb-24">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="font-extrabold tracking-tight">Minimal Bites</span>
          <Link href="/dashboard" className="text-sm text-slate-500 hover:text-slate-800">← Back</Link>
        </div>
      </header>

      <main className="space-y-4 px-5 pt-4">
        <section className="card p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Delivery schedule</div>
          <div className="mt-1 text-lg font-extrabold">Your next 4 weeks</div>
          <p className="text-xs text-slate-500">Skip, pause or swap any week ahead of its Sunday 11:59 PM cutoff.</p>
        </section>

        {WEEKS.map((w, i) => (
          <section key={w.date} className="card flex items-center justify-between gap-3 p-4">
            <div>
              <div className="font-bold">{w.date}</div>
              <div className="text-xs text-slate-500">{w.meals} meals · ${w.total} · {w.window}</div>
            </div>
            <button
              onClick={() => toggle(i)}
              className={`btn btn-ghost !px-3 !py-1.5 text-xs ${skips[i] ? "!border-amber-500 !text-amber-700" : ""}`}
            >
              {skips[i] ? "Un-skip" : "Skip"}
            </button>
          </section>
        ))}
      </main>

      <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-md grid-cols-3 py-2 text-center text-xs font-medium text-slate-500">
          <Link href="/dashboard" className="py-1">🍽️ This Week</Link>
          <Link href="/schedule" className="py-1 text-brand-600">📅 Schedule</Link>
          <button className="py-1">⚙️ Settings</button>
        </div>
      </nav>
    </div>
  );
}
