import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroBannerProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  backgroundImageUrl: string
  overlay?: boolean
}

export function HeroBanner({ title, subtitle, ctaText, ctaHref, backgroundImageUrl, overlay = true }: HeroBannerProps) {
  return (
<section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden">
  <Image
    src={backgroundImageUrl || "/placeholder.svg"}
    alt="خلفية مطعم الديوان"
    fill
    sizes="100vw"
    className="object-cover"
    priority
  />
  {overlay && <div className="absolute inset-0 bg-black/40" />}

  <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{title}</h1>
    <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    <Button asChild size="lg" className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white px-8 py-3 text-lg">
      <Link href={ctaHref}>{ctaText}</Link>
    </Button>
  </div>
</section>

  )
}
