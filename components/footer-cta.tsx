import Link from "next/link"

export function FooterCTA() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-3 lg:mx-8 px-6 lg:px-8 pt-32 pb-48 md:pb-32 relative z-10 border-l border-white">

        {/* Bottom Horizontal Line - Adjusted for mobile stack height */}
        <div className="absolute bottom-[180px] md:bottom-[64px] left-0 w-[2000px] h-[1px] bg-white z-20" />

        {/* Background blue gradient/glow */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-tr from-[#0033FF]/40 to-transparent opacity-50 pointer-events-none transform -translate-x-1/4 translate-y-1/4 blur-3xl rounded-full"></div>

        <div className="flex flex-col lg:flex-row items-end justify-between gap-16 mb-24">

          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
              Talk to an <span className="font-serif italic font-normal">expert</span>,<br />
              not sales
            </h2>
            <Link
              href="#contact"
              className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-8 py-4 rounded-sm text-sm font-semibold transition-colors inline-block"
            >
              Umów spotkanie
            </Link>
          </div>

          {/* Right Side - Images */}
          <div className="flex gap-4 items-end">
            <div className="flex flex-col gap-2">
              <div className="w-[160px] h-[200px] bg-green-500 rounded-sm border border-white/10"></div>
              <div>
                <p className="text-xs font-semibold">Expert 1</p>
                <p className="text-[10px] text-gray-400">Strategy Lead</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-[140px] h-[180px] bg-green-500 rounded-sm border border-white/10"></div>
              <div>
                <p className="text-xs font-semibold">Expert 2</p>
                <p className="text-[10px] text-gray-400">Growth Partner</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info below the line */}
        <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[64px] flex items-center z-30">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 lg:px-8">
            <div className="text-xs text-gray-500 order-2 md:order-1">
              © {new Date().getFullYear()} Szymon Rajski All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-gray-400 font-medium order-1 md:order-2">
              <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
