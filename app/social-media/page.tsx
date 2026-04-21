import { Header } from "@/components/header"
import { ServicesSection, socialMediaServices } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { SocialMediaBackground } from "@/components/social-media-background"

export const metadata = {
  title: "Social Media | Szymon Rajski",
  description: "Narzędzia automatyzacji dla twórców i influencerów Instagram",
}

export default function SocialMediaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SocialMediaBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <ServicesSection
            title="Social Media"
            description="Zwiększ zasięgi i bądź na bieżąco ze swoimi obserwującymi"
            services={socialMediaServices}
            categoryLabel="Instagram"
          />
        </main>
        <Footer />
      </div>
    </div>
  )
}
