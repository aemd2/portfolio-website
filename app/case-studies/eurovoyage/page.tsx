"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ImageWithLoader } from "@/components/image-with-loader"
import { SVGLoader } from "@/components/svg-loader"
import { VideoPlayer } from "@/components/video-player"
import { Header } from "@/components/ui/header"

// Add these types at the top of the file, after the imports
interface MediaItem {
  type: 'video' | 'image'
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

interface ProcessPhase {
  title: string
  description: string
  media?: MediaItem[]
  image?: string
  deliverables: string[]
}

interface CaseStudy {
  title: string
  subtitle: string
  description: string
  coverImage: string
  metrics: Array<{
    label: string
    value: string
    description: string
  }>
  overview: {
    client: string
    timeline: string
    role: string
    team: string
    platform: string
    tools: string
  }
  problem: {
    statement: string
    goals: string[]
  }
  research: {
    methods: Array<{
      title: string
      count: string
      insights: string
    }>
    keyFindings: string[]
  }
  process: ProcessPhase[]
  results: {
    metrics: Array<{
      label: string
      before: string
      after: string
      improvement: string
    }>
  }
  learnings: string[]
  nextProject: {
    title: string
    slug: string
  }
  svgContent: Record<string, string>
}

export default function EurovoyageCaseStudy() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isContentVisible, setIsContentVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setIsContentVisible(true)
      }, 100)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Don't render anything until mounted (client-side)
  if (!mounted) {
    return null
  }

  // Case study data
  const caseStudy: CaseStudy & { svgContent: { [key: string]: string } } = {
    title: "Eurovoyage",
    subtitle: "Premium European Restaurant & Attraction Directory",
    description:
      "A curated premium directory platform showcasing the finest restaurants and attractions across Europe, designed to help travelers discover authentic local experiences. Starting with a focused premium product to establish quality and brand value.",
    coverImage: "/eurovoyage/galaxy-tab-s8-ultra.png",

    // Inline SVG content mapping for marketing steps to bypass file loading issues
    svgContent: {
      "/Eurovoyage/marketing-step1-social-media.svg": `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <style>
          .icon { font-size: 24px; font-family: sans-serif; fill: #2d2d2d; }
          .arrow { stroke: #2d2d2d; stroke-width: 1.5; fill: none; }
          .brand { fill: #e6007e; font-weight: bold; font-size: 16px; font-family: sans-serif; }
          .text { font-size: 10px; font-family: sans-serif; fill: #555; }
        </style>

        <!-- Twitter Icon (Simplified X) -->
        <text x="15" y="45" class="icon">X</text>
        <!-- Facebook Icon (Simplified F) -->
        <text x="15" y="75" class="icon" font-weight="bold">f</text>

        <!-- Arrows -->
        <polyline points="40,40 70,50" class="arrow" marker-end="url(#arrowhead)" />
        <polyline points="40,70 70,50" class="arrow" marker-end="url(#arrowhead)" />

        <!-- Eurovoyage Target -->
        <rect x="80" y="35" width="100" height="30" rx="5" ry="5" fill="#f8f5f2" stroke="#ccc" />
        <text x="90" y="55" class="brand">Eurovoyage</text>

        <!-- Description -->
        <text x="10" y="95" class="text">1. Social Media Engagement</text>

        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2d2d2d" />
          </marker>
        </defs>
      </svg>`,

      "/Eurovoyage/marketing-step2-website.svg": `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <style>
          .browser-bar { fill: #e0e0e0; }
          .browser-window { fill: #f8f5f2; stroke: #ccc; }
          .content { fill: #d3d3d3; }
          .text { font-size: 10px; font-family: sans-serif; fill: #555; }
          .title { font-size: 14px; font-family: sans-serif; fill: #2d2d2d; font-weight: bold; text-anchor: middle; }
          .dot { fill: #bbb; }
        </style>

        <!-- Browser Frame -->
        <rect x="10" y="10" width="180" height="80" rx="5" ry="5" class="browser-window" />
        <rect x="10" y="10" width="180" height="15" class="browser-bar" rx="5" ry="5" style="stroke-width:0; border-bottom-left-radius: 0; border-bottom-right-radius: 0;"/>
        <circle cx="20" cy="17.5" r="3" class="dot"/>
        <circle cx="30" cy="17.5" r="3" class="dot"/>
        <circle cx="40" cy="17.5" r="3" class="dot"/>

        <!-- Simplified Page Content -->
        <text x="100" y="40" class="title">Eurovoyage</text>
        <rect x="25" y="50" width="150" height="15" class="content" />
        <rect x="25" y="70" width="100" height="10" class="content" />

        <!-- Description -->
        <text x="10" y="95" class="text">2. Website Landing Page</text>
      </svg>`,

      "/Eurovoyage/marketing-step3-submit.svg": `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <style>
          .browser-window { fill: #f8f5f2; stroke: #ccc; }
          .content { fill: #d3d3d3; }
          .button { fill: #e6007e; rx: 3; ry: 3; }
          .button-text { fill: #fff; font-size: 12px; font-family: sans-serif; text-anchor: middle; font-weight: bold; }
          .text { font-size: 10px; font-family: sans-serif; fill: #555; }
          .highlight { stroke: #e6007e; stroke-width: 2; fill: none; }
        </style>

        <!-- Simplified Page Background -->
        <rect x="10" y="10" width="180" height="80" class="browser-window" />
        <rect x="30" y="25" width="140" height="10" class="content" />
        <rect x="30" y="40" width="100" height="8" class="content" />

        <!-- Submit Button -->
        <rect x="70" y="60" width="60" height="20" class="button" />
        <text x="100" y="74" class="button-text">Submit</text>

        <!-- Highlight / Focus -->
        <rect x="68" y="58" width="64" height="24" class="highlight" rx="5" ry="5" />

        <!-- Description -->
        <text x="10" y="95" class="text">3. Submit Button Engagement</text>
      </svg>`,

      "/Eurovoyage/marketing-step4-video.svg": `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <style>
          .player-body { fill: #f8f5f2; stroke: #ccc; }
          .screen { fill: #eee; }
          .play-button { fill: #2d2d2d; }
          .text { font-size: 10px; font-family: sans-serif; fill: #555; }
        </style>

        <!-- Video Player Body -->
        <rect x="40" y="15" width="120" height="65" rx="5" ry="5" class="player-body" />
        <rect x="45" y="20" width="110" height="50" class="screen" />

        <!-- Play Button -->
        <polygon points="95,45 110,52.5 95,60" class="play-button" />

        <!-- Description -->
        <text x="10" y="95" class="text">4. Explanatory Video Content</text>
      </svg>`,

      "/Eurovoyage/marketing-step5-payment.svg": `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <style>
          .card { fill: #f8f5f2; stroke: #ccc; rx: 4; ry: 4; }
          .header { fill: #e0e0e0; }
          .line { fill: #d3d3d3; }
          .text { font-size: 10px; font-family: sans-serif; fill: #555; }
          .plan { font-size: 12px; font-family: sans-serif; fill: #2d2d2d; text-anchor: middle; }
          .price { font-size: 14px; font-family: sans-serif; fill: #e6007e; font-weight: bold; text-anchor: middle; }
        </style>

        <!-- Simplified Pricing Cards -->
        <!-- Card 1 -->
        <rect x="15" y="20" width="50" height="60" class="card" />
        <text x="40" y="35" class="plan">Basic</text>
        <rect x="25" y="45" width="30" height="5" class="line" />
        <rect x="25" y="55" width="30" height="5" class="line" />
        <text x="40" y="75" class="price">$10</text>

        <!-- Card 2 -->
        <rect x="75" y="20" width="50" height="60" class="card" />
        <text x="100" y="35" class="plan">Premium</text>
        <rect x="85" y="45" width="30" height="5" class="line" />
        <rect x="85" y="55" width="30" height="5" class="line" />
        <text x="100" y="75" class="price">$25</text>

        <!-- Card 3 -->
        <rect x="135" y="20" width="50" height="60" class="card" />
        <text x="160" y="35" class="plan">Pro</text>
        <rect x="145" y="45" width="30" height="5" class="line" />
        <rect x="145" y="55" width="30" height="5" class="line" />
        <text x="160" y="75" class="price">$50</text>

        <!-- Description -->
        <text x="10" y="95" class="text">5. Payment & Subscription Plans</text>
      </svg>`
    },

    metrics: [
      {
        label: "Target Users",
        value: "150K",
        description: "Monthly active users goal",
      },
      {
        label: "User Groups",
        value: "3",
        description: "Admin, Business Owners, Users",
      },
      {
        label: "Project Stage",
        value: "MVP",
        description: "Initial platform design completed",
      },
    ],

    overview: {
      client: "Eurovoyage (Startup)",
      timeline: "December 2024 - March 2025",
      role: "Product Designer",
      team: "Collaborated directly with the founder",
      platform: "Web Application",
      tools: "Figma, User Research, Business Strategy",
    },

    problem: {
      statement:
        "The ideas is for a easy scallable premuim bussnes taht offers a directory of premium restaurants and attractions across Europe.",
      goals: [
        "Design a premium platform focusing on high-end restaurants and attractions",
        "Create a business model starting with a core premium product",
        "Develop a scalable foundation for future product offerings",
        "Try to scalled it to 150k a montly users ",
      ],
    },

    research: {
      methods: [
        {
          title: "Content Analysis",
          count: "50+ videos",
          insights: "Analyzing influencer content to identify premium locations and experiences",
        },
        {
          title: "Technical Integration",
          count: "3 platforms",
          insights: "Testing integration between Google Places, Airtable, and Apify",
        },
        {
          title: "Data Pipeline",
          count: "2 workflows",
          insights: "Creating automated workflows for content collection and enrichment",
        },
      ],
      keyFindings: [
        "Influencer content provides high-quality location recommendations",
        "Automated data collection significantly reduces manual work",
        "Google Place ID ensures accurate location data",
        "Structured data pipeline enables scalable content growth",
      ],
    },

    process: [
      {
        title: "Strategic Direction",
        description:
          "The core strategy leverages existing content from influencers (bloggers, YouTubers, and content creators) who visit restaurants and destinations across Europe. We developed an efficient system where the founder identifies these locations from influencer content, processes them through Google Place ID, and stores them in Airtable. This data is then enriched using Apify to create comprehensive restaurant and destination templates. This approach allows Eurovoyage to benefit from established influencer traffic while building a valuable content database.",
        image: "/eurovoyage/strategy.svg",
        deliverables: [
          "Influencer content tracking system",
          "Google Place ID integration",
          "Airtable database structure",
          "Apify data enrichment pipeline"
        ],
      },
      {
        title: "Product Design",
        description:
          "I designed an elegant and intuitive interface that emphasizes the premium nature of the content. The design focuses on showcasing high-quality imagery and detailed information about each venue, while maintaining a clean and sophisticated aesthetic.",
        media: [
          {
            type: "video",
            src: "/Eurovoyage/2025-04-11 17-01-41.mp4",
            alt: "Product Design Walkthrough"
          }
        ],
        deliverables: ["User flows", "Wireframes", "UI design", "Interactive prototype"],
      },
      {
        title: "Marketing & Sales Strategy",
        description:
          "The marketing strategy targets premium users through curated social media campaigns on Twitter, and Facebook, driving traffic to the Eurovoyage website. The sales funnel guides users from initial awareness on these platforms to the website, then to a 'Submit' button for engagement, followed by video content explaining how the platform works, ultimately leading to payment and subscription plans.",
        media: [
          {
            type: "image",
            src: "/Eurovoyage/Group 6.png",
            alt: "Marketing and Sales Strategy Flow",
            width: 600,
            height: 400,
            className: "w-full max-w-[600px] mx-auto"
          }
        ],
        deliverables: [
          "Social media campaign strategy",
          "Sales funnel design",
          "Video content script",
          "Subscription plan structure"
        ]
      }
    ],

    results: {
      metrics: [
        {
          label: "Design Completion",
          before: "0%",
          after: "100%",
          improvement: "Completed",
        },
        {
          label: "Project Status",
          before: "In Progress",
          after: "Handed Over",
          improvement: "Left Project",
        },
        {
          label: "Documentation",
          before: "0%",
          after: "100%",
          improvement: "Complete",
        }
      ]
    },

    learnings: [
      "Improving the design through iterative feedback helped create a more intuitive and premium user experience",
      "Developing a focused marketing strategy across social media platforms is crucial for reaching the target audience",
      "Creating a clear sales funnel from awareness to conversion helps guide users through the journey effectively",
      "Premium market positioning requires consistent design language and high-quality visuals throughout all touchpoints",
      "Note: I left the project after completing the design phase and documentation. The final implementation and launch results are unknown to me."
    ],

    nextProject: {
      title: "Dream AI",
      slug: "Dream-Ai"
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
                  src={caseStudy.coverImage}
                  alt="Eurovoyage platform showcase"
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
                      <span className="text-black/70 mr-3">•</span>
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
                          <span className="text-black/70 mr-3">•</span>
                          <span className="text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-sm overflow-hidden border border-black/10">
                      {phase.media ? (
                        <div className="space-y-4 p-4 bg-white">
                          {phase.media.map((item, mediaIndex) => (
                            <div key={mediaIndex}>
                              {item.type === 'video' ? (
                                <VideoPlayer
                                  src={item.src}
                                  className="w-full aspect-video"
                                  autoPlay={false}
                                  controls={true}
                                />
                              ) : item.src.endsWith('.svg') ? (
                                <div className="w-full max-w-[600px] mx-auto" dangerouslySetInnerHTML={{ __html: caseStudy.svgContent[item.src.replace('/eurovoyage/', '/Eurovoyage/') as keyof typeof caseStudy.svgContent] || '<p>SVG content not found</p>' }} />
                              ) : (
                                <ImageWithLoader
                                  src={item.src.replace('/eurovoyage/', '/Eurovoyage/')}
                                  alt={item.alt}
                                  width={1200}
                                  height={600}
                                  className="w-full"
                                  priority={mediaIndex === 0}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      ) : phase.image ? (
                        phase.image.endsWith('.svg') ? (
                          <SVGLoader
                            src={phase.image}
                            alt={phase.title}
                            className="w-full h-[400px]"
                          />
                        ) : (
                          <ImageWithLoader
                            src={phase.image}
                            alt={phase.title}
                            width={1200}
                            height={600}
                            className="w-full"
                            priority={true}
                          />
                        )
                      ) : null}
                    </div>
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
    </div>
  )
} 