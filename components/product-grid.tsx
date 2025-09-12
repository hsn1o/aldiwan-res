import { ProductCard } from "./product-card"

interface Product {
  id: string
  name: string
  desc: string
  price: string
  imageUrl?: string
  badges?: string[]
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
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
          name={product.name}
          desc={product.desc}
          price={product.price}
          imageUrl={product.imageUrl}
          badges={product.badges}
        />
      ))}
    </div>
  )
}
