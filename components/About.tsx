'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS3', level: 88 },
  { name: 'AI/ML', level: 82 },
  { name: 'Flask', level: 80 },
  { name: 'Databases', level: 78 },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="relative w-64 h-64 rounded-full flex items-center justify-center cursor-pointer group"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)', padding: '3px' }}
          >
            <div className="w-full h-full rounded-full bg-[#161616] flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300">
              <span className="text-6xl font-bold gradient-text">AS</span>
            </div>
          </div>
        </motion.div>

        {/* Bio + Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I&apos;m <strong className="text-white">Ayush Sikarwar</strong>, an AI/ML enthusiast and
            full-stack developer passionate about building intelligent, high-performance digital
            experiences. I specialize in Python, JavaScript, and AI-driven applications.
          </p>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
