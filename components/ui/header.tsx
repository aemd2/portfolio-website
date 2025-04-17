import Link from "next/link"

/**
 * Main header component with consistent navigation
 * Contains only logo, HOME, ABOUT, and BLOG links
 * BLOG links to Medium account and opens in a new window
 */
export function Header() {
  return (
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
          <Link 
            href="https://medium.com/@aemd2donchev" 
            className="text-sm font-medium hover:text-black/70 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  )
} 