import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  name: string;
  shortDesc: string;
  price: string;
  imageUrl?: string;
}

interface FeaturedMenuProps {
  sectionTitle: string;
  items: MenuItem[];
  menuPageHref: string;
}

export function FeaturedMenu({
  sectionTitle,
  items,
  menuPageHref,
}: FeaturedMenuProps) {
  return (
    <section className="py-16 bg-restaurant-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-primary mb-4 text-balance">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            تذوق أشهى الأطباق اليمنية التقليدية المحضرة بعناية فائقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              {item.imageUrl && (
                <div className="relative h-48">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-restaurant-primary">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-restaurant-secondary bg-restaurant-secondary/20 px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.shortDesc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white px-8"
          >
            <Link href={menuPageHref}>عرض قائمة الطعام كاملة</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
