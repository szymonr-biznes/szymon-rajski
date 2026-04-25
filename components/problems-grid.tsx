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
    title: "Your sales team is starving for qualified leads.",
    description: "Instead of focusing on closing, your high-value sales talent is stuck doing manual prospecting and dealing with low-quality leads."
  }
]

export function ProblemsGrid() {
  return (
    <section className="bg-[#F4F1EA] relative overflow-hidden">
      <div className="w-[calc(100%-12px)] lg:w-[calc(100%-32px)] ml-3 lg:ml-8 px-6 lg:px-8 py-24 border-l border-black relative">
        
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
