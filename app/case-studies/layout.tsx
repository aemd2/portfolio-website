"use client"

import Link from "next/link"
import { Header } from "@/components/ui/header"

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d2d2d]">
      <Header />

      <main className="pt-24 pb-20">
        {children}
      </main>

      <footer className="border-t border-black/10 py-6">
        <div className="container mx-auto px-2 sm:px-3 flex flex-col md:flex-row justify-between items-center gap-4">
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
      </footer>
    </div>
  )
} 