import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { businessServices } from "@/lib/services"
import { Footer } from "@/components/footer"
import { ParallaxBackground } from "@/components/parallax-background"

export const metadata = {
  title: "Business | Szymon Rajski",
  description: "Automatyzacja outreachu, cold emailingu i rezerwacji dla firm",
}

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ParallaxBackground />
      <Header />
      <main className="flex-1">
        <ServicesSection
          title="Biznes"
          description="Systemy analityczne oraz pozyskiwanie klientów"
          services={businessServices}
          categoryLabel="Komunikacja z klientami"
          basePath="/business"
        />
      </main>
      <Footer />
    </div>
  )
}
