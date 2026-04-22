import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { socialMediaServices, businessServices } from "@/components/services-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowLeft, ShieldCheck, Zap, CreditCard, Star, Clock, Heart } from "lucide-react"
import Link from "next/link"
import { WorkflowDiagram } from "@/components/workflow-diagram"
import { SocialMediaBackground } from "@/components/social-media-background"
import { ParallaxBackground } from "@/components/parallax-background"

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

export default async function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
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

            <Card className="overflow-hidden transition-shadow hover:shadow-md flex flex-col bg-card">
              <div className="grid md:grid-cols-5">
                {/* Left Column: Info */}
                <div className="md:col-span-3 p-8 space-y-6">
                  <div>
                    <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="prose prose-sm dark:prose-invert">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground">Co otrzymujesz:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Payment */}
                <div className="md:col-span-2 p-6 flex flex-col justify-center">
                  <div className="relative rounded-lg border border-border bg-muted/30 p-8 flex flex-col justify-between space-y-8 h-full">
                    <div className="space-y-6">
                      <div className="text-center md:text-left">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest font-bold">Inwestycja</p>
                        <p className="text-4xl font-black text-foreground tracking-tight">{service.price}</p>
                        {service.priceNote && (
                          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{service.priceNote}</p>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <ShieldCheck className="h-4 w-4 text-primary/70" />
                          <span>Bezpieczna płatność</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Zap className="h-4 w-4 text-primary/70" />
                          <span>Błyskawiczna realizacja</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CreditCard className="h-4 w-4 text-primary/70" />
                          <span>Faktura VAT na życzenie</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button disabled asChild className="w-full text-sm font-semibold group transition-all">
                        <a href="/contact">
                          Skontaktuj się osobiście
                          <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>

                      <p className="text-[10px] text-center text-muted-foreground leading-relaxed uppercase tracking-tighter opacity-70">
                        {/* Zostaniesz przekierowany do bezpiecznego formularza. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
