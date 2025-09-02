"use client"
import Link from "next/link"

export default function AuthFooter() {
  return (
    <footer className="w-full border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-slate-400 text-sm">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <img src="/favicon.png" alt="Logo" className="w-5 h-5" />
          <span className="font-semibold text-white">Pulse</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  )
}
