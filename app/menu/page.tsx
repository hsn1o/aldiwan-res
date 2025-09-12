"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { CategoryTabs } from "@/components/category-tabs"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { restaurantData } from "@/lib/restaurant-data"

export default function MenuPage() {
  const { restaurant, menu } = restaurantData
  const [selectedCategory, setSelectedCategory] = useState(menu.categories[0].id)

  const selectedProducts = menu.products[selectedCategory] || []

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation restaurantName={restaurant.name} />

      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="text-restaurant-primary hover:text-restaurant-primary/80">
                  <ArrowRight className="w-4 h-4 ml-1" />
                  العودة للرئيسية
                </Link>
              </Button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-restaurant-primary mb-4 text-balance">
              قائمة طعام مطعم الديوان
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              اكتشف مجموعة متنوعة من الأطباق اليمنية الأصيلة المحضرة بأجود المكونات وأصالة الطعم اليمني العريق
            </p>
          </div>

          <CategoryTabs
            categories={menu.categories}
            selectedCategoryId={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-restaurant-primary text-center">
              {menu.categories.find((cat) => cat.id === selectedCategory)?.name}
            </h2>
          </div>

          <ProductGrid products={selectedProducts} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-restaurant-primary mb-4">جاهز لتجربة أطباقنا الشهية؟</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">احجز طاولتك الآن أو اتصل بنا لطلب التوصيل</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white px-8" asChild>
              <Link href="/#contact">احجز طاولة</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white px-8 bg-transparent"
              asChild
            >
              <a
                href={`https://wa.me/${restaurantData.home.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                اطلب عبر واتساب
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer restaurantName={restaurant.name} tagline={restaurant.tagline} />
    </main>
  )
}
