import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    name: "John Smith",
    role: "CEO at TechCorp",
    content: "Working with the agency transformed our entire approach to inbound marketing. We finally have a predictable pipeline.",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Growthify",
    content: "The level of strategic understanding they brought to our messaging was unparalleled. We started closing bigger deals within months.",
  },
  {
    name: "Michael Chen",
    role: "VP of Sales, InnovateHQ",
    content: "They actually understood our complex B2B sales cycle. The leads aren't just numerous, they're exactly who we want to talk to.",
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
      <div className="max-w-[1400px] w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-auto px-6 lg:px-8 py-32 relative border-l border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side */}
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
              We treat your <span className="font-serif italic font-normal">sales<br />pipeline</span> like it&apos;s our own
            </h2>
            
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              We take extreme ownership of your revenue targets, working closely with sales to ensure every lead we generate has a high probability of closing.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#cases"
                className="bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-sm text-sm font-semibold transition-colors"
              >
                Explore cases
              </Link>
              <Link
                href="#contact"
                className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-4 py-3 rounded-sm text-sm font-semibold transition-colors"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>

          {/* Right Side - Testimonials List */}
          <div className="space-y-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm flex flex-col gap-4 border border-black/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
