import { X } from "lucide-react"

const problems = [
  {
    title: "Your agency partners overpromise and underdeliver.",
    description: "You're tired of seeing great proposals turn into mediocre execution and excuses why campaigns aren't performing as expected."
  },
  {
    title: "Inbound marketing is the first thing you cut.",
    description: "When budgets tighten, you stop marketing because it feels like a cost center rather than a predictable revenue generator."
  },
  {
    title: "Your channels are too full of noise.",
    description: "You're struggling to stand out in a crowded market where everyone sounds the same and buyers are increasingly skeptical."
  },
  {
    title: "You've tried content, ads, email outreach - but remain in agony.",
    description: "You've invested time and money in multiple channels without seeing a unified strategy or a clear return on investment."
  },
  {
    title: "You struggle to close the deals you actually want.",
    description: "You're getting meetings, but they're not with your ideal customers, or you're constantly competing on price."
  }
]

export function ProblemsGrid() {
  return (
    <section className="bg-[#F4F1EA]">
      <div className="mx-auto lg:mx-auto ml-3 lg:ml-auto max-w-[1400px] px-6 lg:px-8 py-24 border-l border-black relative">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground max-w-2xl leading-[1.1]">
            Your delivery is world-class.<br />
            Your <span className="font-serif italic font-normal">sales pipeline</span> isn&apos;t.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-black/5 border border-black/5 rounded-sm overflow-hidden">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white p-10 flex flex-col items-start gap-4 hover:bg-gray-50 transition-colors">
              <div className="text-red-500 mb-2">
                <X className="w-5 h-5 stroke-[3]" />
              </div>
              <h3 className="text-lg font-semibold leading-tight text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {problem.description}
              </p>
            </div>
          ))}

          {/* Call to action card */}
          <div className="bg-[#0033FF] p-10 flex flex-col items-start justify-center gap-6">
            <h3 className="text-xl md:text-2xl font-medium text-white leading-tight">
              Sound alike? Don&apos;t Worry, what we believe
            </h3>
            <button className="bg-white text-[#0033FF] px-6 py-3 rounded-sm text-sm font-semibold hover:bg-gray-100 transition-colors">
              Click here to find out
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
