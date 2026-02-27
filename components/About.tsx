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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'var(--accent-gradient)' }} />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <div>
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full mb-8 flex items-center justify-center text-4xl font-bold gradient-text"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
              }}>
              AS
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m <span className="text-accent-blue font-semibold">Ayush Sikarwar</span>, an AI/ML enthusiast and
              full-stack developer passionate about building intelligent, high-performance digital experiences.
              I specialize in Python, JavaScript, and AI-driven applications.
            </p>
          </div>

          {/* Skill bars */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-accent-blue">{skill.level}%</span>
                </div>
                <div className="h-2 bg-bg-card rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'var(--accent-gradient)' }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
