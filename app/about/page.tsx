import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/ui/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d2d2d]">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-black/70 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">About Me</h1>

            <div className="mb-12">
              <Image
                src="/new picture.jpg"
                alt="Emil Donchev portrait"
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-md"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8">
                Experienced Product Designer with a strong focus on user-centric design and problem-solving. I'm Emil
                Donchev, a dedicated product designer from Plovdiv, Bulgaria, with a proven track record in delivering
                scalable design solutions.
              </p>

              <p className="mb-8">
                I recently graduated from the Technical University of Sofia, branch Plovdiv, where I worked on multiple
                case studies and gained hands-on experience in both volunteer and professional environments. My goal is
                to create designs that not only look great but also address real business needs, ensuring value for
                users and room for growth. Currently, I'm also developing Job+, a new hiring website specializing in job searching.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">My Approach</h2>

              <p className="mb-8">
                I believe that great design is about solving real problems for real people. My process always starts
                with comprehensive UX research to gather insights into user behaviors and preferences, ensuring that
                design decisions are informed by real data. From there, I work to create solutions that are not only
                functional but also delightful to use.
              </p>

              <p className="mb-8">
                My background in both design and technology allows me to bridge the gap between what's desirable from a
                user perspective and what's feasible from a technical standpoint.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Experience</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Product Designer at Eurovoyage</h3>
                  <p className="text-black/70 mb-2">2024 - 2025</p>
                  <p>
                    Led the project from initial concept (0 to 1), designing the core platform and developing the sales and marketing strategy for a premium European restaurant & attraction directory.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Product Designer at Acqify</h3>
                  <p className="text-black/70 mb-2">Dec 2023 - Jan 2024</p>
                  <p>
                    Conducted comprehensive UX research and implemented iterative design processes, achieving a
                    measurable improvement in overall user satisfaction and enhancing UI consistency across product
                    features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Product Designer at Pen pal (Volunteer)</h3>
                  <p className="text-black/70 mb-2">2023 - Present</p>
                  <p>
                    Adapted the existing Pen Pal project from a web application to a mobile version, focusing on improving accessibility and engagement for children and international pen pals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Product Designer at Lopake (Volunteer)</h3>
                  <p className="text-black/70 mb-2">2024 - Present</p>
                  <p>
                    Contributed to the design of the homepage and login page functionalities for the Lopake platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Product Designer at Community Dreams Foundation (Volunteer)</h3>
                  <p className="text-black/70 mb-2">Dec 2023 - Present</p>
                  <p>
                    Designed an AI-powered HR dashboard that reduced onboarding time by 70% and developed a
                    user-friendly volunteer marketplace, optimizing the experience for volunteers, organizations, and
                    administrators.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Product Designer at Santos Creations Educational Foundation (Volunteer)
                  </h3>
                  <p className="text-black/70 mb-2">Nov 2023 - Present</p>
                  <p>
                    Created a comprehensive UX/UI strategy for an educational website, including a design system with
                    over 30 reusable components that serves more than 1,000 users.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Skills & Tools</h2>

              <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-12">
                <div>
                  <h3 className="font-semibold mb-2">Design</h3>
                  <ul className="list-disc list-inside space-y-1 text-black/70">
                    <li>UX Design</li>
                    <li>UI Design</li>
                    <li>System Design</li>
                    <li>Product Design</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <ul className="list-disc list-inside space-y-1 text-black/70">
                    <li>Figma</li>
                    <li>Design Systems</li>
                    <li>Usability Testing</li>
                    <li>Design Thinking</li>
                    <li>Agile Methodology</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-black/10 pt-12 mt-12">
                <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                <p className="mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
                <p className="font-medium mb-4">
                  Email: <a
                    href="mailto:aemd2donchev@gmail.com"
                    className="underline underline-offset-4 hover:text-black/70 transition-colors"
                  >
                    aemd2donchev@gmail.com
                  </a>
                </p>
                <p className="font-medium">
                  Schedule a chat: <a
                    href="https://calendly.com/aemd2donchev/interview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-black/70 transition-colors"
                  >
                    Book via Calendly
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
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


