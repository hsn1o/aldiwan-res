interface FooterProps {
  restaurantName: string
  tagline: string
}

export function Footer({ restaurantName, tagline }: FooterProps) {
  return (
    <footer className="bg-restaurant-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{restaurantName}</h3>
          <p className="text-restaurant-secondary mb-4">{tagline}</p>
          <p className="text-sm opacity-80">© {new Date().getFullYear()} جميع الحقوق محفوظة لمطعم الديوان</p>
        </div>
      </div>
    </footer>
  )
}
