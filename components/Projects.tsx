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

export default function Projects() {
  const [projects] = useState<Project[]>(projectsData as Project[])
  const [filter, setFilter] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const allTechs = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tech)))]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter))

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-10 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
      </motion.div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === tech
                ? 'bg-[#00d4ff] text-black'
                : 'border border-white/20 text-gray-300 hover:border-[#00d4ff] hover:text-[#00d4ff]'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="glass rounded-2xl p-6 cursor-pointer group hover:border-[#00d4ff]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.8)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-2xl w-full relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-3 gradient-text">{selectedProject.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-5">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ background: 'rgba(139,92,246,0.15)', color: '#8b5cf6', border: '1px solid rgba(139,92,246,0.3)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full text-sm text-gray-300 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
                >
                  <FiGithub size={16} /> GitHub
                </a>
                {selectedProject.demo !== '#' && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#00d4ff] text-black rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all"
                  >
                    <FiExternalLink size={16} /> Live Demo
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
