"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  restaurantName: string
}

export function Navigation({ restaurantName }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-restaurant-primary text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            {restaurantName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/90 hover:text-restaurant-secondary transition-colors">
              الرئيسية
            </Link>
            <Link href="/menu" className="text-white/90 hover:text-restaurant-secondary transition-colors">
              قائمة الطعام
            </Link>
            <Link href="#about" className="text-white/90 hover:text-restaurant-secondary transition-colors">
              عن المطعم
            </Link>
            <Link href="#contact" className="text-white/90 hover:text-restaurant-secondary transition-colors">
              اتصل بنا
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-white/90 hover:text-restaurant-secondary transition-colors" onClick={() => setIsOpen(false)}>
                الرئيسية
              </Link>
              <Link href="/menu" className="text-white/90 hover:text-restaurant-secondary transition-colors" onClick={() => setIsOpen(false)}>
                قائمة الطعام
              </Link>
              <Link href="#about" className="text-white/90 hover:text-restaurant-secondary transition-colors" onClick={() => setIsOpen(false)}>
                عن المطعم
              </Link>
              <Link href="#contact" className="text-white/90 hover:text-restaurant-secondary transition-colors" onClick={() => setIsOpen(false)}>
                اتصل بنا
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
