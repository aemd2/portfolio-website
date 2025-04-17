import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emil Donchev | Product Designer',
  description: 'Product Designer based in Plovdiv, Bulgaria | Creating user-centric digital experiences',
  generator: 'v0.dev',
  icons: {
    icon: '/E-logo-diamond.svg',
    apple: '/E-logo-diamond.svg',
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