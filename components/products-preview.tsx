"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Instagram, Briefcase, MessageSquare, TrendingUp, Mail, CalendarDays, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCards } from "./floating-cards"

const products = [
  {
    category: "Twórcy",
    categoryIcon: Instagram,
    title: "Instagram Profile Growth",
    description: "Kompletna analiza dla małych twórców chcących zwiększać swoje zasięgi. Otrzymujesz szczegółowy raport wraz z rekomendacjami i gotowymi treściami do publikacji.",
    href: "/creators/instagram-growth",
    icon: TrendingUp,
    cardVariant: "growth" as const,
  },
  {
    category: "Twórcy",
    categoryIcon: Instagram,
    title: "Instagram DM Replier",
    description: "Automatyczne odpowiedzi na wiadomości prywatne. Twórcy podpinają usługę i mają zautomatyzowane odpowiedzi dla swoich obserwujących 24/7.",
    href: "/creators/instagram-dm",
    icon: MessageSquare,
    cardVariant: "dm" as const,
  },
  {
    category: "Biznes",
    categoryIcon: Briefcase,
    title: "Outreach & Leads",
    description: "Automatyzacja pozyskiwania klientów dla małych i średnich firm. System identyfikuje potencjalnych klientów i inicjuje kontakt.",
    href: "/business/leads-system",
    icon: Users,
    comingSoon: false,
    cardVariant: "outreach" as const,
  },
  {
    category: "Biznes",
    categoryIcon: Briefcase,
    title: "Cold Email Systems",
    description: "Zaawansowane systemy cold emailingu z personalizacją, sekwencjami i analityką. Zwiększaj konwersję poprzez inteligentne kampanie.",
    href: "/business/cold-email",
    icon: Mail,
    comingSoon: false,
    cardVariant: "email" as const,
  },
  {
    category: "Biznes",
    categoryIcon: Briefcase,
    title: "System Rezerwacji",
    description: "Uniwersalny system rezerwacji dla różnych branż - od salonów kosmetycznych po warsztaty samochodowe. Automatyczne przypomnienia i zarządzanie kalendarzem.",
    href: "/business/bookings",
    icon: CalendarDays,
    comingSoon: false,
    cardVariant: "booking" as const,
  },
]

function AnimatedCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Alternate sides for circular flow effect
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${isVisible
        ? "translate-x-0 opacity-100 scale-100"
        : isLeft
          ? "-translate-x-12 opacity-0 scale-95"
          : "translate-x-12 opacity-0 scale-95"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`relative ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
        {/* Connector dot for circular flow */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: `${index * 150 + 300}ms`
          }}
        />

        <Link href={product.href}>
          <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-300 ${isVisible ? "shadow-lg" : ""
            }`}>
            <CardContent className="p-0">
              <div className="grid gap-0 md:grid-cols-2">
                {/* Content side */}
                <div className={`flex flex-col justify-center p-6 ${!isLeft ? "md:order-2" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
                      style={{
                        transform: isVisible ? "scale(1)" : "scale(0.8)",
                        opacity: isVisible ? 1 : 0,
                        transition: "all 0.5s ease-out",
                        transitionDelay: `${index * 150 + 200}ms`
                      }}
                    >
                      <product.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                        {product.comingSoon && (
                          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                            Wkrótce
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <product.categoryIcon className="h-3.5 w-3.5" />
                        {product.category}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors group-hover:text-blue-600">
                    Zobacz szczegóły
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>

                {/* Floating cards side */}
                <div className={`relative flex items-center justify-center p-6 min-h-[220px] ${!isLeft ? "md:order-1" : ""}`}>
                  <div className="absolute inset-4 rounded-lg border border-border bg-muted/30 overflow-hidden" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <FloatingCards variant={product.cardVariant} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export function ProductsPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Oferta
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wybierz produkt dopasowany do Twoich potrzeb
          </p>
        </div>

        {/* Vertical timeline connector */}
        <div className="relative mt-12">
          {/* Central vertical line for desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 lg:block" />

          <div className="flex flex-col gap-8">
            {products.map((product, index) => (
              <AnimatedCard key={product.title} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
