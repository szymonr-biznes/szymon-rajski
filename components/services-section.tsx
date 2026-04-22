import { ServiceCard } from "./service-card"
import { socialMediaServices, businessServices } from "@/lib/services"

interface ServicesSectionProps {
  title: string
  description: string
  services: typeof socialMediaServices | typeof businessServices
  categoryLabel: string
  basePath?: string
}

export function ServicesSection({ title, description, services, categoryLabel, basePath }: ServicesSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-primary" />
            <h2 className="text-xl font-semibold text-foreground">{categoryLabel}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} basePath={basePath} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
