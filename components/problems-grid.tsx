import { X } from "lucide-react"
import Link from "next/link"

const problems = [
  {
    title: "Procesy istnieją tylko w głowach ludzi.",
    description: `Każde działanie zależy od ręcznej pracy, powtarzalnych
      zadań i improwizacji. Skala powoduje chaos zamiast wzrostu.`
  },
  {
    title: "Automatyzacje są pozorne albo nie istnieją.",
    description: `Narzędzia nie są połączone, dane się rozjeżdżają, a
      decyzje opierają się na niepełnym obrazie zamiast spójnym systemie.`
  },
  {
    title: "Lead generation i sprzedaż nie są systemem.",
    description: `Pozyskiwanie klientów jest nieregularne, a sprzedaż zależy
      od pojedynczych osób zamiast przewidywalnego procesu opartego na danych.`
  },
  {
    title: "Brak kontroli nad danymi i wynikami.",
    description: `Nie wiesz, które działania generują przychód, a które
      tylko zużywają zasoby. Decyzje są opóźnione i oparte na domysłach.`
  },
  {
    title: "Zespół jest przeciążony niskowartościową pracą.",
    description: `Czas specjalistów jest marnowany na operacyjne zadania
      zamiast działań, które realnie zwiększają przychód.`
  }
]

export function ProblemsGrid() {
  return (
    <section className="bg-[#F4F1EA] relative overflow-hidden">
      {/* Container with symmetric fixed margins */}
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-3 lg:mx-8 px-6 lg:px-8 py-24 border-l border-black relative">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground max-w-2xl leading-[1.1]">
            Twój biznes rośnie.<br />
            Operacje tego <span className="font-serif italic font-normal">nie wytrzymują.</span>
          </h2>
        </div>

        {/* Grid with delicate gaps (using gap-4 for a clean tiled look) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white p-10 flex flex-col items-start gap-4 border border-black/5 rounded-sm">
              <div className="text-red-500 mb-2">
                <X className="w-5 h-5 stroke-[3]" />
              </div>
              <h3 className="text-lg font-semibold leading-tight text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}

          {/* The Special 6th Card */}
          <div className="bg-[#0033FF] p-10 flex flex-col justify-between items-start gap-8 rounded-sm shadow-lg shadow-[#0033FF]/20">
            <h3 className="text-2xl font-medium leading-tight text-white">
              Brzmi znajomo?<br />
              Buduję systemy,<br />
              które to eliminują.
            </h3>

            <Link
              href="/business"
              className="bg-white text-[#0033FF] px-6 py-3 rounded-sm text-sm font-bold transition-all hover:bg-gray-100 flex items-center gap-2"
            >
              Zobacz rozwiązania
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
