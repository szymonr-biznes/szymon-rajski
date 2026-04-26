"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Link from "next/link"

const STEPS = [
  {
    number: "01",
    label: "Strategy & Content",
    title: "WEBSITES & DIGITAL EXPERIENCES",
    desc: "We focus on the intersection of high-end design and technical complexity – where our approach creates the most value for digital products.",
    bgColor: "bg-black",
    textColor: "text-white",
    borderColor: "border-white/10",
  },
  {
    number: "02",
    label: "ABM Ads",
    title: "APPS, PLATFORMS & REAL-TIME SYSTEMS",
    desc: "Building scalable digital solutions that solve complex business problems through custom software and real-time data processing.",
    bgColor: "bg-[#0c1a16]",
    textColor: "text-white",
    borderColor: "border-emerald-900/30",
  },
  {
    number: "03",
    label: "Data Outreach",
    title: "E-COMMERCE & PRODUCT STORYTELLING",
    desc: "Beyond the standard storefront. We build premium shopping experiences where brand narrative meets conversion optimization.",
    bgColor: "bg-[#e5e5e7]",
    textColor: "text-black",
    borderColor: "border-black/5",
  },
]

export function TrustEngine() {
  return (
    <section className="bg-black text-white relative">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-auto border-l border-white pt-32 lg:pt-48 pb-32 lg:pb-48">
        <div className="flex flex-col lg:flex-row relative">

          {/* LEFT COLUMN: Sticky Title */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center px-6 lg:px-12 py-16 lg:py-0">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
                Guiding your growth<br />
                beyond the known<br />
                using our <span className="text-[#0033FF]">Trust Engine</span>
              </h2>
            </div>
          </div>

          {/* RIGHT COLUMN: Stacking Cards */}
          <div className="w-full lg:w-1/2 px-4 lg:px-10 pb-[20vh] relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10%" }}
                className={`sticky top-20 lg:top-32 w-full min-h-[60vh] lg:h-[75vh] ${step.bgColor} ${step.textColor} rounded-[2.5rem] p-8 lg:p-14 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden border ${step.borderColor} flex flex-col justify-between group mb-[50vh] last:mb-0`}
                style={{
                  zIndex: i + 1,
                }}
              >
                {/* Large index number in background */}
                <div className="absolute top-6 right-8 lg:top-10 lg:right-12 text-8xl lg:text-[10rem] font-medium tracking-tighter opacity-[0.03] lg:opacity-[0.05] group-hover:opacity-10 transition-opacity">
                  {step.number}
                </div>

                <div className="relative z-10 space-y-8 lg:space-y-12">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full tracking-widest uppercase border border-current/20 inline-block">
                    {step.label}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-medium leading-[1.1] max-w-[15ch]">
                    {step.title}
                  </h3>
                </div>

                <div className="relative z-10 space-y-10">
                  <p className="text-base lg:text-lg opacity-60 max-w-md leading-relaxed">
                    {step.desc}
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-4 group/btn"
                  >
                    <div className="w-11 h-11 rounded-full border border-current/20 flex items-center justify-center group-hover/btn:bg-current group-hover/btn:text-inherit transition-all duration-300">
                      <Plus className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-90" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest">Start project</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
