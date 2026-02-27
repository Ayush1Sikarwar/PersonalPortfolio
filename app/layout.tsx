import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayush Sikarwar — AI Engineer & Full Stack Developer',
  description:
    'Personal portfolio of Ayush Sikarwar — AI/ML enthusiast and full-stack developer building intelligent, high-performance digital experiences.',
  keywords: ['Ayush Sikarwar', 'AI Engineer', 'Full Stack Developer', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Ayush Sikarwar — AI Engineer & Full Stack Developer',
    description:
      'Personal portfolio of Ayush Sikarwar — AI/ML enthusiast and full-stack developer.',
    url: 'https://ayushsikarwar.vercel.app',
    siteName: 'Ayush Sikarwar Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
