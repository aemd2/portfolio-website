"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { ImageWithLoader } from "@/components/image-with-loader"
import { ImageCarousel } from "@/components/image-carousel"
import { CaptionedCarousel } from "@/components/captioned-carousel"
import { PhoneMockup } from "@/components/phone-mockup"

interface CaseStudyParams {
  params: {
    slug: string
  }
}

// Explicitly type the component with React.FC
const CaseStudyPage: React.FC<CaseStudyParams> = ({ params }) => {
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

  // In a real application, you would fetch the case study data based on the slug
  const caseStudy = {
    title: "Pen Pal Magic App",
    subtitle: "Creating and improving existing web app to mobile one",
    description:
      "A mobile application designed for Murphy Charitable Foundation Uganda to facilitate meaningful connections between vulnerable children in Uganda and international pen pals, improving emotional well-being and educational outcomes.",
    coverImage: "/placeholder.svg?height=800&width=1600",

    metrics: [
      {
        label: "User Impact",
        value: "2000+",
        description: "Children in Uganda using the app",
      },
      {
        label: "Letter Completion",
        value: "+32%",
        description: "Improvement in correspondence rates",
      },

      {
        label: "Response Time",
        value: "6x",
        description: "Communication cycle improvement",
      },
    ],

    overview: {
      client: "Murphy Charitable Foundation Uganda",
      timeline: "6 months (2023)",
      role: "Product Designer",
      team: "2 designers (Emil,Sara), development team and PM (Rez)",
      platform: "iOS",
      tools: "Figma, Principle, UserTesting,Maze",
    },

    problem: {
      statement:
        "Vulnerable children in Uganda, including orphans and those living in poverty, lacked meaningful connections to the outside world. The foundation's existing pen pal program faced logistical challenges with physical letter delivery and maintaining consistent communication.",
      goals: [
        "Create a digital platform to serve 2000+ children in Uganda",
        "Reduce correspondence abandonment rates",
        "Make the conenction between the chidren and the pen pals more engaging and meaningful",
      ],
    },

    research: {
      methods: [
        {
          title: "User Interviews",
          count: "60 participants",
          insights: "Children wanted simpler and more engaging ways to communicate with pen pals",
        },
        {
          title: "Field Research",
          count: "5 regions in Uganda",
          insights: "Limited technology access - one device shared among 12 children",
        },
        {
          title: "Program Analysis",
          count: "6 months of data",
          insights: "Need for secure payments for sponsors while protecting children's privacy",
        },
      ],
      keyFindings: [
        "Physical letter delivery was inconsistent and delayed meaningful connections",
        "Children needed secure ways to connect with sponsors while maintaining privacy and protection",
        "Sponsorship payment system needed to be integrated while keeping children's data secure",
        "Solution required working with limited internet access (one device per 12 children)",
        "Visual sharing of daily life was highly valued by both Ugandan children and international pen pals",
      ],
    },

    // Combined design process with all phases in one carousel
    designProcess: {
      title: "Research & Design Process",
      description: "Our comprehensive approach included extensive user testing with children in Uganda, focusing on language accessibility and ease of use. We conducted multiple testing phases to validate our design decisions and ensure the app would work effectively for both children and their guardians.",
      media: [
        // Research Phase
        {
          src: "/pen-pal-images/Екранна снимка 2025-04-02 180854.png",
          alt: "Initial Research Planning",
          type: "image" as const,
          phase: "Research",
          section: "Research Planning",
          caption: "Initial Research Framework",
          description: "Planning document outlining research objectives and methodology",
          details: `
            <h3>Research Objectives</h3>
            <ul>
              <li>Understand how children interact with digital tools</li>
              <li>Evaluate language barriers and accessibility needs</li>
              <li>Assess guardian involvement in technology use</li>
            </ul>
            <h3>Key Questions</h3>
            <ul>
              <li>How do children interact with penpal tech?</li>
              <li>Will there always be an adult (tutor/guardian) present?</li>
              <li>What's the pre-requisite for children to participate?</li>
            </ul>
          `
        },
        {
          src: "/pen-pal-images/Екранна снимка 2025-04-02 180914.png",
          alt: "Research Methodology",
          type: "image" as const,
          phase: "Research",
          section: "Research Methodology",
          caption: "Testing Structure & Approach",
          description: "Detailed testing methodology and participant groups",
          details: `
            <h3>Testing Structure</h3>
            <ul>
              <li>Individual sessions with children</li>
              <li>Guardian/tutor assistance available</li>
              <li>Mixed language testing (English & Local)</li>
              <li>Video recording for analysis</li>
            </ul>
            <h3>Pre-Testing Preparation</h3>
            <ul>
              <li>Explain internet concepts</li>
              <li>Introduce digital vs physical letters</li>
              <li>Obtain recording consent</li>
              <li>Setup screen sharing</li>
            </ul>
          `
        },
        {
          src: "/pen-pal-images/Екранна снимка 2025-04-02 180928.png",
          alt: "Research Findings",
          type: "image" as const,
          phase: "Research",
          section: "Research Findings",
          caption: "Initial Research Results",
          description: "Analysis of key findings from initial research phase",
          details: `
            <h3>Key Findings</h3>
            <ul>
              <li>Adult supervision is crucial for technology use</li>
              <li>Language barriers affect initial understanding</li>
              <li>Visual guides are more effective than text</li>
              <li>Need for simplified technical terminology</li>
            </ul>
          `
        },
        // Design Phase
        {
          src: "/pen-pal-images/Екранна снимка 2025-04-02 172902.png",
          alt: "Design Implementation",
          type: "image" as const,
          phase: "Design",
          section: "Design Implementation",
          caption: "User Flow & Interface Design",
          description: "Implementation of research findings into design",
          details: `
            <h3>Design Decisions</h3>
            <ul>
              <li>Simplified navigation structure</li>
              <li>Visual cues for important actions</li>
              <li>Multilingual support integration</li>
              <li>Guardian-assisted features</li>
            </ul>
          `
        },
        // Testing Phase
        {
          src: "/pen-pal-images/test 1.png",
          alt: "Initial Testing",
          type: "image" as const,
          phase: "Testing",
          section: "Test Phase 1",
          caption: "First Round Testing",
          description: "Initial user testing with basic prototype",
          details: `
            <h3>Test Group A: English Onboarding Video</h3>
            <ul>
              <li>Objective: Open and reply to letters</li>
              <li>Method: Video instruction followed by hands-on testing</li>
              <li>Results: Some confusion, multiple questions asked</li>
            </ul>
          `
        },
        {
          src: "/pen-pal-images/test 2.png",
          alt: "Second Testing Phase",
          type: "image" as const,
          phase: "Testing",
          section: "Test Phase 2",
          caption: "Second Round Testing",
          description: "Testing with improved prototype based on initial feedback",
          details: `
            <h3>Test Group B: Local Language Video</h3>
            <ul>
              <li>Objective: Evaluate local language effectiveness</li>
              <li>Method: Localized video instruction</li>
              <li>Results: Similar confusion levels to English version</li>
            </ul>
          `
        },
        {
          src: "/pen-pal-images/test 3.png",
          alt: "Third Testing Phase",
          type: "image" as const,
          phase: "Testing",
          section: "Test Phase 3",
          caption: "Third Round Testing",
          description: "Testing with integrated tips and guidance",
          details: `
            <h3>Test Group C: English Tips Integration</h3>
            <ul>
              <li>Objective: Test in-app guidance effectiveness</li>
              <li>Method: Interactive tips during use</li>
              <li>Results: Smoothest experience, minimal confusion</li>
            </ul>
          `
        },
        {
          src: "/pen-pal-images/test 4.png",
          alt: "Final Testing Phase",
          type: "image" as const,
          phase: "Testing",
          section: "Test Phase 4",
          caption: "Final Testing Round",
          description: "Comprehensive testing with all improvements",
          details: `
            <h3>Test Group D: Local Language Tips</h3>
            <ul>
              <li>Objective: Validate localized guidance</li>
              <li>Method: Interactive tips in local language</li>
              <li>Results: Effective but not significantly better than English tips</li>
            </ul>
          `
        }
      ],
      deliverables: [
        "Comprehensive research findings",
        "User testing analysis across all phases",
        "Design implementation recommendations",
        "Onboarding strategy documentation",
        "Language accessibility guidelines",
        "Guardian assistance protocols",
        "Final implementation plan"
      ]
    },

    // Keep the process array for backwards compatibility if needed
    process: [
      {
        title: "Discovery & Field Research",
        description:
          "Conducted on-site research in Uganda, interviewed children and program coordinators, and analyzed the existing pen pal program to understand user needs and constraints.",
        images: [
          {
            src: "/placeholder.svg?height=600&width=1200",
            alt: "Field research in Uganda"
          },
          {
            src: "/placeholder.svg?height=600&width=1200",
            alt: "Interviewing program participants"
          },
          {
            src: "/placeholder.svg?height=600&width=1200",
            alt: "Analyzing the existing program"
          }
        ],
        deliverables: ["Field research insights", "User requirements", "Personas", "Journey maps"],
      },
      {
        title: "Solution Architecture",
        description:
          "Designed a system that worked within the constraints of limited connectivity while providing a rich communication experience.",
        images: [
          {
            src: "/placeholder.svg?height=600&width=1200",
            alt: "Solution Architecture planning" 
          }
        ],
        deliverables: ["Technical requirements", "User flows", "Feature prioritization", "Communication model"],
      },
      {
        title: "Design Exploration",
        description:
          "Created low and high-fidelity wireframes optimized for both low-end devices and varying literacy levels.",
        images: [
          {
            src: "/placeholder.svg?height=600&width=1200",
            alt: "Design exploration wireframes"
          }
        ],
        deliverables: ["Wireframes", "Interactive prototypes", "Design system", "Component library"],
      },
      {
        title: "Testing & Iteration",
        description: "Conducted usability testing with children in Uganda and international pen pals to refine the experience.",
        images: [
          {
            src: "/placeholder.svg?height=600&width=1200",
            alt: "Usability testing sessions"
          }
        ],
        deliverables: ["Usability test results", "Iteration documentation", "Final designs", "Implementation specs"],
      },
    ],

    solution: {
      title: "Key Solutions",
      description: "Based on our research and testing, we developed two key features to address the main communication challenges faced by the children.",
      keyFeatures: [
        {
          title: "Voice Mail Communication",
          description: "An innovative voice messaging system that allows children to communicate naturally with their pen pals, overcoming language and literacy barriers.",
          media: {
            src: "/pen-pal-images/2025-04-02 17-24-06.mp4",
            alt: "Voice Mail Feature Demo",
            type: "video" as const,
            caption: "Voice Mail Communication Feature",
            description: "Demonstration of how children can send voice messages to their pen pals",
            details: `
              <h3>Key Benefits</h3>
              <ul>
                <li>Natural communication in their native language</li>
                <li>Reduces anxiety about written communication</li>
                <li>Builds stronger emotional connections</li>
                <li>Easier for children with limited literacy</li>
              </ul>
              <h3>How It Works</h3>
              <ul>
                <li>Simple voice recording interface</li>
                <li>Automatic message transcription</li>
                <li>Translation support for pen pals</li>
                <li>Voice playback with speed control</li>
              </ul>
            `
          }
        },
        {
          title: "Conversation Templates",
          description: "Pre-designed conversation starters and templates that help children overcome the initial barrier of starting conversations in English.",
          media: {
            src: "/pen-pal-images/2025-04-02 17-27-14.mp4",
            alt: "Conversation Templates Demo",
            type: "video" as const,
            caption: "Conversation Templates Feature",
            description: "Showing how children can use templates to start meaningful conversations",
            details: `
              <h3>Key Benefits</h3>
              <ul>
                <li>Reduces anxiety about starting conversations</li>
                <li>Provides proper English language structure</li>
                <li>Helps build confidence in communication</li>
                <li>Maintains cultural sensitivity</li>
              </ul>
              <h3>Template Categories</h3>
              <ul>
                <li>Personal introductions</li>
                <li>Daily life and activities</li>
                <li>Cultural exchange topics</li>
                <li>Questions and curiosity</li>
              </ul>
            `
          }
        }
      ]
    },

    results: {
      metrics: [
        {
          label: "Program Reach",
          before: "500 children",
          after: "2000+ children",
          improvement: "+300%",
        },
        {
          label: "Message Exchange",
          before: "45 days avg.",
          after: "7 days avg.",
          improvement: "-84%",
        },
        {
          label: "Child Protection",
          before: "Basic procedures",
          after: "Advanced security",
          improvement: "Enhanced safety",
        },
        {
          label: "Sponsorship Rate",
          before: "32% of children",
          after: "68% of children",
          improvement: "+113%",
        },
        {
          label: "Digital Literacy",
          before: "Basic",
          after: "Intermediate",
          improvement: "+65%",
        },
      ],
      testimonials: [
        {
          quote:
            "This app has changed how I connect with my pen pal. I can share about my day and see their response so much faster than before!",
          author: "Sarah",
          role: "Program Participant, 12 years old",
        },
        {
          quote:
            "Emil and the design team created an intuitive interface that works perfectly for our children with varying literacy levels and technical experience.",
          author: "Program Coordinator",
          role: "Murphy Charitable Foundation Uganda",
        },
        {
          quote:
            "The app has significantly reduced our logistical challenges and allowed us to expand the program to reach more children in need.",
          author: "Foundation Director",
          role: "Murphy Charitable Foundation Uganda",
        },
        {
          quote:
            "As an international pen pal, I appreciate how the app makes it easy to maintain a consistent connection with my pen pal in Uganda.",
          author: "International Volunteer",
          role: "Pen Pal Program",
        },
      ],
    },

    learnings: [
      "Designing for limited connectivity required innovative approaches to offline functionality",
      "Visual communication tools were essential for overcoming language barriers",
      "User testing directly with children in Uganda provided invaluable insights",
      "Collaboration with local program coordinators was crucial for success",
    ],

    nextProject: {
      title: "Dream AI",
      slug: "Dream-Ai",
    },

    // Product showcase images
    productShowcase: {
      title: "The Product",
      description: "The Pen Pal Magic App connects children in Uganda with international pen pals through an intuitive, accessible mobile interface.",
      images: [
        {
          src: "/pen-pal-images/1st image.png",
          alt: "Pen Pal Magic App inbox screen",
          caption: "Message Inbox",
          description: "Users can see all their messages and conversations with pen pals around the world."
        },
        {
          src: "/pen-pal-images/2nd image.png",
          alt: "Message composition screen",
          caption: "Message Composer",
          description: "The letter writing interface with voice message and media attachment options."
        },
        {
          src: "/pen-pal-images/3th image.png",
          alt: "Message composition screen",
          caption: "Writing Interface",
          description: "A clean, simple interface for writing messages to pen pals."
        }
      ]
    },
  }

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f5f2]">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/10 border-t-black"></div>
            <p className="mt-4 text-sm text-black/70">Loading case study...</p>
          </div>
        </div>
      )}
      
      <article className="container mx-auto px-2 sm:px-3">
        <div className="max-w-6xl mx-auto">
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
          </div>

          {/* Product Showcase */}
          <section className="mb-16">
            <div className="bg-white border border-black/10 rounded-sm p-6 md:p-8">
              <div className="w-full overflow-x-auto scrollbar-hide pb-8 pt-2">
                <div className="flex justify-center md:justify-between gap-10 md:gap-8 lg:gap-16 px-4 md:px-8">
                  {caseStudy.productShowcase?.images?.map((image, index) => (
                    <div key={index} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300 p-2">
                      <PhoneMockup 
                        imageSrc={image.src} 
                        imageAlt={image.alt || 'App screenshot'} 
                      />
                    </div>
                  )) || null}
                </div>
              </div>
            </div>
          </section>

          {/* Organization Links */}
          <section className="mb-16">
            <div className="bg-white border border-black/10 rounded-sm p-4 md:p-6">
              <h3 className="font-medium text-sm text-black/50 uppercase mb-4">Organization Links</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href="https://murphycharity.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black/80 hover:text-black transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Murphy Charitable Foundation Uganda
                </a>
                <a 
                  href="https://penpal.murphycharity.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black/80 hover:text-black transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Pen Pal Program Portal
                </a>
              </div>
            </div>
          </section>

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
              <p className="text-lg mb-6">{caseStudy.designProcess.description}</p>
              
              <div className="mb-8">
                <CaptionedCarousel 
                  media={caseStudy.designProcess.media} 
                  height={500}
                />
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-4">Key Deliverables</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {caseStudy.designProcess.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Solutions</h2>
            <p className="text-lg mb-8">{caseStudy.solution.description}</p>
            <div className="space-y-16">
              {caseStudy.solution.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-black/10 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg mb-6">{feature.description}</p>
                  </div>
                  <div className="relative aspect-video bg-black">
                    {feature.media && (
                      <video 
                        src={feature.media.src}
                        controls
                        playsInline
                        className="w-full h-full object-contain"
                        aria-label={feature.media.alt}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  {feature.media?.details && (
                    <div className="p-8 bg-black/5 border-t border-black/10">
                      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: feature.media.details }} />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Insights</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>Designing for limited connectivity required innovative approaches to offline functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>Visual communication tools were essential for overcoming language barriers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>User testing directly with children in Uganda provided invaluable insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>Collaboration with local program coordinators was crucial for success</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Growth</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>First experience working with an international team, which provided valuable insights into cross-cultural collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>Gained deep understanding of working within tight design schedules and managing project timelines effectively</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>Learned to adapt communication styles and design approaches for different cultural contexts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black/70 mr-3">•</span>
                      <span>Developed skills in remote collaboration and asynchronous communication across time zones</span>
                    </li>
                  </ul>
                </div>
              </div>
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
    </>
  )
}

export default CaseStudyPage

