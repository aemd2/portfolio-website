"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ImageWithLoader } from "@/components/image-with-loader"

interface MediaItem {
  src: string
  alt: string
  type: "image" | "video"
  caption: string
  description: string
  details?: string
}

export interface CaptionedCarouselProps {
  media: MediaItem[]
  height: number
  priority?: boolean
}

export function CaptionedCarousel({ media, height, priority = false }: CaptionedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentMedia = media[currentIndex]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  return (
    <div className="relative">
      <div className="relative aspect-video bg-black/5">
        {currentMedia.type === "image" ? (
          <ImageWithLoader
            src={currentMedia.src}
            alt={currentMedia.alt}
            fill
            className="object-contain"
            priority={priority}
          />
        ) : (
          <video
            src={currentMedia.src}
            controls
            playsInline
            className="w-full h-full object-contain"
            aria-label={currentMedia.alt}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {media.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div className="mt-4">
        <h4 className="font-medium text-lg mb-2">{currentMedia.caption}</h4>
        <p className="text-black/70">{currentMedia.description}</p>
        {currentMedia.details && (
          <div 
            className="mt-4 prose prose-sm max-w-none" 
            dangerouslySetInnerHTML={{ __html: currentMedia.details }} 
          />
        )}
      </div>

      {media.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-black" : "bg-black/20"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
} 