"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Oszczędzaj czas",
    description: "Automatyzacja powtarzalnych zadań pozwala Ci skupić się na tym, co naprawdę ważne.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Zwiększ efektywność",
    description: "Moje narzędzia działają 24/7, zapewniając ciągłe wsparcie dla Twojego biznesu.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Users,
    title: "Dla każdego",
    description: "Rozwiązania dopasowane zarówno do twórców, jak i firm z personalizacją na żądanie",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
]

export function AboutSection() {
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
    <section className="py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O mnie
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Specjalizuję się w automatyzacji procesów, pomagając firmom i twórcom oszczędzać
            czas oraz zwiększać efektywność. Od narzędzi dla Instagrama po zaawansowane
            systemy outreachu — dostarczam rozwiązania, które działają.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${feature.bgColor}`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
