import { Header } from "@/components/header"
import { ServicesSection, businessServices } from "@/components/services-section"
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
        />
      </main>
      <Footer />
    </div>
  )
}
