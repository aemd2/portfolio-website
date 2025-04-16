"use client"

import { useState, useEffect } from "react"

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f5f2] transition-opacity duration-500">
      <div className="text-center">
        <div className="mb-4 text-4xl font-bold animate-pulse">ED</div>
        <div className="relative h-1 w-48 overflow-hidden rounded-full bg-black/10">
          <div className="absolute inset-0 bg-black animate-progress"></div>
        </div>
      </div>
    </div>
  )
}

