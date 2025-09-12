import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  desc: string;
  price: string;
  imageUrl?: string;
  badges?: string[];
}

export function ProductCard({
  name,
  desc,
  price,
  imageUrl,
  badges,
}: ProductCardProps) {
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
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-restaurant-primary flex-1">
            {name}
          </h3>
          <span className="text-lg font-bold text-restaurant-secondary bg-restaurant-secondary/20 px-3 py-1 rounded-full mr-3">
            {price}
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed flex-1">{desc}</p>

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
