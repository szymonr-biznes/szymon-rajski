import Link from "next/link"

export function FoundersGallery() {
  return (
    <section className="bg-[#F4F1EA] border-t border-black/10 flex justify-end">
      <div className="w-full ml-3 lg:ml-0 max-w-[calc(100%-12px)] lg:max-w-[calc(50%+700px)] px-6 lg:px-8 py-24 border-l border-black relative">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground max-w-2xl leading-[1.1]">
            Proven with 30+<br />
            founders that trusted us<br />
            in <span className="font-serif italic font-normal">guiding</span> their growth
          </h2>
          <Link
            href="#cases"
            className="bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-sm text-sm font-semibold transition-colors shrink-0"
          >
            Explore Cases
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col gap-2 group cursor-pointer">
              {/* Green square placeholder */}
              <div className="aspect-[4/5] bg-green-500 rounded-sm w-full transition-transform duration-300 group-hover:scale-[1.02]"></div>
              
              {/* Blue label */}
              <div className="bg-[#0033FF] text-white py-3 px-4 rounded-sm text-center font-medium text-sm transition-colors group-hover:bg-[#002BE6]">
                Founder Name
              </div>
            </div>
          ))}
        </div>

        {/* Logos band */}
        <div className="mt-24 border-t border-b border-black/10 py-8 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale">
          {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'].map((logo, idx) => (
            <div key={idx} className="text-xl font-bold tracking-wider">{logo}</div>
          ))}
        </div>

      </div>
    </section>
  )
}
