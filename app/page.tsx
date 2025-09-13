import { Navigation } from "@/components/navigation"
import { HeroBanner } from "@/components/hero-banner"
import { AboutSection } from "@/components/about-section"
import { ImageCarousel } from "@/components/image-carousel"
import { FeaturedMenu } from "@/components/featured-menu"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { restaurantData } from "@/lib/restaurant-data"

export default function HomePage() {
  const { restaurant, home } = restaurantData

  return (
    <main className="min-h-screen">
      <Navigation restaurantName={restaurant.name} />

      <HeroBanner
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        ctaText={home.hero.ctaText}
        ctaHref={home.hero.ctaHref}
        backgroundImageUrl={home.hero.backgroundImageUrl}
        overlay={home.hero.overlay}
      />

      <AboutSection
        title={home.about.title}
        text={home.about.text}
        imageUrl={home.about.imageUrl}
        highlights={home.about.highlights}
      />

      <ImageCarousel
        images={home.carousel.images}
        autoPlay={home.carousel.autoPlay}
        intervalMs={home.carousel.intervalMs}
      />

      <FeaturedMenu
        sectionTitle={home.featuredMenu.sectionTitle}
        items={home.featuredMenu.items}
        menuPageHref={home.featuredMenu.menuPageHref}
      />

      <ContactSection
        address={home.contact.address}
        phone={home.contact.phone}
        whatsapp={home.contact.whatsapp}
        hours={home.contact.hours}
        email={home.contact.email}
        social={home.contact.social}
        mapEmbedUrl={home.contact.mapEmbedUrl}
      />

      <Footer restaurantName={restaurant.name} tagline={restaurant.tagline} />
    </main>
  )
}
