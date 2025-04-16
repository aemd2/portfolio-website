"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Info } from 'lucide-react'
import { ImageWithLoader } from './image-with-loader'

interface MediaItem {
  src: string
  alt: string
  type: 'image' | 'video'
  caption?: string
  description?: string
  section?: string
  phase?: string
  details?: string
}

interface ImageCarouselProps {
  media: MediaItem[]
  height?: number
  showThumbnails?: boolean
  showPhases?: boolean
}

export function ImageCarousel({ 
  media, 
  height = 400, 
  showThumbnails = true,
  showPhases = true
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [activePhase, setActivePhase] = useState<string | null>(null)

  // Group media by phases
  const phases = media.reduce((acc, item) => {
    if (item.phase && !acc.includes(item.phase)) {
      acc.push(item.phase)
    }
    return acc
  }, [] as string[])

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0
    const newIndex = isFirstItem ? media.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setActivePhase(media[newIndex].phase || null)
  }

  const goToNext = () => {
    const isLastItem = currentIndex === media.length - 1
    const newIndex = isLastItem ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setActivePhase(media[newIndex].phase || null)
  }

  const goToPhase = (phase: string) => {
    const index = media.findIndex(item => item.phase === phase)
    if (index !== -1) {
      setCurrentIndex(index)
      setActivePhase(phase)
    }
  }

  if (!media || media.length === 0) {
    return null
  }

  return (
    <div className="relative w-full flex flex-col gap-4">
      {/* Phase navigation */}
      {showPhases && phases.length > 0 && (
        <div className="flex gap-2 mb-4">
          {phases.map((phase) => (
            <button
              key={phase}
              onClick={() => goToPhase(phase)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activePhase === phase 
                  ? 'bg-black text-white' 
                  : 'bg-black/5 hover:bg-black/10'
              }`}
            >
              {phase}
            </button>
          ))}
        </div>
      )}

      {/* Main carousel container */}
      <div className="relative w-full rounded-lg overflow-hidden bg-black/5" style={{ height: `${height}px` }}>
        {/* Media items */}
        <div className="absolute inset-0">
          {media.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : index < currentIndex
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
              }`}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  controls
                  className="w-full h-full object-contain"
                  aria-label={item.alt}
                  playsInline
                />
              ) : (
                <div className="relative w-full h-full">
                  <ImageWithLoader
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {media[currentIndex].section && (
                <p className="text-xs font-medium uppercase tracking-wider mb-1 text-white/70">
                  {media[currentIndex].section}
                </p>
              )}
              {media[currentIndex].caption && (
                <p className="text-sm font-medium mb-1">{media[currentIndex].caption}</p>
              )}
              {media[currentIndex].description && (
                <p className="text-xs opacity-80">{media[currentIndex].description}</p>
              )}
            </div>
            {media[currentIndex].details && (
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors ml-2"
                aria-label="Toggle details"
              >
                <Info className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Details panel */}
        {showDetails && media[currentIndex].details && (
          <div className="absolute top-0 right-0 bottom-0 w-1/3 min-w-[300px] bg-white/95 p-6 transform transition-transform shadow-lg overflow-y-auto">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full"
            >
              ×
            </button>
            <div className="prose prose-sm">
              <div dangerouslySetInnerHTML={{ __html: media[currentIndex].details }} />
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'ring-2 ring-black ring-offset-2 scale-105' 
                  : 'opacity-70 hover:opacity-100'
              }`}
              aria-label={`Go to ${item.type} ${index + 1}`}
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full bg-black/10">
                  <video 
                    src={item.src}
                    className="w-full h-full object-cover"
                  />
                  <Play className="absolute inset-0 m-auto h-6 w-6 text-white/90" />
                </div>
              ) : (
                <ImageWithLoader
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 