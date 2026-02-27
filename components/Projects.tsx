'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import projectsData from '@/data/projects.json'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
}

const allTechs = ['All', ...Array.from(new Set(projectsData.flatMap((p: Project) => p.tech)))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === 'All' ? projectsData : projectsData.filter((p: Project) => p.tech.includes(filter))

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-10 rounded-full" style={{ background: 'var(--accent-gradient)' }} />

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === tech
                  ? 'text-black'
                  : 'glass text-gray-300 hover:text-accent-blue'
              }`}
              style={filter === tech ? { background: '#00d4ff' } : {}}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 cursor-pointer group"
                style={{ transition: 'box-shadow 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                onClick={() => setSelected(project)}
              >
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium text-accent-purple"
                      style={{ background: 'rgba(139, 92, 246, 0.15)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-blue transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    <FiGithub size={20} />
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent-blue transition-colors"
                      onClick={(e) => e.stopPropagation()}>
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass rounded-2xl p-8 max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold gradient-text">{selected.title}</h3>
                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white">
                  <FiX size={24} />
                </button>
              </div>
              <p className="text-gray-300 mb-6">{selected.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-sm font-medium text-accent-purple"
                    style={{ background: 'rgba(139, 92, 246, 0.15)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={selected.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-blue hover:underline">
                  <FiGithub /> GitHub
                </a>
                {selected.demo !== '#' && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-blue hover:underline">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
