// ============================================================================
// AUTH — JWT access tokens + bcrypt password hashing
// Restaurant-owner / admin / customer authentication.
// Requires JWT_SECRET env in production.
// ============================================================================

import type { NextFunction, Request, Response } from "express";

let jwt: any = null;
let bcrypt: any = null;
try { jwt = require("jsonwebtoken"); } catch { /* optional */ }
try { bcrypt = require("bcryptjs"); } catch { /* optional */ }

const SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export interface AuthPayload {
  sub: string; // user id
  role: "CUSTOMER" | "RESTAURANT_OWNER" | "ADMIN";
  brandId?: string;
  locationId?: string;
}

export function signToken(payload: AuthPayload, expiresIn = "7d"): string {
  if (!jwt) return `demo.${payload.sub}.${payload.role}`; // demo fallback
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function hashPassword(plain: string): string {
  if (!bcrypt) return "bcrypt-disabled:" + plain;
  return bcrypt.hashSync(plain, 10);
}

export function verifyPassword(plain: string, hash: string): boolean {
  if (!bcrypt) return hash === "bcrypt-disabled:" + plain;
  return bcrypt.compareSync(plain, hash);
}

/** Express middleware: require a valid JWT. */
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return res.status(401).json({ status: "ERROR", message: "Missing token" });
  if (!jwt) {
    // demo: token is demo.<id>.<role>
    const parts = token.split(".");
    if (parts[0] === "demo") {
      (req as any).auth = { sub: parts[1], role: parts[2] };
      return next();
    }
    return res.status(401).json({ status: "ERROR", message: "Invalid token" });
  }
  try {
    const payload = jwt.verify(token, SECRET) as AuthPayload;
    (req as any).auth = payload;
    return next();
  } catch {
    return res.status(401).json({ status: "ERROR", message: "Invalid or expired token" });
  }
}

/** Express middleware: restrict to ADMIN. */
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const auth = (req as any).auth as AuthPayload;
  if (!auth || auth.role !== "ADMIN") return res.status(403).json({ status: "ERROR", message: "Admin only" });
  next();
}
