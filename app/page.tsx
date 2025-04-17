"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { PageLoader } from "@/components/page-loader"
import { AnimatedTestimonials } from "@/components/animated-testimonials"
import { AnimatedProjectCard } from "@/components/animated-project-card"
import { AnimatedSmallProjectCard } from "@/components/animated-small-project-card"

// Define an interface for the small project structure
interface SmallProject {
  id: number;
  title: string;
  description: string;
  logo: string;
  slug: string;
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [testimonialPage, setTestimonialPage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Santos Creations Educational Foundation",
      description: "EMPOWERING AFRICAN COMMUNITIES THROUGH DIGITAL INNOVATION • 2024",
      image: "/Africa/Logo.png",
      slug: "Afrika",
    },
    {
      id: 2,
      title: "Eurovoyage",
      description: "STRATEGIC DESIGN FOR EUROPEAN TRAVEL EXPERIENCES • 2024",
      image: "/eurovoyage/LogoEU.png",
      slug: "eurovoyage",
    },
    {
      id: 3,
      title: "Pen Pal Magic App",
      description: "CONNECTING UGANDAN CHILDREN WITH GLOBAL PEN PALS • 2023",
      image: "/pen-pal-images/PEN PAL LOGO.png",
      slug: "pen-pal",
    },
    {
      id: 4,
      title: "CDF Internal Platform",
      description: "INTERNAL PRODUCT • STREAMLINING OPERATIONS FOR 20+ TEAMS • 2023",
      image: "/Dream-ai/logo-dark.png",
      slug: "Dream-Ai",
    }
  ]

  // Explicitly type the empty smallProjects array
  const smallProjects: SmallProject[] = []

  const testimonials = [
    {
      quote:
        "I'm happy to strongly recommend Emil Donchev for any UI development work. Emil was a very strong contributor to our Pattern Sphere project. He created useful designs and developed prototypes of various pages very quickly. In addition, he was an excellent team player. He fielded questions and requests from other volunteers quickly. To me, as the project owner, I especially appreciated his assistance, teaching me the importance of various elements of modern web page design and providing numerous examples that broadened my understanding. His contributions had a very important long-term impact on the project.",
      author: "Doug Schuler",
      role: "Founder, Pattern Sphere",
    },
    {
      quote:
        "Emil's expertise in UI/UX design helped lay a strong foundation for our platform's development. His work on our landing page, dashboard, and examination portal significantly enhanced user navigation and engagement. We're proud to recognize him as an EduAid Africa Ambassador for his outstanding contributions.",
      author: "Engr. (Dr.) Babashola Santos Aderibigbe",
      role: "Chief Visionary Officer, Santos Creations Educational Foundation",
    },
    {
      quote:
        "Working with Emil on our European travel platform was a remarkable experience. His user-centered design approach and attention to detail significantly improved our user engagement metrics. His ability to combine aesthetic appeal with functional simplicity made our complex booking system accessible to all users, regardless of their tech proficiency.",
      author: "Mikhail Petrov",
      role: "Project Manager, Eurovoyage",
    }
  ]

  // Calculate how many pages of testimonials we have (showing 3 per page)
  const totalPages = Math.ceil(testimonials.length / 3)

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialPage((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [totalPages])

  // Get current testimonials to display (3 at a time)
  const currentTestimonials = testimonials.slice(testimonialPage * 3, testimonialPage * 3 + 3)

  // Handle manual navigation
  const nextTestimonials = () => {
    setTestimonialPage((prev) => (prev + 1) % totalPages)
  }

  const prevTestimonials = () => {
    setTestimonialPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d2d2d]">
      <PageLoader />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#f8f5f2]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium">
            EMIL DONCHEV
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-black/70 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-black/70 transition-colors">
              ABOUT
            </Link>
            <Link href="https://medium.com/@aemd2donchev" className="text-sm font-medium hover:text-black/70 transition-colors">
              BLOG
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <h1
              className={`text-7xl md:text-8xl font-bold mb-8 leading-tight transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Emil Donchev
            </h1>
            <p
              className={`text-xl md:text-2xl text-black/70 mb-6 transition-all duration-500 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              PRODUCT DESIGNER BASED IN PLOVDIV, BULGARIA
            </p>
            <p
              className={`text-xl md:text-2xl text-black/70 transition-all duration-500 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Experienced Product Designer with a strong focus on user-centric design and problem-solving. I create
              scalable, user-centric solutions that address real business needs.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-6 mb-24">
          <AnimatedTestimonials testimonials={testimonials} />
        </section>

        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project) => (
              <AnimatedProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug}
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallProjects.map((project) => (
              <AnimatedSmallProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                logo={project.logo}
                slug={project.slug}
              />
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-black/10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-black/70">© 2025 Emil Donchev. All rights reserved.</div>
            <div className="flex items-center space-x-6">
              <Link href="https://twitter.com" className="text-black/70 hover:text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://dribbble.com" className="text-black/70 hover:text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
                <span className="sr-only">Dribbble</span>
              </Link>
              <Link href="https://linkedin.com" className="text-black/70 hover:text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

