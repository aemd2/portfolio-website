import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emil Donchev | Product Designer',
  description: 'Product Designer based in Plovdiv, Bulgaria | Creating user-centric digital experiences',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
