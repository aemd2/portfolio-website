import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CaseStudyPreviewProps {
  title: string
  description: string
  image: string
  category: string
  slug: string
}

export function CaseStudyPreview({ title, description, image, category, slug }: CaseStudyPreviewProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{category}</p>
            <h3 className="font-semibold text-xl leading-tight">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="pt-4">
          <Button variant="outline" size="sm" className="group/btn" asChild>
            <Link href={`/case-studies/${slug}`}>
              View case study
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

