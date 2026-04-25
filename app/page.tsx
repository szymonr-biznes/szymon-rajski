import { Header } from "@/components/header"
import { NewHero } from "@/components/new-hero"
import { ProblemsGrid } from "@/components/problems-grid"
import { UsageGallery } from "@/components/usage-gallery"
import { TrustEngine } from "@/components/trust-engine"
import { Testimonials } from "@/components/testimonials"
import { Comparison } from "@/components/comparison"
import { FooterCTA } from "@/components/footer-cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      <Header />
      <main className="flex-1 relative z-10">
        <NewHero />
        <ProblemsGrid />
        <UsageGallery />
        <TrustEngine />
        <Testimonials />
        <Comparison />
        <FooterCTA />
      </main>
    </div>
  )
}
