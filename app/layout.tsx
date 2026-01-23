import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const halenoir = localFont({
  src: [
    {
      path: "../public/fonts/Halenoir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Halenoir-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Halenoir-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-halenoir",
  display: "swap",
})

const clarikaPro = localFont({
  src: [
    {
      path: "../public/fonts/clarika-pro-geo-bold.otf",
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
      <body className={`${halenoir.variable} ${clarikaPro.variable} antialiased`} style={{ fontFamily: 'var(--font-halenoir), var(--font-clarika), sans-serif' }}>{children}</body>
    </html>
  )
}
