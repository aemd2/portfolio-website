"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ImageWithLoader } from "./image-with-loader"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  image: string
  slug: string
}

export function AnimatedProjectCard({ id, title, description, image, slug }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group relative border border-black/20 rounded-sm overflow-hidden bg-[#f0f0f0]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-full h-[300px] flex items-center justify-center" 
      >
        <img 
          src={image || "/placeholder.svg"} 
          alt={title}
          className="max-w-[180px] max-h-[180px] object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex justify-between items-start bg-white">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-black/70">{description}</p>
        </div>
        <div
          className={`transform transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-80 -rotate-45"
          }`}
        >
          <ArrowUpRight className="h-6 w-6" />
        </div>
      </div>
    </Link>
  )
}

