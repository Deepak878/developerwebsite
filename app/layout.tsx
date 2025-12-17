import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deepak Bhattarai | Full Stack Developer',
  description: 'Professional portfolio of Deepak Bhattarai - Full Stack Developer specializing in mobile and web applications',
  keywords: ['Deepak Bhattarai', 'Full Stack Developer', 'Mobile Developer', 'Web Developer', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
