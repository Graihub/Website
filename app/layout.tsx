import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "NAK HUB - MEDIA",
  description: "NAK HUB - Your ultimate hub for executors, scripts, and community",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${quicksand.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
