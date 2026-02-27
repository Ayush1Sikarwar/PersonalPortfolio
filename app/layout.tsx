import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayush Sikarwar — AI Engineer & Full Stack Developer',
  description: 'Personal portfolio of Ayush Sikarwar — AI Engineer, Full Stack Developer, and Software Engineer building intelligent digital experiences.',
  keywords: ['Ayush Sikarwar', 'AI Engineer', 'Full Stack Developer', 'Portfolio', 'Next.js', 'React'],
  authors: [{ name: 'Ayush Sikarwar' }],
  openGraph: {
    title: 'Ayush Sikarwar — AI Engineer & Full Stack Developer',
    description: 'Personal portfolio of Ayush Sikarwar — AI Engineer, Full Stack Developer, and Software Engineer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-bg-primary text-white">
        {children}
      </body>
    </html>
  )
}
