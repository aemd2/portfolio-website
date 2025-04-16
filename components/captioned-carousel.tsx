"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithLoader } from './image-with-loader'

interface MediaItem {
  src: string
  alt: string
  type: 'image' | 'video'
  caption?: string
}

interface CaptionedCarouselProps {
  media: MediaItem[]
  height?: number
  priority?: boolean
}

export function CaptionedCarousel({ media, height = 400, priority = false }: CaptionedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0
    const newIndex = isFirstItem ? media.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastItem = currentIndex === media.length - 1
    const newIndex = isLastItem ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  if (!media || media.length === 0) {
    return null
  }
  
  const currentItem = media[currentIndex]

  return (
    <div className="w-full">
      <div className="relative w-full rounded-sm overflow-hidden" style={{ height: `${height}px` }}>
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#f0f0f0] transition-opacity duration-300"
          style={{ position: 'relative' }}
        >
          {media.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-500 ${
                index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  controls
                  className="max-h-full max-w-full"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  aria-label={item.alt}
                />
              ) : (
                <ImageWithLoader
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill={false}
                  width={height}
                  height={height}
                  className="object-contain max-h-full max-w-full"
                  priority={priority && index === 0}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Navigation Controls */}
        {media.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors flex items-center justify-center ${
                    index === currentIndex ? 'bg-black' : 'bg-black/30'
                  }`}
                  aria-label={`Go to ${item.type} ${index + 1}`}
                >
                  {item.type === 'video' && (
                    <span className="absolute w-3 h-3 border border-black rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Caption section */}
      {currentItem.caption && (
        <div className="mt-4 py-3 px-4 bg-white border border-black/10 rounded-sm">
          <p className="text-lg font-medium text-center">{currentItem.caption}</p>
        </div>
      )}
    </div>
  )
} 