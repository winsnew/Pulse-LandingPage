"use client"
import type React from "react"
import { NavbarProvider } from "@/hooks/nav-provider"
import "./globals.min.css"
import { Open_Sans } from "next/font/google"
import Header from "@/components/sections/Headers"
import Footer from "@/components/sections/Footer"
import { Gradient } from "@/components/customs/Heros"
import { usePathname } from "next/navigation"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
})

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isAuthPage = pathname === "/login" || pathname === "/signup"

  return (
    <NavbarProvider>
      {!isAuthPage && <Header />}
      <Gradient />
      {children}
      {!isAuthPage && <Footer />}
    </NavbarProvider>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={`${openSans.className} ${openSans.variable}`}>
      <LayoutContent>{children}</LayoutContent>
    </body>
  )
}
