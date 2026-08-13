"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  { key: "preparing", label: "Preparing" },
  { key: "packed", label: "Packed" },
  { key: "out", label: "Out for delivery" },
  { key: "delivered", label: "Delivered" },
];

export default function TrackPage() {
  const [status, setStatus] = useState("out");
  const [eta, setEta] = useState(45);
  const [progress, setProgress] = useState(70);
  const activeIdx = STEPS.findIndex((s) => s.key === status);

  function advance() {
    const i = STEPS.findIndex((s) => s.key === status);
    if (i < STEPS.length - 1) {
      setStatus(STEPS[i + 1].key);
      setEta(Math.max(3, eta - 22));
      setProgress(Math.min(100, progress + 26));
    }
  }

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
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Live tracking</div>
          <div className="mt-1 text-lg font-extrabold">{STEPS[activeIdx].label}</div>
          <div className="text-4xl font-black text-brand-600">{eta} min</div>
          <div className="mt-1 text-sm text-slate-600">ETA arrival · 120 Bay St, Unit 1402</div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-brand-600 transition-all duration-700" style={{ width: `${progress}%` }} />
          </div>
        </section>

        <section className="card p-4">
          {STEPS.map((s, i) => {
            const done = i < activeIdx, active = i === activeIdx;
            return (
              <div key={s.key} className={`flex items-center gap-3 border-l-[3px] py-2 pl-4 ${active || done ? "border-brand-600" : "border-slate-200 opacity-55"}`}>
                <div className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${active || done ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                  {done ? "✓" : i + 1}
                </div>
                <div>
                  <div className="text-sm font-bold">{s.label}</div>
                  {active && <div className="text-xs text-slate-500">In progress</div>}
                </div>
              </div>
            );
          })}
        </section>

        <section className="card p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Your courier</div>
          <div className="mt-2 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-lg font-black text-white">M</div>
            <div>
              <div className="font-bold">Marcus</div>
              <div className="text-xs text-slate-500">Bike · Downtown · live</div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-2">
          <button onClick={advance} className="btn btn-primary">Simulate step</button>
          <button onClick={() => alert("Courier contacted.")} className="btn btn-ghost">Contact courier</button>
        </section>
      </main>

      <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-md grid-cols-3 py-2 text-center text-xs font-medium text-slate-500">
          <Link href="/dashboard" className="py-1">🍽️ This Week</Link>
          <Link href="/track" className="py-1 text-brand-600">🚚 Track</Link>
          <button className="py-1">⚙️ Settings</button>
        </div>
      </nav>
    </div>
  );
}
