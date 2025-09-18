// product-card.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "lucide-react";

interface ProductType {
  name: string;
  price: string;
}

interface ProductCardProps {
  id: string;
  name: string;
  desc: string;
  price?: string;
  imageUrl?: string;
  badges?: string[];
  types?: ProductType[];
}

export function ProductCard({
  id,
  name,
  desc,
  price,
  imageUrl,
  badges,
  types,
}: ProductCardProps) {
  // If no base price but we have types, show a "starting from" hint
  const headerPrice =
    price || (types?.length ? `من ${types[0].price}` : undefined);

  // أعلى الملف (خارج الـ component أو داخله قبل الـ return)
  const formatTypeCount = (n: number) => {
    if (n === 1) return "نوع";
    if (n === 2) return "نوعين";
    if (n > 2 && n < 11) return `${n} انواع`;
    return `${n}نوع`; // بدون مسافة عمداً ليتوافق مع مثال: 11نوع, 100نوع
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      {imageUrl && (
        <div className="relative bg-gray-100 aspect-[4/3]">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
          {badges && badges.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-restaurant-primary text-white text-xs"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      )}

      <CardContent className="p-6 flex flex-col h-full">
        {/* Title + main price */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-semibold text-restaurant-primary flex-1">
            {name}
          </h3>

          {headerPrice && (
            <span className="text-lg font-bold text-restaurant-secondary bg-restaurant-secondary/20 px-3 py-1 rounded-full ml-3 rtl:mr-3 rtl:ml-0">
              {headerPrice}
            </span>
          )}
        </div>

        {/* Product ID */}
        {/* <p className="text-xs text-gray-500 mb-3 rtl:text-right ltr:text-left">
          ID: {id}
        </p> */}

        {/* Description */}
        {desc && <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>}

        {/* Types / Variants — Modern card grid */}
        {types && types.length > 0 && (
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-restaurant-primary">
                الأنواع المتوفرة
              </h4>
              <Badge
                variant="outline"
                className="border-restaurant-primary/30 text-restaurant-primary"
              >
                {formatTypeCount(types.length)}
              </Badge>
            </div>

            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {types.map((t, i) => (
                <li
                  key={`${t.name}-${i}`}
                  className="group rounded-xl border border-gray-200 bg-white/60 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-white/50 px-3 py-2
                     hover:bg-restaurant-secondary/20 hover:border-restaurant-secondary/60 hover:shadow-sm transition-all
                     ring-0 hover:ring-1 hover:ring-restaurant-primary/30"
                >
                  <div className="flex items-center justify-between rtl:space-x-reverse">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-restaurant-secondary/50">
                        <Tag className="w-3.5 h-3.5 text-restaurant-primary" />
                      </span>
                      <span className="text-sm font-medium text-gray-800">
                        {t.name}
                      </span>
                    </div>

                    <span className="text-sm font-bold tracking-tight text-restaurant-primary bg-restaurant-primary/10 px-2.5 py-1 rounded-full">
                      {t.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Badges when there is no image */}
        {!imageUrl && badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-restaurant-primary text-restaurant-primary"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
