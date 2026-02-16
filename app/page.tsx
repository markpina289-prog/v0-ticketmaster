import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { CategoryNav } from "@/components/category-nav"
import { TrendingEvents } from "@/components/trending-events"
import { DiscoverSection } from "@/components/discover-section"
import { FeaturedEvents } from "@/components/featured-events"
import { NearbyEvents } from "@/components/nearby-events"
import { PromoBanner } from "@/components/promo-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <CategoryNav />
        <TrendingEvents />
        <DiscoverSection />
        <FeaturedEvents />
        <NearbyEvents />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  )
}
