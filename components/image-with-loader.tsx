"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageWithLoaderProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export function ImageWithLoader({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Ensure the container has proper styling for fill images
  const containerStyle = fill 
    ? { position: 'relative' as const, height: '100%', width: '100%', minHeight: '100px' } 
    : {};

  return (
    <div className={`relative overflow-hidden ${className}`} style={containerStyle}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="h-8 w-8 animate-pulse rounded-full bg-black/10" />
        </div>
      )}

      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {fill ? (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className={`object-cover transition-all ${className}`}
            onLoad={() => setIsLoading(false)}
            priority={priority}
          />
        ) : (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width || 800}
            height={height || 600}
            className={`object-cover transition-all ${className}`}
            onLoad={() => setIsLoading(false)}
            priority={priority}
          />
        )}
      </div>
    </div>
  )
}

