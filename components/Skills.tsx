'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt, FaGithub, FaDocker,
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFlask, SiExpress, SiTensorflow,
  SiPytorch, SiScikitlearn, SiOpencv, SiPostman, SiVercel,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const categories = [
  {
    name: 'Frontend',
    items: [
      { icon: FaHtml5, label: 'HTML5', color: '#E34F26' },
      { icon: FaCss3Alt, label: 'CSS3', color: '#1572B6' },
      { icon: FaJs, label: 'JavaScript', color: '#F7DF1E' },
      { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
      { icon: FaReact, label: 'React', color: '#61DAFB' },
      { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
      { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { icon: FaPython, label: 'Python', color: '#3776AB' },
      { icon: SiFlask, label: 'Flask', color: '#ffffff' },
      { icon: FaNodeJs, label: 'Node.js', color: '#339933' },
      { icon: SiExpress, label: 'Express', color: '#ffffff' },
    ],
  },
  {
    name: 'AI/ML',
    items: [
      { icon: SiTensorflow, label: 'TensorFlow', color: '#FF6F00' },
      { icon: SiPytorch, label: 'PyTorch', color: '#EE4C2C' },
      { icon: SiScikitlearn, label: 'Scikit-learn', color: '#F7931E' },
      { icon: SiOpencv, label: 'OpenCV', color: '#5C3EE8' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { icon: FaGitAlt, label: 'Git', color: '#F05032' },
      { icon: FaGithub, label: 'GitHub', color: '#ffffff' },
      { icon: VscCode, label: 'VS Code', color: '#007ACC' },
      { icon: SiPostman, label: 'Postman', color: '#FF6C37' },
      { icon: FaDocker, label: 'Docker', color: '#2496ED' },
      { icon: SiVercel, label: 'Vercel', color: '#ffffff' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
      </motion.div>

      <div className="space-y-14">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3 className="text-lg font-semibold text-gray-400 mb-6 uppercase tracking-widest">{cat.name}</h3>
            <motion.div
              className="flex flex-wrap gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {cat.items.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.7 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.15, filter: `drop-shadow(0 0 12px ${item.color})` }}
                  className="flex flex-col items-center gap-2 p-4 glass rounded-xl w-20 cursor-default"
                >
                  <item.icon size={32} color={item.color} />
                  <span className="text-xs text-gray-400 text-center leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
