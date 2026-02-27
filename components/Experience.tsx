'use client'

import { motion } from 'framer-motion'

const timeline = [
  {
    id: 1,
    title: 'HackerRank Certificate',
    subtitle: 'Problem Solving',
    year: '2024',
    description: 'Earned the Problem Solving certificate on HackerRank, demonstrating proficiency in algorithms and data structures.',
    color: '#00d4ff',
  },
  {
    id: 2,
    title: 'HackerRank JavaScript Certificate',
    subtitle: 'JavaScript',
    year: '2024',
    description: 'Earned the JavaScript certificate on HackerRank, showcasing expertise in modern JavaScript programming.',
    color: '#F7DF1E',
  },
  {
    id: 3,
    title: 'HackerRank CSS Certificate',
    subtitle: 'CSS3',
    year: '2024',
    description: 'Earned the CSS certificate on HackerRank, demonstrating advanced CSS3 styling and layout skills.',
    color: '#1572B6',
  },
  {
    id: 4,
    title: 'Freelance AI Developer',
    subtitle: 'Building AI-powered web apps',
    year: '2023–Present',
    description: 'Working as a freelance AI developer, creating intelligent web applications and automation tools for clients globally.',
    color: '#8b5cf6',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Experience &amp; <span className="gradient-text">Certifications</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
      </motion.div>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-0`}
              >
                {/* Card */}
                <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <span
                        className="text-sm font-medium px-2.5 py-0.5 rounded-full ml-2 flex-shrink-0"
                        style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-2" style={{ color: item.color }}>{item.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#0a0a0a]"
                  style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
