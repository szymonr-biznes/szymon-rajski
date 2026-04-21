"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Automatyzuję dziś.
            <span className="mt-2 block text-muted-foreground sm:mt-4">
              Ty odzyskujesz czas.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Buduję i dostarczam kompleksowe narzędzia dla twórców i firm. Rozwijaj swoją
            markę szybciej i efektywniej bez tracenia cennego czasu.
          </p>
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30" asChild>
              <Link href="/social-media">
                Zobacz ofertę
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/contact">Skontaktuj się</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
