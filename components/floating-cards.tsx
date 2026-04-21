"use client"

import { useEffect, useState, useMemo } from "react"
import {
  TrendingUp, MessageSquare, Users, Mail, CalendarDays,
  BarChart3, PieChart, Activity, Zap, CheckCircle2, Send,
  Bell, Target, Clock, FileText
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface FloatingCardsProps {
  variant: "growth" | "dm" | "outreach" | "email" | "booking"
  className?: string
}

interface CardData {
  icon: LucideIcon
  iconColor: string
  chartType: "bars" | "line" | "dots"
}

const allCardOptions: Record<string, CardData[]> = {
  growth: [
    { icon: TrendingUp, iconColor: "text-emerald-500", chartType: "line" },
    { icon: BarChart3, iconColor: "text-blue-500", chartType: "bars" },
    { icon: Activity, iconColor: "text-purple-500", chartType: "dots" },
    { icon: Target, iconColor: "text-orange-500", chartType: "line" },
    { icon: PieChart, iconColor: "text-pink-500", chartType: "bars" },
  ],
  dm: [
    { icon: MessageSquare, iconColor: "text-blue-500", chartType: "bars" },
    { icon: Send, iconColor: "text-emerald-500", chartType: "line" },
    { icon: CheckCircle2, iconColor: "text-purple-500", chartType: "dots" },
    { icon: Bell, iconColor: "text-amber-500", chartType: "bars" },
    { icon: Clock, iconColor: "text-cyan-500", chartType: "line" },
  ],
  outreach: [
    { icon: Users, iconColor: "text-orange-500", chartType: "line" },
    { icon: Zap, iconColor: "text-blue-500", chartType: "bars" },
    { icon: PieChart, iconColor: "text-emerald-500", chartType: "dots" },
    { icon: Target, iconColor: "text-red-500", chartType: "line" },
    { icon: TrendingUp, iconColor: "text-purple-500", chartType: "bars" },
  ],
  email: [
    { icon: Mail, iconColor: "text-blue-500", chartType: "bars" },
    { icon: Activity, iconColor: "text-purple-500", chartType: "line" },
    { icon: TrendingUp, iconColor: "text-emerald-500", chartType: "dots" },
    { icon: FileText, iconColor: "text-amber-500", chartType: "bars" },
    { icon: CheckCircle2, iconColor: "text-cyan-500", chartType: "line" },
  ],
  booking: [
    { icon: CalendarDays, iconColor: "text-purple-500", chartType: "line" },
    { icon: CheckCircle2, iconColor: "text-emerald-500", chartType: "bars" },
    { icon: BarChart3, iconColor: "text-blue-500", chartType: "dots" },
    { icon: Clock, iconColor: "text-orange-500", chartType: "line" },
    { icon: Bell, iconColor: "text-pink-500", chartType: "bars" },
  ],
}

// Seeded random for consistent card counts per variant
function seededRandom(seed: string) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

function MiniChart({ type }: { type: "bars" | "line" | "dots" }) {
  if (type === "bars") {
    return (
      <div className="flex items-end gap-0.5 sm:gap-1 h-5 sm:h-6">
        <div className="w-1.5 sm:w-2 bg-blue-300/60 rounded-sm" style={{ height: "40%" }} />
        <div className="w-1.5 sm:w-2 bg-blue-400/60 rounded-sm" style={{ height: "70%" }} />
        <div className="w-1.5 sm:w-2 bg-blue-300/60 rounded-sm" style={{ height: "55%" }} />
        <div className="w-1.5 sm:w-2 bg-blue-500/60 rounded-sm" style={{ height: "90%" }} />
        <div className="w-1.5 sm:w-2 bg-blue-400/60 rounded-sm" style={{ height: "65%" }} />
      </div>
    )
  }

  if (type === "line") {
    return (
      <svg viewBox="0 0 40 16" className="h-5 sm:h-6 w-12 sm:w-14">
        <path
          d="M2 12 L10 8 L18 10 L26 4 L34 6 L38 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-emerald-400/70"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <div className="flex items-center gap-1 sm:gap-1.5 h-5 sm:h-6">
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple-300/70" />
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple-400/70" />
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple-500/70" />
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple-400/70" />
    </div>
  )
}

function SingleCard({
  data,
  index,
  total,
  isHovered
}: {
  data: CardData
  index: number
  total: number
  isHovered: boolean
}) {
  const Icon = data.icon

  // Calculate rotation and position for fanned card effect - more spread out
  const baseRotation = (index - (total - 1) / 2) * 12
  const translateX = (index - (total - 1) / 2) * 45
  const translateY = Math.abs(index - (total - 1) / 2) * 6
  const zIndex = total - Math.abs(index - Math.floor(total / 2))

  // Animation delay for levitation
  const animationDelay = index * 0.4

  return (
    <div
      className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out"
      style={{
        transform: `
          translate(-50%, -50%) 
          translateX(${translateX}px) 
          translateY(${translateY}px) 
          rotate(${baseRotation}deg)
        `,
        zIndex,
      }}
    >
      <div
        className="relative w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 rounded-xl bg-white border border-gray-200/80 shadow-lg overflow-hidden transition-shadow duration-300"
        style={{
          animation: `levitate 3s ease-in-out ${animationDelay}s infinite`,
          boxShadow: isHovered
            ? "0 12px 32px rgba(0,0,0,0.15), 0 6px 12px rgba(0,0,0,0.1)"
            : "0 6px 16px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.06)",
        }}
      >
        {/* Icon at top */}
        <div className="flex items-center justify-center pt-3 sm:pt-4 pb-1 sm:pb-2">
          <Icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${data.iconColor}`} />
        </div>

        {/* Mini chart */}
        <div className="flex items-center justify-center py-1.5 sm:py-2">
          <MiniChart type={data.chartType} />
        </div>

        {/* Text placeholder lines */}
        <div className="px-2.5 sm:px-3 pt-1.5 sm:pt-2 space-y-1.5 sm:space-y-2">
          <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full w-full" />
          <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full w-3/4" />
          <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full w-1/2" />
        </div>
      </div>
    </div>
  )
}

export function FloatingCards({ variant, className = "" }: FloatingCardsProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Get random number of cards (2-5) based on variant seed
  const cards = useMemo(() => {
    const allCards = allCardOptions[variant] || allCardOptions.growth
    const seed = seededRandom(variant)
    const count = 2 + (seed % 4) // 2 to 5 cards
    return allCards.slice(0, count)
  }, [variant])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes levitate {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
      <div
        className={`relative h-36 sm:h-40 md:h-44 w-full flex items-center justify-center ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative w-full h-full transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              data={card}
              index={index}
              total={cards.length}
              isHovered={isHovered}
            />
          ))}
        </div>
      </div>
    </>
  )
}
