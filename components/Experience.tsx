'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiBriefcase } from 'react-icons/fi'

const timeline = [
  {
    year: '2024',
    title: 'HackerRank Certificate',
    subtitle: 'Problem Solving',
    icon: FiAward,
    type: 'cert',
  },
  {
    year: '2024',
    title: 'HackerRank JavaScript Certificate',
    subtitle: 'JavaScript',
    icon: FiAward,
    type: 'cert',
  },
  {
    year: '2024',
    title: 'HackerRank CSS Certificate',
    subtitle: 'CSS3',
    icon: FiAward,
    type: 'cert',
  },
  {
    year: '2023–Present',
    title: 'Freelance AI Developer',
    subtitle: 'Building AI-powered web apps',
    icon: FiBriefcase,
    type: 'work',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Experience &amp; <span className="gradient-text">Certifications</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'var(--accent-gradient)' }} />
      </motion.div>

      <div className="relative" ref={ref}>
        {/* Animated vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800 overflow-hidden">
          <motion.div
            className="w-full origin-top"
            style={{ background: 'var(--accent-gradient)', height: '100%' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="glass rounded-2xl p-6 inline-block">
                  <span className="text-accent-blue text-sm font-medium">{item.year}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="relative z-10 w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' }}>
                <item.icon className="text-accent-blue" size={20} />
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
