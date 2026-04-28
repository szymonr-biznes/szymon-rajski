import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { FooterCTA } from "@/components/footer-cta"
import { socialMediaServices, businessServices } from "@/lib/services"
import { Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"
import CheckoutForm from "@/components/checkout-form"
import { ScrollButton } from "@/components/scroll-button"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const allServices = [...socialMediaServices, ...businessServices]
  const service = allServices.find((s) => s.slug === slug)

  if (!service) return { title: "Usługa nie znaleziona" }

  return {
    title: `${service.title} | Szymon Rajski`,
    description: service.shortDescription,
  }
}

export default async function DetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const allServices = [...socialMediaServices, ...businessServices]
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      <Header />

      <main className="flex-1 relative z-10">
        <section className="relative overflow-hidden">
          {/* Hero Section of Service */}
          <div className="w-[calc(100%-12px)] lg:w-[calc(100%-128px)] ml-3 lg:mx-16 px-6 lg:px-8 pt-32 pb-12 lg:pt-48 lg:pb-24 border-l border-black relative">
            <Link
              href="/social-media"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground mb-12 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Wróć do ofert
            </Link>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="max-w-3xl">
                <div className="bg-black text-white px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest uppercase mb-6 inline-block">
                  Instagram
                </div>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-8">
                  {service.title}
                </h1>
                <p className="text-sm text-foreground/70 leading-relaxed max-w-2xl">
                  {service.fullDescription}
                </p>
              </div>

              <div className="lg:text-right bg-white/50 p-6 md:p-8 rounded-sm border border-black/10 backdrop-blur-sm min-w-0 md:min-w-[280px] w-full md:w-auto">
                <div className="text-3xl md:text-4xl font-bold mb-1">{service.price}</div>
                <div className="text-xs tracking-widest text-foreground/50 mb-6">{service.priceNote}</div>
                <ScrollButton
                  targetId="order"
                  label="Rozpocznij teraz"
                  className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 rounded-sm text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#0033FF]/20 w-full md:w-auto cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-auto ml-3 lg:w-[calc(100%-128px)] lg:mx-16 border-l border-black border-t border-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 border-b md:border-r border-black">
                <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Co otrzymujesz</h3>
                <ul className="space-y-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-sm bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Plus className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base opacity-70 leading-relaxed">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.howItWorks && service.howItWorks.length > 0 && (
                <div className="p-8 lg:p-12 border-b lg:border-r border-black">
                  <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Jak działamy</h3>
                  <ul className="space-y-6">
                    {service.howItWorks.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-sm bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-sm md:text-base opacity-70 leading-relaxed">{step.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Checkout/Contact Section */}
          <div id="order" className="w-auto ml-3 lg:w-[calc(100%-128px)] lg:mx-16 border-l border-black py-20 lg:py-32 px-6 lg:px-12 pb-20 md:pb-32 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
                Gotowy na współpracę?
              </h2>
              <div className="bg-white/50 backdrop-blur-sm p-6 md:p-12 rounded-sm border border-black/10 text-left">
                {(service as any).type === "buy" ? (
                  <>
                    <CheckoutForm slug={service.slug} />
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-base md:text-lg opacity-70 mb-8">
                      Ta usługa wymaga indywidualnego podejścia. Umów się na bezpłatną konsultację, aby omówić szczegóły wdrożenia.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 rounded-sm text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#0033FF]/20"
                    >
                      <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
                        <Plus className="w-3.5 h-3.5" />
                      </div>
                      Umów się na spotkanie
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterCTA />
    </div>
  )
}
