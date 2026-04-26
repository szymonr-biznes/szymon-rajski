"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { Plus } from "lucide-react"

const STEPS = [
  {
    label: "Strategy & Content",
    title: (
      <>
        Guiding your <span className="font-serif italic font-normal">growth</span>
        <br />beyond the known
        <br />using our Trust Engine
      </>
    ),
    desc: "We tell your unique story and turn your expertise into content that is worth sharing. This engineers trust at scale, positioning you as a respected authority long before the first contact.",
  },
  {
    label: "ABM Ads",
    title: (
      <>
        Account-Based
        <br />Marketing <span className="font-serif italic font-normal">Ads</span>
      </>
    ),
    desc: "Stop leaving your growth to the luck of an algorithm. We use ABM to guarantee your best content actually reaches your dream clients — keeping you consistently top-of-mind.",
  },
  {
    label: "Data Outreach",
    title: (
      <>
        Outreach based on
        <br />real <span className="font-serif italic font-normal">data signals</span>
      </>
    ),
    desc: "We replace generic cold mails with precise outreach based on real data signals. Because the prospect already knows your brand, the conversation is warm from the start.",
  },
]

function OrbitSVG({ progress }: { progress: any }) {
  const cx = 200
  const cy = 200

  // Mapowanie scrolla na rysowanie pierścieni
  const ring1Progress = useTransform(progress, [0, 0.33], [0, 1])
  const ring2Progress = useTransform(progress, [0.33, 0.66], [0, 1])
  const ring3Progress = useTransform(progress, [0.66, 1], [0, 1])

  const rings = [
    { r: 50, color: "#99b3ff", progress: ring1Progress },
    { r: 90, color: "#4d79ff", progress: ring2Progress },
    { r: 130, color: "#0033FF", progress: ring3Progress },
  ]

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="orbitGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {rings.map(({ r, color, progress: pValue }, i) => (
        <g key={i}>
          {/* Tło pierścienia */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
          />
          {/* Animowany postęp pierścienia */}
          <motion.circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ pathLength: pValue }}
            transform={`rotate(-90 ${cx} ${cy})`}
            filter="url(#orbitGlow)"
          />
        </g>
      ))}

      <path d="M200 191 L207 200 L200 209 L193 200 Z" fill="white" filter="url(#orbitGlow)" />
      <text
        x="200" y="183"
        fill="rgba(255,255,255,0.25)"
        fontSize="7" textAnchor="middle"
        fontFamily="monospace" letterSpacing="2"
      >
        TRUST ENGINE
      </text>
    </svg>
  )
}

export function TrustEngine() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // calculate maximal vertical translation based on container height
  const [maxTranslate, setMaxTranslate] = useState(0)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const total = el.offsetHeight - window.innerHeight
      setMaxTranslate(total > 0 ? total : 0)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const translateY = useTransform(scrollYProgress, [0, 1], [0, maxTranslate])

  return (
    <section ref={containerRef} className="bg-black text-white relative">
      {/* Container z borderem po lewej */}
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-auto border-l border-white">
        <div className="flex flex-col lg:flex-row items-start relative">

          {/* LEWA KOLUMNA: Scrolluje się naturalnie */}
          <div className="w-full lg:w-1/2 px-6 lg:px-12">
            {STEPS.map((step, i) => (
              <div key={i} className="min-h-screen flex flex-col justify-center py-24">
                <span className="text-[10px] font-mono px-2 py-1 rounded-sm tracking-widest uppercase border border-[#333] text-[#555] inline-block w-fit mb-8">
                  {step.label}
                </span>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                  {step.title}
                </h2>
                <p className="mt-6 text-sm text-gray-400 max-w-md leading-relaxed border-l border-gray-800 pl-4">
                  {step.desc}
                </p>
                <div className="mt-8">
                  <Link
                    href="#engine"
                    className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 rounded-sm text-sm font-semibold transition-colors inline-flex items-center gap-3 w-fit"
                  >
                    <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                    Discover our solutions
                  </Link>
                </div>
              </div>
            ))}

            {/* Stopka sekcji rozszerzająca wysokość scrolla */}
            <div className="py-64 border-t border-white/10">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight">Founder-Led</h3>
              <p className="mt-6 text-sm text-gray-400 max-w-md leading-relaxed">
                Everything we build is based on deep experience in the field, led by founders who understand the reality of growing a modern business.
              </p>
            </div>
          </div>

          {/* PRAWA KOLUMNA: Animacja przewijana w dół razem ze stroną */}
          <motion.div
            className="hidden lg:block w-1/2"
            style={{
              y: translateY,
              position: "relative",
              height: "100vh",
            }}
          >
            <div className="h-full flex items-center justify-center p-12">
              <div className="w-full max-w-[450px] aspect-square relative">
                <OrbitSVG progress={scrollYProgress} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
