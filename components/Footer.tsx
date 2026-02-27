'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Ayush Sikarwar. Built with ❤️ and code.
          </p>

          <div className="flex gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/Ayush1Sikarwar', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/ayush-sikarwar', label: 'LinkedIn' },
              { icon: FiInstagram, href: '#', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow z-40"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)' }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} className="text-black font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
