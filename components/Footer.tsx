'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const socials = [
    { icon: FiGithub, href: 'https://github.com/Ayush1Sikarwar', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/ayush-sikarwar', label: 'LinkedIn' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="py-10 px-6 border-t border-white/10 text-center">
      <div className="flex justify-center gap-6 mb-6">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="text-gray-500 hover:text-accent-blue transition-colors">
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-gray-500 text-sm">
        © 2025 Ayush Sikarwar. Built with ❤️ and code.
      </p>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold z-50"
            style={{
              background: 'var(--accent-gradient)',
              boxShadow: 'var(--glow-blue)',
            }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
