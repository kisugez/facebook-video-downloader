import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const clarikaPro = localFont({
  src: [
    {
      path: "./fonts/clarika-pro-geo-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/clarika-pro-geo-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/clarika-pro-geo-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/clarika-pro-geo-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clarika",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Facebook Video Downloader",
  description: "Download videos from Facebook easily",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${clarikaPro.variable} antialiased`} style={{ fontFamily: 'var(--font-clarika), sans-serif' }}>{children}</body>
    </html>
  )
}
