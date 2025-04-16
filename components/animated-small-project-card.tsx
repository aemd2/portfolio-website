"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface SmallProjectCardProps {
  id: number
  title: string
  description: string
  logo: string
  slug: string
}

export function AnimatedSmallProjectCard({ id, title, description, logo, slug }: SmallProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group border border-black/20 rounded-sm p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div>
          <div
            className={`w-10 h-10 mb-4 transition-transform duration-300 ${
              isHovered ? "-translate-y-1" : "translate-y-0"
            }`}
          >
            <Image src={logo || "/placeholder.svg"} alt={title} width={40} height={40} className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-xs text-black/70">{description}</p>
        </div>
        <div
          className={`transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  )
}

