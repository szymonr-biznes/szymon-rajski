"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const STEPS = [
  {
    number: "01",
    label: "Instagram",
    title: "Instagram Profile Growth",
    desc: `Dzięki zaawansowanym algorytmom przygotowujemy specjalny raport
      dla twórców, chcących zwiększyć swoje zasięgi oraz nawiązać zyskowne
      współprace z branżowymi markami.`,
    bgColor: "bg-gradient-to-br from-[#405DE6] via-[#5851DB] to-[#833AB4]",
    textColor: "text-white",
    borderColor: "border-white/10",
    isAvailable: true,
  },
  {
    number: "02",
    label: "Instagram",
    title: "Instagram DM Replier",
    desc: `Dla twórców mających dziesiątki zapytań lub ofert w DM, którym ciężko
      jest odpisywać manualnie. Tworzymy system, który obsługuje Twoich obersujących
      za Ciebie zgodnie z Twoimi wytycznymi.`,
    bgColor: "bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C]",
    textColor: "text-white",
    borderColor: "border-white/10",
    isAvailable: true,
  },
  {
    number: "03",
    label: "TikTok",
    title: "TikTok Partership Agent",
    desc: `Dla twórców chcących zarabiać ze współpracy dzięki najlepszym ofertom
      na podstawie analizy aktualnych trendów w internecie.`,
    bgColor: "bg-gradient-to-br from-[#E1306C] via-[#FD1D1D] to-[#F56040]",
    textColor: "text-white",
    borderColor: "border-white/10",
    isAvailable: false,
  },
]

export function TrustEngine() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const nextStep = () => {
    setActiveIndex((prev) => (prev + 1) % STEPS.length)
  }

  const prevStep = () => {
    setActiveIndex((prev) => (prev - 1 + STEPS.length) % STEPS.length)
  }

  return (
    <section className="bg-black text-white relative">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-auto border-l border-white pt-32 lg:pt-48 pb-32 lg:pb-48">
        <div className="flex flex-col lg:flex-row relative items-center">

          {/* LEFT COLUMN: Sticky Title */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center px-6 lg:px-12 py-16 lg:py-0">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
                Zwiększaj zasięgi<br />
                i zautomatyzuj swoje<br />
                <span className="text-[#0033FF]">social media</span>
              </h2>
              <p className="mt-6 text-gray-400 text-lg max-w-md leading-relaxed">
                Odkryj unikalne systemy dla twórców internetowych, które napędzą Twój
                wzrost oraz pozwolą Ci oferować swoje usługi na zupełnie nowym poziomie.
              </p>

              {/* Pagination indicators for the carousel */}
              <div className="mt-12 flex items-center gap-4">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveIndex(i) }}
                    className={`h-1 transition-all duration-500 rounded-full ${i === activeIndex ? "w-12 bg-[#0033FF]" : "w-6 bg-white/20"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Revolving Door Carousel */}
          <div className="w-full lg:w-1/2 px-4 lg:px-10 h-[600px] lg:h-[80vh] flex items-center justify-center relative perspective-[1500px]">
            <div className="relative w-full h-[500px] lg:h-[600px] max-w-[500px]">
              <AnimatePresence mode="popLayout">
                {STEPS.map((step, i) => {
                  const isActive = i === activeIndex
                  const isPrevious = i === (activeIndex - 1 + STEPS.length) % STEPS.length
                  const isNext = i === (activeIndex + 1) % STEPS.length

                  if (!isActive && !isPrevious && !isNext) return null

                  // Calculate "revolving" positions
                  let x: string | number = 0
                  let z: string | number = 0
                  let scale = 1
                  let opacity = 1
                  let rotateY = 0
                  let zIndex = 0

                  if (isActive) {
                    x = 0
                    z = 0
                    scale = 1
                    opacity = 1
                    rotateY = 0
                    zIndex = 30
                  } else if (isNext) {
                    x = "15%"
                    z = -200
                    scale = 0.85
                    opacity = 0.3
                    rotateY = -30
                    zIndex = 20
                  } else if (isPrevious) {
                    x = "-15%"
                    z = -200
                    scale = 0.85
                    opacity = 0.3
                    rotateY = 30
                    zIndex = 10
                  }

                  return (
                    <motion.div
                      key={i}
                      initial={isNext ? { x: "50%", opacity: 0, z: -400 } : { x: "-50%", opacity: 0, z: -400 }}
                      animate={{
                        x,
                        z,
                        scale,
                        opacity,
                        rotateY,
                        zIndex,
                      }}
                      exit={{
                        x: isPrevious ? "-50%" : "50%",
                        opacity: 0,
                        z: -400,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                      className={`absolute inset-0 w-full h-full ${step.bgColor} ${step.textColor} rounded-sm p-8 lg:p-14 shadow-2xl border ${step.borderColor} flex flex-col justify-between group cursor-pointer`}
                      onClick={nextStep}
                    >
                      {/* Large index number in background */}
                      <div className="absolute top-6 right-8 lg:top-10 lg:right-12 text-8xl lg:text-[10rem] font-medium tracking-tighter opacity-[0.03] lg:opacity-[0.05] group-hover:opacity-10 transition-opacity pointer-events-none">
                        {step.number}
                      </div>

                      <div className="relative z-10 space-y-6">
                        <div className="bg-black text-white px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest uppercase inline-block border border-white/10">
                          {step.label}
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-medium leading-[1.1] max-w-[15ch]">
                          {step.title}
                        </h3>
                      </div>

                      <div className="relative z-10 space-y-8">
                        <p className="text-sm lg:text-base opacity-70 max-w-md leading-relaxed">
                          {step.desc}
                        </p>
                        {!step.isAvailable ? (
                          <div className="bg-white/10 text-white/40 px-6 py-3 rounded-sm text-sm font-bold w-fit cursor-not-allowed border border-white/5 uppercase tracking-widest">
                            Wkrótce
                          </div>
                        ) : (
                          <Link
                            href="#contact"
                            className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-6 py-3 rounded-sm text-sm font-bold transition-all inline-flex items-center gap-3 w-fit shadow-lg shadow-[#0033FF]/20"
                          >
                            <Plus className="w-4 h-4" />
                            Zobacz ofertę
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6 lg:hidden">
                <button onClick={prevStep} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextStep} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
