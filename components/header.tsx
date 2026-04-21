"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Social Media", href: "/social-media" },
  { name: "Biznes", href: "/business" },
  { name: "Kontakt", href: "/contact" }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
        {/* Logo - left side */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Szymon Rajski Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-foreground">Szymon Rajski</span>
        </Link>

        {/* Desktop Navigation - centered */}
        <div className="hidden flex-1 justify-center lg:flex lg:items-center lg:gap-8">
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

        {/* Spacer for balance */}
        <div className="hidden lg:block lg:w-[180px]" />

        {/* Mobile menu button */}
        <button
          type="button"
          className="ml-auto lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Otwórz menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-b border-border">
          <div className="space-y-1 px-6 pb-4 text-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
