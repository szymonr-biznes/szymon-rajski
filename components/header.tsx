"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const navigation = [
  { name: "Services", href: "#" },
  { name: "Cases", href: "#" },
  { name: "Knowledge", href: "#" },
  { name: "About", href: "#" }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentIsDark = false
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        // Check if section is currently under the header (approx 40px down)
        if (rect.top <= 40 && rect.bottom >= 40) {
          if (section.classList.contains('bg-black')) {
            currentIsDark = true
          }
        }
      })
      setIsDark(currentIsDark)
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isDark ? "bg-black border-b border-white" : "bg-[#F4F1EA] border-b border-black"
      }`}
    >
      <nav className={`mx-auto max-w-[1400px] ml-3 lg:ml-auto flex items-center justify-between px-6 lg:px-8 py-4 border-l transition-colors duration-300 ${
        isDark ? "border-white" : "border-black"
      }`}>
        {/* Logo - left side */}
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${
            isDark ? "text-white" : "text-black"
          }`}>Agency.</span>
        </Link>

        {/* Desktop Navigation - centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isDark ? "text-gray-400 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
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
          {isDark ? (
            mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />
          ) : (
            mobileMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b transition-colors duration-300 ${
          isDark ? "bg-black border-white/10" : "bg-[#F4F1EA] border-border/40"
        }`}>
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-base font-medium transition-colors duration-300 ${
                  isDark ? "text-white hover:bg-white/5" : "text-foreground hover:bg-black/5"
                }`}
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
    </motion.header>
  )
}
