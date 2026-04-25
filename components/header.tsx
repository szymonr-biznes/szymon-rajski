"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Services", href: "#" },
  { name: "Cases", href: "#" },
  { name: "Knowledge", href: "#" },
  { name: "About", href: "#" }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-black">
      <nav className="mx-auto max-w-[1400px] ml-3 lg:ml-auto flex items-center justify-between px-6 lg:px-8 py-4 border-l border-black">
        {/* Logo - left side */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-foreground">Agency.</span>
        </Link>

        {/* Desktop Navigation - centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Button - right side */}
        <div className="hidden lg:flex lg:justify-end">
          <Link
            href="#"
            className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="ml-auto lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border/40">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-4 block w-full text-center bg-[#0033FF] text-white px-5 py-3 rounded-sm text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
