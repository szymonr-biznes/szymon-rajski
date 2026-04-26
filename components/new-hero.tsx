"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function NewHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-3 lg:mx-8 px-6 lg:px-8 pt-24 pb-32 lg:pt-36 lg:pb-48 flex flex-col lg:flex-row items-center justify-between relative z-10 border-l border-black">

        {/* Left Content */}
        <div className="max-w-2xl text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.1]"
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
              href="#cases"
              className="bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-sm text-sm font-semibold transition-colors flex items-center gap-2"
            >
              Dla twórców
            </Link>
            <Link
              href="#contact"
              className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-4 py-3 rounded-sm text-sm font-semibold transition-colors flex items-center gap-2"
            >
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
            <circle cx="380" cy="200" r="4" fill="black" />

            {/* Middle Orbit */}
            <ellipse cx="200" cy="200" rx="130" ry="55" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="330" cy="200" r="4" fill="black" />
            <text x="340" y="204" fill="black" fontSize="10" className="font-medium tracking-wide rotate-25 origin-center">Agility</text>

            {/* Inner Orbit */}
            <ellipse cx="200" cy="200" rx="80" ry="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="280" cy="200" r="4" fill="black" />
            <text x="290" y="204" fill="black" fontSize="10" className="font-medium tracking-wide rotate-25 origin-center">Clarity</text>

            {/* Center Star */}
            <path d="M200 190 L203 197 L210 200 L203 203 L200 210 L197 203 L190 200 L197 197 Z" fill="black" />
          </svg>
        </motion.div>

      </div>
    </section>
  )
}
