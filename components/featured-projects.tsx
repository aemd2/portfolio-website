"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  slug: string
}

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0)

  const projects: Project[] = [
    {
      id: 1,
      title: "AI HR Dashboard",
      description:
        "An AI-powered HR dashboard for Community Dreams Foundation that reduced onboarding time by 70% and improved task allocation efficiency.",
      image: "/placeholder.svg?height=800&width=1200",
      category: "UX/UI Design",
      slug: "ai-hr-dashboard",
    },
    {
      id: 2,
      title: "Educational Website",
      description:
        "A comprehensive UX/UI strategy for Santos Creations Educational Foundation, including a design system with 30+ reusable components.",
      image: "/placeholder.svg?height=800&width=1200",
      category: "Design System",
      slug: "educational-website",
    },
    {
      id: 3,
      title: "Chat Application",
      description:
        "UX and UI design for a chat app enabling seamless communication for 100+ users across Uganda and other parts of the world.",
      image: "/placeholder.svg?height=800&width=1200",
      category: "Mobile App Design",
      slug: "chat-application",
    },
  ]

  return (
    <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "border rounded-lg p-6 cursor-pointer transition-all",
              activeProject === index ? "bg-background shadow-md" : "bg-transparent hover:bg-background/50",
            )}
            onClick={() => setActiveProject(index)}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={cn("rounded-full transition-opacity", activeProject === index ? "opacity-100" : "opacity-0")}
                asChild
              >
                <Link href={`/case-studies/${project.slug}`}>
                  <ArrowUpRight className="h-5 w-5" />
                  <span className="sr-only">View project</span>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={projects[activeProject].image || "/placeholder.svg"}
          alt={projects[activeProject].title}
          fill
          className="object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="p-6 text-white">
            <p className="text-sm opacity-80 mb-2">{projects[activeProject].category}</p>
            <h3 className="text-2xl font-bold mb-4">{projects[activeProject].title}</h3>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link href={`/case-studies/${projects[activeProject].slug}`}>
                View case study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

