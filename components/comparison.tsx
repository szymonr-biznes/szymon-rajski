import { Kanban, CalendarCheck } from "lucide-react"

const isolatedTactics = [
  "Marnujesz dziesiątki godzin na powtarzalne klikanie",
  "Social media nie generują wyświetleń ani leadów",
  "Systemy nie są połączone, dane są niespójne",
  "Chaos operacyjny zabiera Ci czas na rozwój",
  "Sprzedaż działa bez zdefiniowanego procesu"
]

const trustEngine = [
  "Jeden system planowania i publikacji treści",
  "Leady trafiają do właściwych etapów bez ręcznej pracy",
  "Dane zbierane i porządkowane automatycznie",
  "Odzyskujesz 15h tygodniowo i wolny kalendarz",
  "Proces działa ciągle bez potrzeby ręcznej kontroli"
]

export function Comparison() {
  return (
    <section className="bg-[#F4F1EA] relative overflow-hidden">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-3 lg:mx-16 px-6 lg:px-8 py-32 text-center relative border-l border-black">

        {/* Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] pointer-events-none opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full text-[#0033FF]">
            <path d="M 50 200 C 50 50, 350 50, 350 200 C 350 350, 50 350, 50 200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1] mb-4">
            Przestań polegać<br />
            na <span className="font-serif italic font-normal">ręcznych działaniach</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-16">
            Moje rozwiązania łączą dane, procesy i sprzedaż w jeden niezawodny mechanizm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto text-left">

            {/* Left Column - Isolated Tactics */}
            <div>
              <div className="text-center mb-8">
                <h3 className="font-bold tracking-widest text-sm text-foreground">ROZPROSZONE DZIAŁANIA</h3>
                <p className="text-xs text-muted-foreground mt-1">Chaos i dezorganizacja</p>
              </div>
              <div className="space-y-4">
                {isolatedTactics.map((tactic, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-sm flex items-start gap-4 border border-black/5 shadow-sm">
                    <div className="w-6 h-6 rounded-sm bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Kanban className="w-4 h-4 stroke-[3]" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{tactic}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Trust Engine */}
            <div>
              <div className="text-center mb-8">
                <h3 className="font-bold tracking-widest text-sm text-[#0033FF] flex items-center justify-center gap-2">
                  ZINTEGROWANY SYSTEM
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Efekty widoczne od razu</p>
              </div>
              <div className="space-y-4 relative">
                {trustEngine.map((tactic, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-sm flex items-start gap-4 border border-[#0033FF]/20 shadow-[0_4px_20px_-10px_rgba(0,51,255,0.2)]">
                    <div className="w-6 h-6 rounded-sm bg-[#0033FF]/10 text-[#0033FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CalendarCheck className="w-4 h-4 stroke-[2]" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{tactic}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
