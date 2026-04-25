import { Header } from "@/components/header"
import { NewHero } from "@/components/new-hero"
import { ProblemsGrid } from "@/components/problems-grid"
import { FoundersGallery } from "@/components/founders-gallery"
import { TrustEngine } from "@/components/trust-engine"
import { Testimonials } from "@/components/testimonials"
import { Comparison } from "@/components/comparison"
import { FooterCTA } from "@/components/footer-cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      {/* Global Vertical Line Wrapper */}
      <div className="fixed inset-0 z-40 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full relative">
          <div className="absolute top-0 bottom-0 left-4 lg:left-8 w-[1px] bg-black" />
        </div>
      </div>
      
      <Header />
      <main className="flex-1 relative z-10">
        <NewHero />
        <ProblemsGrid />
        <FoundersGallery />
        <TrustEngine />
        <Testimonials />
        <Comparison />
        <FooterCTA />
      </main>
    </div>
  )
}
