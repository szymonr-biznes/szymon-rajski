import { X, Zap } from "lucide-react"

const isolatedTactics = [
  "We run some ads and hope people download a random PDF",
  "We try to post on LinkedIn but have no clear strategy in place",
  "We hire a sales rep and hope they close deals via cold email",
  "We rely on referrals and word of mouth from previous clients"
]

const trustEngine = [
  "Strategic architecture mapping messaging to the exact buyer journey",
  "Running full-funnel media combining brand awareness and performance",
  "Distributing core narratives on all channels where buyers live",
  "Sales enablement combined with continuous marketing optimization"
]

export function Comparison() {
  return (
    <section className="bg-[#F4F1EA] overflow-hidden">
      <div className="max-w-[1400px] w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-auto px-6 lg:px-8 py-32 text-center relative border-l border-black">
        
        {/* Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] pointer-events-none opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full text-[#0033FF]">
            <path d="M 50 200 C 50 50, 350 50, 350 200 C 350 350, 50 350, 50 200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1] mb-4">
            Stop relying<br />
            on <span className="font-serif italic font-normal">isolated tactics</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-16">
            We build holistic systems that connect your product truth with the market reality, creating predictable, scalable growth architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto text-left">
            
            {/* Left Column - Isolated Tactics */}
            <div>
              <div className="text-center mb-8">
                <h3 className="font-bold tracking-widest text-sm text-foreground">ISOLATED TACTICS</h3>
                <p className="text-xs text-muted-foreground mt-1">Focus on local maximums, lack of synergy</p>
              </div>
              <div className="space-y-4">
                {isolatedTactics.map((tactic, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-sm flex items-start gap-4 border border-black/5 shadow-sm">
                    <div className="w-6 h-6 rounded-sm bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 stroke-[3]" />
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
                  <Zap className="w-4 h-4 fill-[#0033FF]" />
                  TRUST ENGINE
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Holistic, synergistic, predictable</p>
              </div>
              <div className="space-y-4 relative">
                {trustEngine.map((tactic, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-sm flex items-start gap-4 border border-[#0033FF]/20 shadow-[0_4px_20px_-10px_rgba(0,51,255,0.2)]">
                    <div className="w-6 h-6 rounded-sm bg-[#0033FF]/10 text-[#0033FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 stroke-[2]" />
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
