import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { socialMediaServices, businessServices } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowLeft, ShieldCheck, Zap, CreditCard, Star, Clock, Heart } from "lucide-react"
import Link from "next/link"
import { WorkflowDiagram } from "@/components/workflow-diagram"
import { SocialMediaBackground } from "@/components/social-media-background"
import { ParallaxBackground } from "@/components/parallax-background"
import CheckoutForm from "@/components/checkout-form"

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
  const isSocialMedia = socialMediaServices.some(s => s.slug === slug)
  const allServices = [...socialMediaServices, ...businessServices]
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      {isSocialMedia ? <SocialMediaBackground /> : <ParallaxBackground />}

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/social-media"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Wróć do ofert
            </Link>

            <Card className="overflow-hidden transition-shadow hover:shadow-md flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{service.shortDescription}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-bold text-foreground">{service.price}</p>
                    <p className="text-xs text-muted-foreground">{service.priceNote}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="grid md:grid-cols-5 gap-8 flex-1">
                  {/* Left Column: Info */}
                  <div className="md:col-span-3 space-y-6 flex flex-col">
                    <p className="text-sm text-foreground leading-relaxed">{service.fullDescription}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 flex-1">
                      <div className="space-y-4">
                        <p className="text-sm font-medium text-foreground">Co otrzymujesz:</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.howItWorks && service.howItWorks.length > 0 && (
                        <div className="space-y-4">
                          <p className="text-sm font-medium text-foreground">Jak działamy:</p>
                          <ul className="space-y-2">
                            {service.howItWorks.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span className="leading-relaxed">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Payment Guarantees */}
                  <div className="md:col-span-2 flex flex-col">
                    <div className="relative rounded-lg border border-border bg-muted/30 p-6 sm:p-8 flex flex-col space-y-8 h-full">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <ShieldCheck className="h-4 w-4 text-primary/70 shrink-0" />
                          <span>Bezpieczna płatność</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Zap className="h-4 w-4 text-primary/70 shrink-0" />
                          <span>Błyskawiczna realizacja</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CreditCard className="h-4 w-4 text-primary/70 shrink-0" />
                          <span>Faktura VAT na życzenie</span>
                        </div>
                      </div>

                      <div className="space-y-4 mt-auto">
                        <Button disabled asChild className="w-full text-sm font-semibold group transition-all">
                          <a href="/contact">
                            Skontaktuj się osobiście
                            <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
