// ============================================================================
// Delivery scheduling helpers — EST-aware next-weekday calculation + cutoff.
// ============================================================================

import type { DeliveryDay } from "../db.js";

export interface DeliverySlot {
  label: string;
  weekday: number; // JS getDay(): 0=Sun .. 6=Sat
  startHour: number; // 24h, window start
  endHour: number; // window end
}

export const DELIVERY_SLOTS: Record<DeliveryDay, DeliverySlot> = {
  SUNDAY_AM: { label: "Sunday Morning", weekday: 0, startHour: 9, endHour: 11 },
  SUNDAY_PM: { label: "Sunday Evening", weekday: 0, startHour: 17, endHour: 19 },
  TUESDAY_AM: { label: "Tuesday Morning", weekday: 2, startHour: 9, endHour: 11 },
  TUESDAY_PM: { label: "Tuesday Evening", weekday: 2, startHour: 17, endHour: 19 },
};

/**
 * Returns the next occurrence of the requested delivery slot, at the window
 * start hour (e.g. TUESDAY_PM -> next Tuesday 5:00 PM).
 */
export function nextDeliveryDate(day: DeliveryDay, from = new Date()): Date {
  const slot = DELIVERY_SLOTS[day];
  const d = new Date(from);
  const diff = (slot.weekday - d.getDay() + 7) % 7 || 7; // strictly next
  d.setDate(d.getDate() + diff);
  d.setHours(slot.startHour, 0, 0, 0);
  return d;
}

/**
 * Weekly cutoff = Sunday 11:59 PM EST of the week that *contains* the delivery.
 * (Sunday's week contains the following Tuesday, so we walk back to Sunday.)
 */
export function cutoffFor(delivery: Date): Date {
  const c = new Date(delivery);
  const back = (c.getDay() - 0 + 7) % 7; // days from delivery back to Sunday
  c.setDate(c.getDate() - back);
  c.setHours(23, 59, 59, 0);
  return c;
}

export const toIso = (d: Date) => d.toISOString();

/** Human window label e.g. "5:00 PM - 7:00 PM" */
export function windowLabel(day: DeliveryDay): string {
  const s = DELIVERY_SLOTS[day];
  const fmt = (h: number) => {
    const hr = h % 12 === 0 ? 12 : h % 12;
    return `${hr}:00 ${h >= 12 ? "PM" : "AM"}`;
  };
  return `${fmt(s.startHour)} - ${fmt(s.endHour)}`;
}
