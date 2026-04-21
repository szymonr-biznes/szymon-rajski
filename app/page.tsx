import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsPreview } from "@/components/products-preview"
import { Footer } from "@/components/footer"
import { ParallaxBackground } from "@/components/parallax-background"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ParallaxBackground />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsPreview />
      </main>
      <Footer />
    </div>
  )
}
