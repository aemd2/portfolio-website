import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Mail, MapPin, Link2, Globe } from "lucide-react"
import { Header } from "@/components/ui/header"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d2d2d]">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <Link href="/" className="inline-flex items-center text-sm hover:text-black/70 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>

              <a
                href="/emil-donchev-cv.pdf"
                download
                className="inline-flex items-center text-sm font-medium hover:text-black/70 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </div>

            <div className="border border-black/20 rounded-sm p-8 md:p-12 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-black/10 pb-12">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Emil Donchev</h1>
                  <p className="text-xl mb-6">Product Designer</p>
                  <p className="text-black/70 max-w-md mb-6">
                    Experienced Product Designer with a strong focus on user-centric design and problem-solving. Proven
                    track record in delivering scalable design solutions, including an AI HR dashboard that enhanced
                    onboarding efficiency and a redesigned media interface adopted by 100+ users globally.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-black/60" />
                      <a href="mailto:aemd2donchev@gmail.com" className="hover:text-black/70 transition-colors">
                        aemd2donchev@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-black/60" />
                      <span>Plovdiv, Bulgaria</span>
                    </div>
                    <div className="flex items-center">
                      <Link2 className="h-4 w-4 mr-2 text-black/60" />
                      <a
                        href="https://www.linkedin.com/in/emil-donchev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black/70 transition-colors"
                      >
                        linkedin.com/in/emil-donchev
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-black/60" />
                      <a
                        href="https://www.emildonchev-producrdesigner.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black/70 transition-colors"
                      >
                        emildonchev-producrdesigner.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative w-32 h-32 rounded-full overflow-hidden border border-black/10">
                  <Image src="/placeholder.svg?height=128&width=128" alt="Emil Donchev" fill className="object-cover" />
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                <div className="space-y-12">
                  {/* Project Overview */}
                  <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Skills</h2>
                    <div className="bg-white border border-black/10 rounded-sm p-8 mb-8">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="font-medium mb-2">Design</h3>
                          <ul className="space-y-1 text-sm text-black/70">
                            <li>UX Design</li>
                            <li>UI Design</li>
                            <li>System Design</li>
                            <li>Product Design</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Research</h3>
                          <ul className="space-y-1 text-sm text-black/70">
                            <li>UX Research</li>
                            <li>Usability Testing</li>
                            <li>Design Thinking</li>
                            <li>User Journey Mapping</li>
                            <li>Persona Creation</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Tools & Methods</h3>
                          <ul className="space-y-1 text-sm text-black/70">
                            <li>Figma</li>
                            <li>Design Systems</li>
                            <li>Agile Methodology</li>
                            <li>Collaborative Workshops</li>
                            <li>Iterative Design</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Experience */}
                  <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Experience</h2>
                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Product Designer at Acqify</h3>
                          <span className="text-sm text-black/70">Dec 2023 - Jan 2024</span>
                        </div>
                        <p className="mb-4 text-sm text-black/70">Online</p>
                        <p className="mb-4">
                          Conducted comprehensive UX research to gather insights into user behaviors and preferences,
                          ensuring that design decisions were informed by real data. This work involved analyzing
                          feedback, collaborating with cross-functional teams, and applying user-centric principles to
                          deliver impactful results.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-black/70">
                          <li>
                            Improved User Satisfaction: Analyzed user feedback and implemented iterative design
                            processes, achieving a measurable 3% improvement in overall user satisfaction.
                          </li>
                          <li>
                            Enhanced UI Consistency: Collaborated with developers and stakeholders to implement
                            user-centric UI enhancements, ensuring consistency across product features and improving
                            usability metrics.
                          </li>
                          <li>
                            Fostered Innovation: Led design thinking workshops, fostering a culture of creativity and
                            problem-solving within the team, which directly contributed to the development of innovative
                            design solutions.
                          </li>
                          <li>
                            Established Design Systems: Contributed to the creation of a cohesive design system,
                            standardizing components to improve efficiency and maintain usability across multiple
                            platforms.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Product Designer at Community Dreams Foundation</h3>
                          <span className="text-sm text-black/70">Dec 2023 - Present</span>
                        </div>
                        <p className="mb-4 text-sm text-black/70">Volunteer, Online</p>
                        <p className="mb-4">
                          Designed an AI-powered HR dashboard and website using Figma, focusing on streamlining
                          onboarding and task processes to enhance efficiency and user experience, supporting the
                          organization's volunteer marketplace.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-black/70">
                          <li>
                            AI HR Dashboard Design: Created an AI-driven HR dashboard to simplify onboarding and task
                            management processes, resulting in a 70% reduction in onboarding time and improved task
                            allocation efficiency.
                          </li>
                          <li>
                            Volunteer Marketplace: Developed a user-friendly volunteer marketplace for job searching,
                            connecting volunteers with available opportunities and enhancing user engagement.
                          </li>
                          <li>
                            User Journey Mapping: Designed three distinct user journeys (volunteers, organizations, and
                            administrators) to optimize each group's experience, leading to a 30% increase in engagement
                            and task completion rates.
                          </li>
                          <li>
                            UX/UI Design with Figma: Delivered a visually appealing, intuitive interface using Figma,
                            ensuring an accessible and seamless experience for all users, regardless of technical
                            expertise.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Product Designer at Santos Creations Educational Foundation</h3>
                          <span className="text-sm text-black/70">Nov 2023 - Present</span>
                        </div>
                        <p className="mb-4 text-sm text-black/70">Volunteer, Online</p>
                        <p className="mb-4">
                          Collaborated with the Santos Creations Educational Foundation to design and implement a
                          comprehensive UX and UI strategy for their educational website, which positively impacted over
                          1,000 users and continues to evolve.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-black/70">
                          <li>
                            Developed a Design System: Created a cohesive design system with over 30 reusable
                            components, ensuring consistency in branding, usability, and scalability for future updates
                            and expansions.
                          </li>
                          <li>
                            Crafted User Journeys: Designed detailed user journey maps and personas for three core user
                            groups—students, educators, and donors—leading to a 20% improvement in navigation efficiency
                            based on usability testing.
                          </li>
                          <li>
                            Collaborative Implementation: Facilitated workshops with stakeholders and collected feedback
                            from over 50 users, ensuring the design addressed real-world needs effectively.
                          </li>
                          <li>
                            Legacy of the Project: Provided a sustainable framework that continues to serve more than
                            1,000 users, with ongoing updates and enhancements by the organization after my involvement.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Product Designer at Murphy Charitable Foundation Uganda</h3>
                          <span className="text-sm text-black/70">Nov 2023 - Present</span>
                        </div>
                        <p className="mb-4 text-sm text-black/70">Volunteer, Online</p>
                        <p className="mb-4">
                          Contributed to the Murphy Charitable Foundation Uganda as part of the Panpal program, focusing
                          on impactful design projects that enhanced user experiences and broadened the organization's
                          global reach.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-black/70">
                          <li>
                            Developed Chat Application: Designed the UX and UI for a chat app, enabling seamless
                            communication for over 100+ users across Uganda and other parts of the world.
                          </li>
                          <li>
                            Innovated Voice Mail Design: Created a user-friendly voice mail design, improving
                            accessibility and functionality for diverse user groups.
                          </li>
                          <li>
                            Redesigned Media Interfaces: Redesigned the video and image UI, enhancing the user
                            experience and ensuring intuitive navigation and engagement.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Education */}
                  <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Education</h2>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Technical University Sofia, branch Plovdiv</h3>
                          <span className="text-sm text-black/70">Sep 2020 - Jun 2024</span>
                        </div>
                        <p className="text-sm text-black/70">Bachelor's degree, Design and Printing Communication</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">French High School "Antoine de Saint-Exupery"</h3>
                          <span className="text-sm text-black/70">Jun 2015 - Jun 2020</span>
                        </div>
                        <p className="text-sm text-black/70">Secondary, English Language and Literature, General</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Dusho Hadzidekov</h3>
                          <span className="text-sm text-black/70">Jun 2009 - Jun 2015</span>
                        </div>
                        <p className="text-sm text-black/70">Primary, General</p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="space-y-12">
                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase">Projects</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-1">Pen Pal Magic App Redesign</h3>
                        <p className="text-sm text-black/70 mb-2">
                          Led the complete redesign of a pen pal application, focusing on improving user
                          engagement and fostering meaningful connections across borders.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-black/70">
                          <li>Increased user engagement by 47%</li>
                          <li>Improved user satisfaction scores from 3.2/5 to 4.7/5</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-1">E-commerce Platform</h3>
                        <p className="text-sm text-black/70 mb-2">
                          Designed an end-to-end marketplace connecting artisans with customers, emphasizing product
                          discovery and storytelling.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-black/70">
                          <li>Increased conversion rate by 28%</li>
                          <li>Reduced cart abandonment by 35%</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-1">Healthcare Dashboard</h3>
                        <p className="text-sm text-black/70 mb-2">
                          Created a data visualization interface for healthcare professionals that simplifies complex
                          patient information.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-black/70">
                          <li>Reduced time spent looking for information by 32%</li>
                          <li>Improved decision-making accuracy by 24%</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
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

