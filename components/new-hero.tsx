"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"

export function NewHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-3 lg:mx-16 px-6 lg:px-8 pt-24 pb-12 lg:pt-24 lg:pb-24 flex flex-col lg:flex-row items-center justify-between relative z-10 border-l border-black">

        {/* Left Content */}
        <div className="max-w-2xl text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]"
          >
            Skaluj biznes<br />
            bez <span className="font-serif italic font-normal">żadnych</span> granic
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed"
          >
            Buduję w pełni zautomatyzowane systemy, które pracują dla Ciebie 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <Link
              href="/social-media"
              className="bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-sm text-xs md:text-sm font-semibold transition-colors flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-[4px] bg-white/10 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5" />
              </div>
              Dla twórców
            </Link>
            <Link
              href="/business"
              className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 rounded-sm text-xs md:text-sm font-semibold transition-colors flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5" />
              </div>
              Dla biznesu
            </Link>
          </motion.div>
        </div>

        {/* Right Graphic - SVG Orbits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block relative w-[600px] h-[600px] flex-shrink-0 mt-12 lg:mt-0"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full text-black/20" style={{ transform: 'rotate(-25deg)' }}>
            {/* Outer Orbit */}
            <ellipse cx="200" cy="200" rx="180" ry="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="220" cy="120" r="4" fill="black" />
            <text x="157" y="106" fill="black" fontSize="10" className="font-medium tracking-wide rotate-25 origin-center">Elastyczne</text>

            {/* Middle Orbit */}
            <ellipse cx="200" cy="200" rx="130" ry="55" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="235" r="4" fill="black" />
            <text x="104" y="260" fill="black" fontSize="10" className="font-medium tracking-wide rotate-25 origin-center">Szybkie</text>

            {/* Inner Orbit */}
            <ellipse cx="200" cy="200" rx="80" ry="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="277" cy="210" r="4" fill="black" />
            <text x="243" y="165" fill="black" fontSize="10" className="font-medium tracking-wide rotate-25 origin-center">Niezawodne</text>

            {/* Center Star */}
            <path d="M200 190 L203 197 L210 200 L203 203 L200 210 L197 203 L190 200 L197 197 Z" fill="#22C55E" />
          </svg>
        </motion.div>

      </div>
    </section>
  )
}
