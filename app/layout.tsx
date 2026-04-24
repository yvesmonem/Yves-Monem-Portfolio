import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yves Monem — Full Stack & Web3 Developer',
  description:
    'CS graduate building performant web applications and decentralized systems. Specialized in React, TypeScript, Web3, and full-stack development.',
  keywords: [
    'Yves Monem',
    'Web3 Developer',
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Next.js',
    'dApps',
    'Blockchain',
  ],
  authors: [{ name: 'Yves Monem' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Yves Monem — Full Stack & Web3 Developer',
    description:
      'CS graduate building performant web applications and decentralized systems.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yvesmonem.com',
    siteName: 'Yves Monem',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yves Monem — Full Stack & Web3 Developer',
    description:
      'CS graduate building performant web applications and decentralized systems.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
