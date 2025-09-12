import Image from "next/image"
import { Check } from "lucide-react"

interface AboutSectionProps {
  title: string
  text: string
  imageUrl: string
  highlights: string[]
}

export function AboutSection({ title, text, imageUrl, highlights }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-restaurant-primary mb-6 text-balance">{title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{text}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-restaurant-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
