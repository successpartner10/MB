import type { Metadata } from "next";
import "./globals.css";
import PWARegister from "@/components/PWARegister";

export const metadata: Metadata = {
  title: "Minimal Bites — Zero-Friction Meal Subscription",
  description:
    "Curated chef-prepared meals delivered across the GTA. Flat all-inclusive pricing, 1-tap subscription controls, kitchen batch aggregation.",
  manifest: "/manifest.webmanifest",
  themeColor: "#1faa62",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
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
