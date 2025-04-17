"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { ImageWithLoader } from "@/components/image-with-loader"
import { Header } from "@/components/ui/header"

export default function AfrikaCaseStudy() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentVisible, setIsContentVisible] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle slider drag
  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    
    // Get clientX for both mouse and touch events
    const clientX = 'touches' in e 
      ? (e as React.TouchEvent).touches[0].clientX 
      : (e as React.MouseEvent).clientX
    
    const position = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(0, position), 100))
  }

  const startSliderDrag = () => {
    if (!sliderRef.current) return
    
    const moveHandler = (e: MouseEvent | TouchEvent) => handleSliderMove(e as any)
    
    const stopHandler = () => {
      document.removeEventListener('mousemove', moveHandler)
      document.removeEventListener('touchmove', moveHandler)
      document.removeEventListener('mouseup', stopHandler)
      document.removeEventListener('touchend', stopHandler)
    }
    
    document.addEventListener('mousemove', moveHandler)
    document.addEventListener('touchmove', moveHandler)
    document.addEventListener('mouseup', stopHandler)
    document.addEventListener('touchend', stopHandler)
  }

  useEffect(() => {
    // Simulate loading time or actual data fetching
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setIsContentVisible(true)
      }, 100)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Case study data
  const caseStudy = {
    title: "Santos Creations Educational Foundation",
    subtitle: "Empowering African communities through digital innovation",
    description:
      "A comprehensive digital platform designed to connect and empower African communities, featuring cultural exchange, educational resources, and community engagement tools.",
    coverImage: "/Africa/Logo.png",

    metrics: [
      {
        label: "Community Reach",
        value: "10K+",
        description: "Active users across African countries",
      },
      {
        label: "Cultural Content",
        value: "1000+",
        description: "Cultural stories and resources shared",
      },
      {
        label: "User Engagement",
        value: "+85%",
        description: "Increase in community participation",
      },
    ],

    overview: {
      client: "Afrika Foundation",
      timeline: "November 2024 - March 2025",
      role: "UX/UI Designer",
      team: "Remote collaboration with African developers + two other designers and a product manager",
      platform: "Web Application",
      tools: "Figma, User Research, Design Systems",
    },

    problem: {
      statement:
        "The Santos foundation, which already established Nasa.africa, needed an additional platform focused on supporting educational programs and scholarships in Africa. They required a user-friendly website that would effectively facilitate donations for educational initiatives and scholarship programs while showcasing the impact of their work.",
      goals: [
        "Create a donation-focused platform that supports African educational programs",
        "Design intuitive user flows for scholarship applications and donations",
        "Build engaging content showcasing the impact of educational initiatives",
        "Develop transparent systems for tracking donations and scholarship allocations",
      ],
    },

    research: {
      methods: [
        {
          title: "Community Interviews",
          count: "2+ participants",
          insights: "Deep understanding of cultural needs and digital challenges",
        },
        {
          title: "SWOT Analysis",
          count: "10 session",
          insights: "Identified strengths, weaknesses, opportunities, and threats of the existing platform",
        },
        {
          title: "Usability Testing",
          count: "3 participants",
          insights: "Testing the existing platform and gathering feedback",
        },
      ],
      keyFindings: [
        "Users need a clear, transparent donation process with multiple payment options",
        "Scholarship applicants require a straightforward application flow with minimal steps",
        "Compelling impact stories and visual evidence increase donation likelihood",
        "Regular updates on fund allocation build trust and encourage recurring donations",
      ],
    },

    process: [
      {
        title: "Cultural Research & Design",
        description:
          "Working closely with the founder and product manager, I visualized the existing documentation into actionable design artifacts. Based on their detailed PRD and 6 additional requirement documents, I created comprehensive sitemaps and user flows that accurately represented their vision while optimizing for user experience.",
        image: "/Africa/Primary Sitemap.png",
        deliverables: ["Sitemap visualization", "User journey mapping", "Information architecture refinement", "Navigation system design"],
      },
      {
        title: "Community-Centered Design",
        description:
          "Through an iterative design process, I evolved the homepage design based on user feedback and testing. The side-by-side comparison shows the original concept (left) and the refined version 2 (right) with improved information hierarchy and clearer donation pathways.",
        image: "/placeholder.svg?height=600&width=1200",
        customImages: true as boolean,
        deliverables: ["User feedback implementation", "Iterative design process", "Improved UI components", "Enhanced donation flows"],
      },
      {
        title: "Accessibility Implementation",
        description:
          "I conducted an extensive accessibility audit and created multiple design iterations to ensure the platform was usable by everyone. The evolution from the initial design to the final version shows significant improvements in readability, contrast, and navigation patterns.",
        image: "/placeholder.svg?height=600&width=1200",
        multipleImages: true as boolean,
        deliverables: ["Accessibility guidelines", "Color contrast improvements", "Keyboard navigation", "Screen reader optimization"],
      }
    ],

    results: {
      metrics: [
        {
          label: "User Growth",
          before: "1,000 users",
          after: "10,000+ users",
          improvement: "+900%",
        },
        {
          label: "Content Sharing",
          before: "100 posts/month",
          after: "1,000+ posts/month",
          improvement: "+900%",
        },
        {
          label: "Community Events",
          before: "5 events/month",
          after: "50+ events/month",
          improvement: "+900%",
        }
      ]
    },

    learnings: [
      "Cultural authenticity is crucial for community adoption and engagement",
      "Offline-first design is essential for inclusive digital platforms in Africa",
      "Community involvement in the design process leads to more relevant solutions",
      "Visual and audio content are powerful tools for crossing language barriers",
    ],

    nextProject: {
      title: "Eurovoyage",
      slug: "eurovoyage"
    },
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d2d2d]">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f5f2]">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/10 border-t-black"></div>
            <p className="mt-4 text-sm text-black/70">Loading case study...</p>
          </div>
        </div>
      )}
      <Header />

      <main className="pt-24 pb-20">
        <article className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-black/70 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Link>

            {/* Hero Section */}
            <div className="mb-16">
              <h1
                className={`text-5xl md:text-6xl font-bold mb-4 leading-tight transition-all duration-500 ${
                  isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                {caseStudy.title}
              </h1>
              <p
                className={`text-2xl text-black/70 mb-8 transition-all duration-500 delay-100 ${
                  isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                {caseStudy.subtitle}
              </p>
              <p
                className={`text-xl text-black/70 transition-all duration-500 delay-200 ${
                  isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                {caseStudy.description}
              </p>
              <div 
                className={`mt-8 transition-all duration-500 delay-300 ${
                  isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <ImageWithLoader
                  src="/Africa/Group 239185.png"
                  alt="Afrika platform homepage showcasing cultural exchange and community features"
                  width={1200}
                  height={800}
                  className="w-full rounded-sm shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {caseStudy.metrics?.map((metric, index) => (
                <div
                  key={index}
                  className={`border border-black/10 rounded-sm p-6 bg-white transition-all duration-500 ${
                    isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <p className="text-4xl font-bold mb-2">{metric.value}</p>
                  <p className="font-medium mb-2">{metric.label}</p>
                  <p className="text-sm text-black/70">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* Project Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(caseStudy.overview).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm font-medium text-black/50 mb-1 uppercase">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Problem Statement */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Problem & Goals</h2>
              <div className="bg-white border border-black/10 rounded-sm p-8 mb-8">
                <p className="text-lg mb-6">{caseStudy.problem.statement}</p>
                <h3 className="font-bold mb-4">Project Goals</h3>
                <ul className="space-y-3">
                  {caseStudy.problem.goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Research */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Research & Discovery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {caseStudy.research.methods.map((method, index) => (
                  <div key={index} className="bg-white border border-black/10 rounded-sm p-6">
                    <h3 className="font-bold mb-2">{method.title}</h3>
                    <p className="text-sm text-black/70 mb-3">{method.count}</p>
                    <p className="text-sm">{method.insights}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-black/10 rounded-sm p-8">
                <h3 className="font-bold mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  {caseStudy.research.keyFindings.map((finding, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Design Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Design Process</h2>
              <div className="space-y-16">
                {caseStudy.process.map((phase, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold mb-4">
                      {index + 1}. {phase.title}
                    </h3>
                    <p className="mb-6">{phase.description}</p>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      {phase.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                          <span className="text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                    
                    {phase.customImages ? (
                      <>
                        <p className="text-sm text-center mb-4 text-black/70">
                          <span className="inline-block border border-black/10 rounded px-2 py-1 bg-white">
                            <span className="font-medium">↔️ Drag the slider</span> to compare the full length of both designs
                          </span>
                        </p>
                        <div 
                          className="relative aspect-[16/24] rounded-sm overflow-hidden border border-black/10 mb-2 min-h-[600px]"
                          ref={sliderRef}
                          onMouseDown={startSliderDrag}
                          onTouchStart={startSliderDrag}
                        >
                          {/* Before Image (Original) */}
                          <div className="absolute inset-0">
                            <ImageWithLoader
                              src="/Africa/Africa home page.png"
                              alt="Original landing page design"
                              width={1200}
                              height={600}
                              className="object-contain object-top"
                            />
                          </div>
                          
                          {/* After Image (Refined) - clipped by slider */}
                          <div 
                            className="absolute inset-0 overflow-hidden" 
                            style={{ width: `${sliderPosition}%` }}
                          >
                            <div style={{ 
                              width: `${100 / (sliderPosition/100)}%`,
                              maxWidth: sliderPosition > 0 ? 'none' : '100%',
                              height: '100%',
                              position: 'relative'
                            }}>
                              <ImageWithLoader
                                src="/Africa/Landing page.png"
                                alt="Revised landing page design"
                                width={1200}
                                height={600}
                                className="object-contain object-top"
                              />
                            </div>
                          </div>
                          
                          {/* Slider control */}
                          <div 
                            className="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-ew-resize"
                            style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
                            onMouseDown={startSliderDrag}
                            onTouchStart={startSliderDrag}
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                              <div className="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          {/* Labels */}
                          <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs py-1 px-2 rounded">
                            Final Design
                          </div>
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs py-1 px-2 rounded">
                            Original Concept
                          </div>
                        </div>
                      </>
                    ) : phase.multipleImages ? (
                      <div className="space-y-6">
                        <p className="text-sm text-center mb-4 text-black/70">
                          <span className="inline-block border border-black/10 rounded px-2 py-1 bg-white">
                            Design evolution through multiple iterations
                          </span>
                        </p>
                        
                        {/* First row - Initial Design to Version 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          <div className="flex flex-col">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-black/10 mb-2">
                              <ImageWithLoader
                                src="/Africa/old design.png"
                                alt="Initial design version"
                                width={1200}
                                height={900}
                                className="object-contain object-top"
                              />
                            </div>
                            <p className="text-sm text-center font-medium">Initial Design</p>
                            <p className="text-xs text-center mt-1 text-black/70">Initial prototype with basic functionality but poor accessibility.</p>
                          </div>
                          <div className="flex flex-col">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-black/10 mb-2">
                              <ImageWithLoader
                                src="/Africa/design verson 2.png"
                                alt="Second design iteration"
                                width={1200}
                                height={900}
                                className="object-contain object-top"
                              />
                            </div>
                            <p className="text-sm text-center font-medium">Version 2</p>
                            <p className="text-xs text-center mt-1 text-black/70">Improved spacing and hierarchy, add sign in user flow, sign up and forgotten password Created the user flow for donation and schoolership.</p>
                          </div>
                          <div className="flex flex-col">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-black/10 mb-2">
                              <ImageWithLoader
                                src="/Africa/design verson 3 improvemnt.png"
                                alt="Third design iteration"
                                width={1200}
                                height={900}
                                className="object-contain object-top"
                              />
                            </div>
                            <p className="text-sm text-center font-medium">Version 3</p>
                            <p className="text-xs text-center mt-1 text-black/70">Refine the user flow for donation and scholarship, as make it more easy and add all the policies, terms and conditions and add Caledry.</p>
                          </div>
                        </div>
                        
                        {/* Second row - Version 4 and Final Version */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-black/10 mb-2">
                              <ImageWithLoader
                                src="/Africa/design verson 4 improvemnt.png"
                                alt="Fourth design iteration"
                                width={1200}
                                height={900}
                                className="object-contain object-top"
                              />
                            </div>
                            <p className="text-sm text-center font-medium">Version 4</p>
                            <p className="text-xs text-center mt-1 text-black/70">Created the 13 dahbords for the admin and the all group of users.</p>
                          </div>
                          <div className="flex flex-col">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-black/10 mb-2 bg-green-50">
                              <ImageWithLoader
                                src="/Africa/Africa home page.png"
                                alt="Final improved design - homepage"
                                width={1200}
                                height={600}
                                className="object-contain object-top"
                              />
                            </div>
                            <p className="text-sm text-center font-medium">Final Version</p>
                            <p className="text-xs text-center mt-1 text-black/70">Improve the home page design and add animation and diffrent effects.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-sm overflow-hidden">
                      <ImageWithLoader
                        src={phase.image}
                        alt={phase.title}
                          width={1200}
                          height={600}
                          className="w-full"
                      />
                    </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {caseStudy.results.metrics.map((metric, index) => (
                  <div key={index} className="bg-white border border-black/10 rounded-sm p-6">
                    <h3 className="font-bold mb-4">{metric.label}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-black/70">Before</span>
                      <span className="font-medium">{metric.before}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-black/70">After</span>
                      <span className="font-medium">{metric.after}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-black/10">
                      <span className="text-sm text-black/70">Improvement</span>
                      <span className="font-medium text-green-600">{metric.improvement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Learnings */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
              <div className="bg-white border border-black/10 rounded-sm p-8">
                <ul className="space-y-4">
                  {caseStudy.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Next Project */}
            <div className="border-t border-black/10 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-black/70">Next Case Study</p>
                <Link
                  href={`/case-studies/${caseStudy.nextProject.slug}`}
                  className="group inline-flex items-center font-medium hover:text-black/70 transition-colors"
                >
                  {caseStudy.nextProject.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </article>
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



