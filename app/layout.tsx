import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "الديوان - مطعم يمني أصيل",
  description:
    "مطعم الديوان - تجربة طعام يمني أصيل في أجواء عصرية. نقدم أشهى الأطباق اليمنية التقليدية مع ضيافة تقليدية وأجواء عصرية.",
  generator: "v0.app",
  keywords: ["مطعم يمني", "طعام يمني", "مندي", "كبسة", "مطعم عربي", "الديوان"],
  authors: [{ name: "مطعم الديوان" }],
  openGraph: {
    title: "الديوان - مطعم يمني أصيل",
    description: "مطعم الديوان - تجربة طعام يمني أصيل في أجواء عصرية",
    type: "website",
    locale: "ar_SA",
    siteName: "مطعم الديوان",
  },
  twitter: {
    card: "summary_large_image",
    title: "الديوان - مطعم يمني أصيل",
    description: "مطعم الديوان - تجربة طعام يمني أصيل في أجواء عصرية",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-arabic ${notoSansArabic.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
