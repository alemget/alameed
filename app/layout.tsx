import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "العميد | المبنى الذكي للمراقبة الأمنية",
  description: " 🎥 توريد وتركيب جميع أنواع كاميرات المراقبة",
  openGraph: {
    title: "العميد",
    description: " 🎥 توريد وتركيب جميع أنواع كاميرات المراقبة",
    siteName: "العميد للمراقبة الأمنية",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "العميد",
    description: " 🎥 توريد وتركيب جميع أنواع كاميرات المراقبة",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} font-sans`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
