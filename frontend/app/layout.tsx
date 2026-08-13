import type { Metadata, Viewport } from "next";
import "./globals.css";
import PWARegister from "@/components/PWARegister";

export const metadata: Metadata = {
  title: "Minimal Bites — Zero-Friction Meal Subscription",
  description:
    "Curated chef-prepared meals delivered across the GTA. Flat all-inclusive pricing, 1-tap subscription controls, kitchen batch aggregation.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Minimal Bites",
  },
  icons: {
    icon: "/icon-512.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1faa62",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PWARegister />
      </body>
    </html>
  );
}
