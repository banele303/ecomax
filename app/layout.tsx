import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ecomax Manufacturing - Premium Building Materials Supplier",
  description:
    "Leading manufacturer and supplier of high-quality sustainable building materials including bricks, slabs, steel, and ready-mix concrete for construction projects of all sizes.",
  keywords:
    "building materials, construction supplies, sustainable construction, eco-friendly building, bricks, concrete, steel, slabs, construction materials, green building",
  openGraph: {
    title: "Ecomax Manufacturing - Premium Building Materials Supplier",
    description:
      "Leading manufacturer and supplier of high-quality sustainable building materials including bricks, slabs, steel, and ready-mix concrete.",
    url: "https://ecomax-manufacturing.com",
    siteName: "Ecomax Manufacturing",
    images: [
      {
        url: "/ecomax-logo.png",
        width: 1200,
        height: 630,
        alt: "Ecomax Manufacturing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ecomax-manufacturing.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">
          <Navbar />
          {children}
          <WhatsAppButton phoneNumber="+27123456789" />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'