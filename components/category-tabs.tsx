"use client"

interface Category {
  id: string
  name: string
}

interface CategoryTabsProps {
  categories: Category[]
  selectedCategoryId: string
  onCategoryChange: (categoryId: string) => void
}

export function CategoryTabs({ categories, selectedCategoryId, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            selectedCategoryId === category.id
              ? "bg-restaurant-primary text-white shadow-lg"
              : "bg-white text-restaurant-primary border-2 border-restaurant-primary hover:bg-restaurant-primary hover:text-white"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
