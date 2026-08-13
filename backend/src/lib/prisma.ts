import { PrismaClient } from "@prisma/client";

/**
 * Singleton Prisma Client — talks to PostgreSQL (DATABASE_URL in backend/.env).
 * The transient kitchen batch/courier state (Kanban) stays in the in-memory
 * overlay (db.ts), mirroring a real system where that lives in Redis.
 */
export const prisma = new PrismaClient();

export const uid = (prefix = "id") =>
  `${prefix}_${Math.random().toString(36).slice(2, 10)}`;

export const OrderStatusActive = ["SCHEDULED", "PREPARING", "PACKED", "OUT_FOR_DELIVERY"] as const;
