"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

// Define gallery items with their metadata
const galleryItems = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Residential solar installation in Delhi",
    category: "residential",
    location: "Delhi",
    capacity: "5kW",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Commercial solar installation for office building",
    category: "commercial",
    location: "Mumbai",
    capacity: "25kW",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Industrial solar farm installation",
    category: "industrial",
    location: "Gujarat",
    capacity: "100kW",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Residential rooftop solar panels",
    category: "residential",
    location: "Bangalore",
    capacity: "7kW",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    alt: "Commercial solar carport installation",
    category: "commercial",
    location: "Chennai",
    capacity: "15kW",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    alt: "Industrial solar installation for factory",
    category: "industrial",
    location: "Hyderabad",
    capacity: "50kW",
  },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filter gallery items based on active filter
  const filteredItems = activeFilter ? galleryItems.filter((item) => item.category === activeFilter) : galleryItems

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <div className="space-y-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant={activeFilter === null ? "default" : "outline"}
          onClick={() => setActiveFilter(null)}
          className="bg-green-700 hover:bg-green-800"
        >
          {t("gallery.viewAll")}
        </Button>
        <Button
          variant={activeFilter === "residential" ? "default" : "outline"}
          onClick={() => setActiveFilter("residential")}
          className={activeFilter === "residential" ? "bg-green-700 hover:bg-green-800" : ""}
        >
          {t("gallery.residential")}
        </Button>
        <Button
          variant={activeFilter === "commercial" ? "default" : "outline"}
          onClick={() => setActiveFilter("commercial")}
          className={activeFilter === "commercial" ? "bg-green-700 hover:bg-green-800" : ""}
        >
          {t("gallery.commercial")}
        </Button>
        <Button
          variant={activeFilter === "industrial" ? "default" : "outline"}
          onClick={() => setActiveFilter("industrial")}
          className={activeFilter === "industrial" ? "bg-green-700 hover:bg-green-800" : ""}
        >
          {t("gallery.industrial")}
        </Button>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <Card
            key={item.id}
            className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-64">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 className="text-white h-10 w-10" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium capitalize">{item.category}</span>
                <span className="text-sm text-gray-500">{item.location}</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">{item.capacity}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">{t("gallery.close")}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/20 z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">{t("gallery.previous")}</span>
            </Button>

            <div className="relative w-full h-[70vh]">
              <Image
                src={filteredItems[currentImageIndex].src || "/placeholder.svg"}
                alt={filteredItems[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/20 z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">{t("gallery.next")}</span>
            </Button>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{filteredItems[currentImageIndex].alt}</p>
              <p className="text-sm">
                {filteredItems[currentImageIndex].location} - {filteredItems[currentImageIndex].capacity}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
