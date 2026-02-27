'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['AI Engineer', 'Full Stack Developer', 'Software Engineer']

const words = ['Hi,', "I'm", 'Ayush', '—', 'I', 'Build', 'Intelligent', 'Digital', 'Experiences.']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 1500)
        return
      }
      if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
        return
      }
      setDisplayText(
        isDeleting ? role.substring(0, displayText.length - 1) : role.substring(0, displayText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const handleScroll = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-float absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}
        />
        <div
          className="animate-float-delayed absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        />
        <div
          className="animate-float absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Staggered word reveal */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-3 ${
                word === 'Intelligent' ? 'gradient-text' : ''
              }`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-2xl sm:text-3xl font-medium text-gray-300 mb-10 h-10"
        >
          <span className="neon-text-blue">{displayText}</span>
          <span className="animate-pulse text-accent-blue">|</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="px-8 py-4 rounded-full font-semibold text-base border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
          >
            View Projects
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-4 rounded-full font-semibold text-base border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
