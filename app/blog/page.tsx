import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Designing for Accessibility: Best Practices",
      excerpt:
        "Exploring how to create inclusive designs that work for everyone, regardless of ability or circumstance.",
      date: "March 10, 2025",
      image: "/placeholder.svg?height=600&width=1200",
      slug: "designing-for-accessibility",
    },
    {
      id: 2,
      title: "The Role of Design Systems in Modern Product Development",
      excerpt:
        "How design systems can streamline workflows, ensure consistency, and enable teams to focus on solving user problems.",
      date: "February 22, 2025",
      image: "/placeholder.svg?height=600&width=1200",
      slug: "design-systems-product-development",
    },
    {
      id: 3,
      title: "User Research Methods for Startups on a Budget",
      excerpt: "Practical approaches to gathering valuable user insights without breaking the bank.",
      date: "January 15, 2025",
      image: "/placeholder.svg?height=600&width=1200",
      slug: "user-research-startups",
    },
    {
      id: 4,
      title: "From Sketch to Code: Bridging the Designer-Developer Gap",
      excerpt:
        "Strategies for better collaboration between designers and developers to create seamless product experiences.",
      date: "December 5, 2024",
      image: "/placeholder.svg?height=600&width=1200",
      slug: "designer-developer-collaboration",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d2d2d]">
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
            <Link href="#" className="text-sm font-medium hover:text-black/70 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-black/70 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">Blog</h1>

            <p className="text-xl text-black/70 mb-12">
              Thoughts, insights, and perspectives on design, user experience, and product development.
            </p>

            <div className="space-y-16">
              {blogPosts.map((post) => (
                <article key={post.id} className="border-b border-black/10 pb-16">
                  <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">
                        <Link href={`/blog/${post.slug}`} className="hover:text-black/70 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex items-center text-sm text-black/60 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <time dateTime="2025-03-10">{post.date}</time>
                      </div>
                      <p className="text-black/70 mb-6">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center font-medium hover:text-black/70 transition-colors"
                      >
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                  </div>
                </article>
              ))}
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

