"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Plus } from "lucide-react"
import { motion, useScroll, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Social Media", href: "/social-media" },
  { name: "Biznes", href: "/business" },
  { name: "Kontakt", href: "/contact" }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hiding logic
      if (mobileMenuOpen) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY = currentScrollY

      // Dark mode detection
      const sections = document.querySelectorAll('section')
      let currentIsDark = false

      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 40 && rect.bottom >= 40) {
          if (section.classList.contains('bg-black')) {
            currentIsDark = true
          }
        }
      })
      setIsDark(currentIsDark)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${isDark ? "bg-black border-b border-white" : "bg-[#F4F1EA] border-b border-black"
        }`}
    >
      <nav className={`w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-3 lg:mx-16 flex items-center justify-between px-6 lg:px-8 py-4 border-l transition-colors duration-300 ${isDark ? "border-white" : "border-black"
        }`}>
        {/* Logo - left side */}
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${isDark ? "text-white" : "text-black"
            }`}>Szymon Rajski</span>
        </Link>

        {/* Desktop Navigation - centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-300 group ${isDark ? "text-gray-400 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.name}
              <span className={`absolute left-0 -bottom-1 w-full h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isDark ? "bg-white" : "bg-black"}`}></span>
            </Link>
          ))}
        </div>

        {/* Action Button - right side */}
        <div className="hidden lg:flex lg:justify-end">
          <Link
            href="#"
            className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-colors flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
              <Plus className="w-3.5 h-3.5" />
            </div>
            Umów spotkanie
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden overflow-hidden transition-colors duration-300 ${isDark ? "bg-black" : "bg-[#F4F1EA]"
              }`}
          >
            <div className={`ml-3 border-l px-6 pb-8 pt-4 transition-colors duration-300 ${isDark ? "border-white" : "border-black"
              }`}>
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block w-fit relative text-lg font-medium transition-colors duration-300 group ${isDark ? "text-white" : "text-black"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <span className={`absolute left-0 -bottom-1 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isDark ? "bg-white" : "bg-black"}`}></span>
                  </Link>
                ))}
                <Link
                  href="#"
                  className="mt-8 flex items-center justify-center gap-3 w-full text-center bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 rounded-sm text-sm font-semibold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                  Umów spotkanie
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
