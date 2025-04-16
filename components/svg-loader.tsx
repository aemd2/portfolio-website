"use client"

import { useState } from "react"

interface SVGLoaderProps {
  src: string
  alt: string
  className?: string
}

export function SVGLoader({ src, alt, className = "" }: SVGLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="h-8 w-8 animate-pulse rounded-full bg-black/10" />
        </div>
      )}
      <object
        data={src}
        type="image/svg+xml"
        className={`w-full h-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        aria-label={alt}
      >
        {alt}
      </object>
    </div>
  )
} 