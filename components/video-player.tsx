"use client"

import { useState, useRef } from "react"

interface VideoPlayerProps {
  src: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}

export function VideoPlayer({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  controls = true,
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="h-8 w-8 animate-pulse rounded-full bg-black/10" />
        </div>
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        onLoadedData={() => setIsLoading(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 