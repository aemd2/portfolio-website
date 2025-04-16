"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[]
}

export function AnimatedTestimonials({ testimonials }: AnimatedTestimonialsProps) {
  const [testimonialPage, setTestimonialPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate how many pages of testimonials we have (showing 3 per page)
  const totalPages = Math.ceil(testimonials.length / 3)

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonials()
    }, 5000)

    return () => clearInterval(interval)
  }, [totalPages])

  // Get current testimonials to display (3 at a time)
  const currentTestimonials = testimonials.slice(testimonialPage * 3, testimonialPage * 3 + 3)

  // Handle manual navigation
  const nextTestimonials = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setTestimonialPage((prev) => (prev + 1) % totalPages)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const prevTestimonials = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setTestimonialPage((prev) => (prev - 1 + totalPages) % totalPages)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonialPage}-${index}`}
            className={`bg-white border border-black/10 rounded-sm p-6 flex flex-col h-full transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-4">
              <svg className="h-6 w-6 text-black/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <div className="flex-1 mb-4 min-h-[80px]">
              <p className="italic">{testimonial.quote}</p>
            </div>
            <div className="mt-auto">
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-sm text-black/70">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setTimeout(() => {
                    setTestimonialPage(index)
                    setTimeout(() => setIsAnimating(false), 50)
                  }, 300)
                }
              }}
              className={`w-2 h-2 rounded-full ${
                testimonialPage === index ? "bg-black" : "bg-black/20"
              } transition-colors`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={prevTestimonials}
            className="p-1 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
            aria-label="Previous testimonials"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextTestimonials}
            className="p-1 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
            aria-label="Next testimonials"
            disabled={isAnimating}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

