"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { ImageWithLoader } from "@/components/image-with-loader"
import { ImageCarousel } from "@/components/image-carousel"
import { CaptionedCarousel } from "../../../components/captioned-carousel"
import { PhoneMockup } from "@/components/phone-mockup"

interface MediaItem {
  src: string
  alt: string
  type: "image" | "video"
  caption: string
  description: string
  details?: string
}

interface ProcessPhase {
  title: string
  description: string
  media: MediaItem[]
  deliverables: string[]
}

interface Feature {
  title: string
  description: string
  media: MediaItem
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
  overview: Record<string, string>
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
}

export default function AiHrDashboardCaseStudy() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentVisible, setIsContentVisible] = useState(false)

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
  const caseStudy: CaseStudy = {
    title: "CDF Internal Platform",
    subtitle: "Internal Enterprise Platform for Community Dreams Foundation",
    description:
      "As the sole designer working alongside 20 engineers, I designed three critical user flows for Community Dreams Foundation's internal enterprise platform. This confidential internal product streamlines operations across HR, volunteer coordination, and team leadership.",
    coverImage: "/cdf/logo-dark.png",

    metrics: [
      {
        label: "Internal Users",
        value: "2200+",
        description: "Staff members using the platform daily",
      },
      {
        label: "Teams",
        value: "60+",
        description: "Cross-functional teams supported all around the world",
      },
      {
        label: "Processes",
        value: "35+",
        description: "Internal workflows optimized",
      },
    ],

    overview: {
      client: "Community Dreams Foundation (Internal)",
      timeline: "4 months (2023)",
      role: "Lead Product Designer",
      team: "20 engineers, 2 Product Owners, 1 Founder",
      platform: "Internal Web Application",
      tools: "Figma, FigJam, Click Up and Airtable",
    },

    problem: {
      statement:
        "Community Dreams Foundation experienced rapid global expansion, growing to over 2200 staff members across 60+ teams worldwide. The traditional hiring processes couldn't keep up with this scale, leading to inefficiencies and missed opportunities. The organization needed an AI-powered solution to revolutionize their hiring process while ensuring their unique culture and values remained central to candidate selection.",
      goals: [
        "Implement AI-driven candidate screening and matching for high-volume hiring",
        "Reduce time-to-hire while maintaining quality of cultural fit",
        "Create automated workflows for HR teams across different regions",
        "Build analytics dashboard for data-driven hiring decisions",
        "Ensure ethical AI implementation in the hiring process",
      ],
    },

    research: {
      methods: [
        {
          title: "HR Process Analysis",
          count: "3 interviews",
          insights: "Mapped current hiring workflows and identified AI opportunities",
        },
        {
          title: "AI Ethics Workshop",
          count: "5 sessions",
          insights: "Developed guidelines for ethical AI use in hiring",
        },
        {
          title: "Data Assessment",
          count: "6 months",
          insights: "Analyzed historical hiring data to train AI models",
        },
      ],
      keyFindings: [
        "Manual screening was taking 70% of HR team's time",
        "Cultural fit assessment needed human expertise but could be AI-assisted",
        "Different regions had varying hiring requirements and compliance needs",
        "Data quality was crucial for AI model accuracy" ,
        "Using AI for screening and matching candidates, can save 90% of the time",
        "The platform can offer more than 1000 jobs at every month",
      ],
    },

    process: [
      {
        title: "Website Architecture & Sitemap",
        description:
          "Created a comprehensive sitemap organizing the platform into seven key sections, each with specific functionalities and user flows. The architecture supports both informational content and complex operational features like volunteer management and project tracking.",
        media: [
          {
            src: "/Dream-ai/Primary Sitemap.png",
            alt: "Website Architecture Diagram",
            type: "image",
            caption: "Primary Sitemap",
            description: "Comprehensive sitemap showing platform organization",
            details: `
              <h3>Key Sections</h3>
              <ul>
                <li>Primary Homepage with feature highlights</li>
                <li>Seven major operational sections</li>
                <li>Integrated support sections</li>
                <li>User journey mapping</li>
              </ul>
            `
          },
          {
            src: "/Dream-ai/Firsr design Home.png",
            alt: "Homepage Initial Design",
            type: "image",
            caption: "Homepage Wireframe",
            description: "Initial homepage design showcasing key sections and user flow",
            details: `
              <h3>Homepage Sections</h3>
              <ul>
                <li>Hero section with volunteer engagement focus</li>
                <li>Community impact showcase</li>
                <li>Volunteer opportunities</li>
                <li>Testimonials and feedback</li>
                <li>Team showcase</li>
                <li>FAQ section</li>
                <li>Newsletter signup</li>
                <li>Contact information</li>
              </ul>
            `
          }
        ],
        deliverables: [
          "Primary Homepage with feature highlights and navigation",
          "Seven major operational sections",
          "Integrated support and information sections",
          "User journey mapping across all sections"
        ]
      },
      {
        title: "HR AI User Flow",
        description:
          "Designed an intuitive workflow for HR managers and administrators to efficiently manage the candidate screening and selection process. The system leverages AI to streamline candidate evaluation while maintaining human oversight for critical decisions.",
        media: [
          {
            src: "/Dream-ai/User-flow-HR.mp4",
            alt: "HR AI User Flow Demo",
            type: "video",
            caption: "HR Management System Flow",
            description: "Interactive walkthrough of the HR management system showing candidate screening, evaluation, and team leader assignment process",
            details: `
              <h3>Key Features Demonstrated</h3>
              <ul>
                <li>AI-powered candidate screening dashboard</li>
                <li>Automated skill matching and ranking</li>
                <li>Team leader assignment workflow</li>
                <li>Application status tracking</li>
                <li>Candidate evaluation metrics</li>
                <li>Automated communication system</li>
                <li>Multi-level approval process</li>
                <li>Integration with team management</li>
              </ul>
              <h3>Benefits</h3>
              <ul>
                <li>Streamlined HR workflow with AI assistance</li>
                <li>Reduced manual screening time by 78%</li>
                <li>Improved candidate-role matching accuracy</li>
                <li>Enhanced collaboration between HR and team leaders</li>
              </ul>
            `
          }
        ],
        deliverables: [
          "AI-powered candidate screening system",
          "Automated skill matching algorithm",
          "Team leader assignment workflow",
          "Integrated communication system",
          "Performance analytics dashboard"
        ]
      },
      {
        title: "Volunteer Quick-Match Flow",
        description:
          "Developed a streamlined volunteer onboarding and job matching system that allows potential volunteers to quickly find and apply for opportunities that match their skills and interests. The focus is on making the process as simple and efficient as possible.",
        media: [
          {
            src: "/Dream-ai/User-flow-Volunteer.mp4",
            alt: "Volunteer Quick-Match Flow Demo",
            type: "video",
            caption: "Volunteer Onboarding & Job Matching",
            description: "Demonstration of the quick and intuitive volunteer registration and job matching process",
            details: `
              <h3>Key Features Demonstrated</h3>
              <ul>
                <li>One-step registration process</li>
                <li>Smart job recommendations</li>
                <li>Quick apply functionality</li>
                <li>Skills-based matching</li>
                <li>Real-time opportunity updates</li>
                <li>Instant application tracking</li>
                <li>Personalized dashboard</li>
                <li>Mobile-optimized experience</li>
              </ul>
              <h3>User Benefits</h3>
              <ul>
                <li>Find relevant opportunities in under 2 minutes</li>
                <li>No complex forms or lengthy processes</li>
                <li>Immediate access to available positions</li>
                <li>Clear status updates on applications</li>
              </ul>
            `
          }
        ],
        deliverables: [
          "Simplified volunteer registration",
          "AI-powered job matching system",
          "One-click application process",
          "Real-time status tracking",
          "Mobile-responsive interface"
        ]
      },
      {
        title: "Team Leader Task Management Flow",
        description:
          "Designed an intelligent task management system that enables team leaders to efficiently assign work and automatically convert unassigned tasks into job postings. This innovative approach ensures no task goes uncovered while expanding the volunteer pool as needed.",
        media: [
          {
            src: "/Dream-ai/User-flow-Team-leader.mp4",
            alt: "Team Leader Workflow Demo",
            type: "video",
            caption: "Team Task Management System",
            description: "Demonstration of the team leader interface for task management and automatic job posting creation",
            details: `
              <h3>Key Features Demonstrated</h3>
              <ul>
                <li>Intuitive task creation and assignment</li>
                <li>Team capacity monitoring</li>
                <li>Automatic job posting conversion</li>
                <li>Skill requirement mapping</li>
                <li>Resource allocation overview</li>
                <li>Team performance tracking</li>
                <li>Priority-based task management</li>
                <li>Integrated volunteer matching</li>
              </ul>
              <h3>Workflow Benefits</h3>
              <ul>
                <li>Seamless transition from tasks to job postings</li>
                <li>Real-time team capacity insights</li>
                <li>Automated skill-based matching</li>
                <li>Reduced task allocation time</li>
                <li>Improved resource utilization</li>
              </ul>
            `
          }
        ],
        deliverables: [
          "Dynamic task management interface",
          "Automated job posting generation",
          "Team capacity monitoring system",
          "Skill-based task allocation",
          "Resource optimization dashboard"
        ]
      },
    ],

    results: {
      metrics: [
        {
          label: "Screening Time",
          before: "45 min/candidate",
          after: "10 min/candidate",
          improvement: "-78%",
        },
        {
          label: "Quality of Hire",
          before: "75% fit",
          after: "92% fit",
          improvement: "+23%",
        },
        {
          label: "Time to Hire",
          before: "45 days",
          after: "15 days",
          improvement: "-67%",
        },
        {
          label: "System Response Time",
          before: "2.5 seconds",
          after: "0.5 seconds",
          improvement: "-80%",
        },
        {
          label: "Task Assignment Speed",
          before: "15 minutes",
          after: "3 minutes",
          improvement: "-80%",
        },
        {
          label: "Job Posting Creation",
          before: "30 minutes",
          after: "5 minutes",
          improvement: "-83%",
        }
      ]
    },

    learnings: [
      "AI must be carefully tuned to avoid bias in the hiring process",
      "Human oversight remains crucial for maintaining ethical standards",
      "Data quality and regular model retraining are essential",
      "Cultural fit can be quantified but requires careful consideration",
    ],

    nextProject: {
      title: "Afrika App",
      slug: "Afrika"
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
            <Link href="/blog" className="text-sm font-medium hover:text-black/70 transition-colors">
              BLOG
            </Link>
            <Link href="/cv" className="text-sm font-medium hover:text-black/70 transition-colors">
              CV
            </Link>
          </nav>
        </div>
      </header>

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
                  src="/Dream-ai/MacBook13.png"
                  alt="MacBook showing Dream AI platform interface"
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
              )) || null}
            </div>

            {/* Project Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(caseStudy.overview || {}).map(([key, value]) => (
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
                  {caseStudy.problem?.goals?.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  )) || null}
                </ul>
              </div>
            </section>

            {/* Research */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Research & Discovery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {caseStudy.research?.methods?.map((method, index) => (
                  <div key={index} className="bg-white border border-black/10 rounded-sm p-6">
                    <h3 className="font-bold mb-2">{method.title}</h3>
                    <p className="text-sm text-black/70 mb-3">{method.count}</p>
                    <p className="text-sm">{method.insights}</p>
                  </div>
                )) || null}
              </div>
              <div className="bg-white border border-black/10 rounded-sm p-8">
                <h3 className="font-bold mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  {caseStudy.research?.keyFindings?.map((finding, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>{finding}</span>
                    </li>
                  )) || null}
                </ul>
              </div>
            </section>

            {/* Design Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Design Process</h2>
              <div className="bg-white border border-black/10 rounded-sm p-8 mb-8">
                <div className="space-y-16">
                  {caseStudy.process?.map((phase, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold mb-4">
                        {index + 1}. {phase.title}
                      </h3>
                      <p className="mb-6">{phase.description}</p>
                      <div className="mb-8">
                        <CaptionedCarousel 
                          media={phase.media} 
                          height={600}
                          priority={index === 0}
                        />
                      </div>
                      <div className="mt-8">
                        <h4 className="font-bold mb-4">Deliverables</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {phase.deliverables?.map((deliverable, i) => (
                            <div key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {caseStudy.results?.metrics?.map((metric, index) => (
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
                )) || null}
              </div>
            </section>

            {/* Key Learnings */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
              <div className="bg-white border border-black/10 rounded-sm p-8">
                <ul className="space-y-4">
                  {caseStudy.learnings?.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>{learning}</span>
                    </li>
                  )) || null}
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

