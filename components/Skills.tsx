'use client'
import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFlask, SiTensorflow, SiScikitlearn,
  SiPostman, SiVercel
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'

const categories = [
  {
    name: 'Frontend',
    icons: [
      { icon: FaHtml5, label: 'HTML5', color: '#e34c26' },
      { icon: FaCss3Alt, label: 'CSS3', color: '#264de4' },
      { icon: FaJs, label: 'JavaScript', color: '#f7df1e' },
      { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
      { icon: FaReact, label: 'React', color: '#61dafb' },
      { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
      { icon: SiTailwindcss, label: 'Tailwind', color: '#38bdf8' },
    ]
  },
  {
    name: 'Backend',
    icons: [
      { icon: FaPython, label: 'Python', color: '#3776ab' },
      { icon: SiFlask, label: 'Flask', color: '#ffffff' },
      { icon: FaNodeJs, label: 'Node.js', color: '#68a063' },
    ]
  },
  {
    name: 'AI/ML',
    icons: [
      { icon: SiTensorflow, label: 'TensorFlow', color: '#ff6f00' },
      { icon: SiScikitlearn, label: 'Scikit-learn', color: '#f89939' },
    ]
  },
  {
    name: 'Tools',
    icons: [
      { icon: FaGitAlt, label: 'Git', color: '#f05032' },
      { icon: FaGithub, label: 'GitHub', color: '#ffffff' },
      { icon: TbBrandVscode, label: 'VS Code', color: '#007acc' },
      { icon: SiPostman, label: 'Postman', color: '#ff6c37' },
      { icon: FaDocker, label: 'Docker', color: '#2496ed' },
      { icon: SiVercel, label: 'Vercel', color: '#ffffff' },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'var(--accent-gradient)' }} />

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <div key={cat.name}>
              <h3 className="text-xl font-semibold text-accent-blue mb-6">{cat.name}</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-6">
                {cat.icons.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + i * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.2 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="p-3 rounded-xl glass group-hover:shadow-lg transition-all">
                      <item.icon size={28} color={item.color} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
