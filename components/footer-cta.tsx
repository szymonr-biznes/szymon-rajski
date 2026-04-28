import Link from "next/link"
import { Plus } from "lucide-react"

const ADVANTAGES = [
  "Zaczynamy od spotkania, w którym przedstawiasz swoje wymagania.",
  "Rozpoczynamy współpracę bez żadnych pośredników na całym etapie trwania projektu.",
  "Zapewniam wsparcie i wprowadzanie zmian w projekcie na życzenie."
]

export function FooterCTA() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-3 lg:mx-16 px-6 lg:px-8 pt-20 pb-48 md:pb-32 relative z-10 border-l border-white">

        {/* Bottom Horizontal Line - Adjusted for mobile stack height */}
        <div className="absolute bottom-[180px] md:bottom-[64px] left-0 w-[2000px] h-[1px] bg-white z-20" />

        {/* Background blue gradient/glow */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-tr from-[#0033FF]/40 to-transparent opacity-50 pointer-events-none transform -translate-x-1/4 translate-y-1/4 blur-3xl rounded-full"></div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-24">

          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
              Rozmawiasz z <span className="font-serif italic font-normal">ekspertem</span>,<br />
              nie z kolejnym <span className="font-serif italic font-normal">sprzedawcą</span>
            </h2>
            <Link
              href="/contact"
              className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 rounded-sm text-xs md:text-sm font-semibold transition-colors flex items-center gap-3 w-fit"
            >
              <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5" />
              </div>
              Umów spotkanie
            </Link>
          </div>

          {/* Right Side - Advantages */}
          <div className="flex-1 w-full max-w-md bg-white/5 p-6 md:p-8 rounded-sm border border-white/10 backdrop-blur-sm">
            <div className="space-y-6 md:space-y-8">
              {ADVANTAGES.map((a, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#0033FF]/20 flex items-center justify-center flex-shrink-0 mt-1 border border-[#0033FF]/40">
                    <span className="text-[10px] font-bold text-[#0033FF]">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-relaxed">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info below the line */}
        <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[64px] flex items-center z-30">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 lg:px-8">
            <div className="text-xs text-gray-500 order-2 md:order-1">
              © {new Date().getFullYear()} Szymon Rajski All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
