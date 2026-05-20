import { Header } from "@/components/header"
import { socialMediaServices } from "@/lib/services"
import { FooterCTA } from "@/components/footer-cta"
import Link from "next/link"
import { Plus } from "lucide-react"

export const metadata = {
  title: "Dla Twórców | Szymon Rajski",
  description: "Narzędzia automatyzacji dla twórców i influencerów",
}

export default function CreatorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      <Header />
      <main className="flex-1 relative z-10">
        <section className="relative overflow-hidden">
          <div className="w-auto ml-3 lg:w-[calc(100%-128px)] lg:mx-16 px-6 lg:px-8 pt-28 pb-12 lg:pt-32 lg:pb-24 border-l border-black relative">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
              Dla Twórców
            </h1>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Zwiększ zasięgi i bądź na bieżąco ze swoimi obserwującymi dzięki inteligentnym systemom automatyzacji zaprojektowanym dla twórców.
            </p>
          </div>

          <div className="w-auto ml-3 lg:w-[calc(100%-128px)] lg:mx-16 border-l border-black pb-20 md:pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black">
              {socialMediaServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/creators/${service.slug}`}
                  className="p-8 lg:p-12 border-b md:border-r border-black flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-500 min-h-[400px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="bg-black text-white px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest uppercase group-hover:bg-white group-hover:text-black transition-colors">
                        Instagram
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{service.price}</div>
                        <div className="text-[10px] opacity-50 tracking-wider">{service.priceNote}</div>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-sm">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 rounded-sm text-xs md:text-sm font-bold transition-all flex items-center gap-3">
                      <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
                        <Plus className="w-3.5 h-3.5" />
                      </div>
                      Zobacz szczegóły
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  )
}
