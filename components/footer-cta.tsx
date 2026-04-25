import Link from "next/link"

export function FooterCTA() {
  return (
    <section className="bg-black text-white pt-32 pb-16 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] pl-10 lg:pl-16 pr-6 lg:pr-8 relative z-10">
        
        {/* Background blue gradient/glow */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-tr from-[#0033FF]/40 to-transparent opacity-50 pointer-events-none transform -translate-x-1/4 translate-y-1/4 blur-3xl rounded-full"></div>

        <div className="flex flex-col lg:flex-row items-end justify-between gap-16 border-b border-white/10 pb-24">
          
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
              Let&apos;s talk
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

        {/* Real Footer part inside the black section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold tracking-tighter">Agency.</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Agency. All rights reserved.
          </div>
        </div>

      </div>
    </section>
  )
}
