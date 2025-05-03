"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "New Delhi",
    image: "/images/testimonial-1.jpg",
    text: "SuryaShakti installed solar panels on my home last year, and I've seen a 70% reduction in my electricity bills. The team was professional and completed the installation in just two days.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "/images/testimonial-2.jpg",
    text: "As a business owner, switching to solar was a big decision. SuryaShakti guided me through the entire process and helped me secure government subsidies. Excellent service!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    image: "/images/testimonial-3.jpg",
    text: "We installed solar panels for our factory and the ROI has been incredible. The system paid for itself in just 3 years and now we're saving lakhs of rupees annually.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sunita Reddy",
    location: "Bangalore",
    image: "/images/testimonial-4.jpg",
    text: "The maintenance service from SuryaShakti is outstanding. They regularly check our system and ensure it's running at maximum efficiency. Highly recommended!",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [displayCount, setDisplayCount] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(3)
      } else if (window.innerWidth >= 768) {
        setDisplayCount(2)
      } else {
        setDisplayCount(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const next = () => {
    setCurrent((current + 1) % (testimonials.length - displayCount + 1))
  }

  const prev = () => {
    setCurrent((current - 1 + (testimonials.length - displayCount + 1)) % (testimonials.length - displayCount + 1))
  }

  const visibleTestimonials = testimonials.slice(current, current + displayCount)

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-6">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex-1 min-w-0 border-amber-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prev} disabled={current === 0} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          disabled={current >= testimonials.length - displayCount}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
