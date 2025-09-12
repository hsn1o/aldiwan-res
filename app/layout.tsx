import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Diwan",
  description: "Restaurant website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
