"use client"
import type React from "react"
import { NavbarProvider } from "@/hooks/nav-provider"
import Header from "@/components/sections/Headers"
import Footer from "@/components/sections/Footer"
import { Gradient } from "@/components/customs/Heros"
import { usePathname } from "next/navigation"
import AuthFooter from "@/components/sections/AuthFooter"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isAuthPage = pathname === "/login" || pathname === "/signup"

  return (
    <NavbarProvider>
      {!isAuthPage && <Header />}
      <Gradient />
      {children}
      {!isAuthPage ? <Footer /> : <AuthFooter/>}
    </NavbarProvider>
  )
}
