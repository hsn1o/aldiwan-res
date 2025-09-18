// product-grid.tsx
import { ProductCard } from "./product-card"

export interface ProductType {
  name: string
  price: string
}

export interface Product {
  id: string
  name: string
  desc: string
  /**
   * Keep price optional so products that only use types still render.
   * If both price and types exist, we'll show price and list the types below.
   */
  price?: string
  imageUrl?: string
  badges?: string[]
  /** NEW: optional variants (sizes, with/without meal, etc.) */
  types?: ProductType[]
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">لا توجد منتجات في هذه الفئة حالياً</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          desc={product.desc}
          price={product.price}
          imageUrl={product.imageUrl}
          badges={product.badges}
          types={product.types}
        />
      ))}
    </div>
  )
}
