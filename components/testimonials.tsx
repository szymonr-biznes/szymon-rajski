import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    name: "John Smith",
    role: "CEO at TechCorp",
    content: "Working with the agency transformed our entire approach to inbound marketing. We finally have a predictable pipeline.",
  },
  {
    name: "Emma Watson",
    role: "Director of Marketing, CloudScale",
    content: "A breath of fresh air compared to typical agencies. They truly operate as an extension of our own team.",
  }
]

export function Testimonials() {
  return (
    <section className="bg-[#F4F1EA]">
      <div className="w-[calc(100%-12px)] lg:w-[calc(100%-32px)] ml-3 lg:ml-8 px-6 lg:px-8 py-32 relative border-l border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1] mb-8">
              What <span className="font-serif italic font-normal">founders</span> say<br />
              about our partnership
            </h2>
            <div className="space-y-12">
              {testimonials.map((t, i) => (
                <div key={i} className="border-l-2 border-black/10 pl-6 py-2">
                  <p className="text-lg text-foreground/80 italic leading-relaxed mb-4">
                    &quot;{t.content}&quot;
                  </p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Video Placeholder */}
          <div className="relative aspect-video bg-black/5 rounded-sm overflow-hidden border border-black/5 flex items-center justify-center group cursor-pointer">
            <div className="w-16 h-16 bg-[#0033FF] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
            </div>
            <p className="absolute bottom-6 left-6 text-xs font-bold tracking-widest text-black/40">WATCH TESTIMONIAL</p>
          </div>

        </div>
      </div>
    </section>
  )
}
