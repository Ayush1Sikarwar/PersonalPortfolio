'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiCheck, FiX } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const socials = [
    { icon: FiGithub, href: 'https://github.com/Ayush1Sikarwar', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/ayush-sikarwar', label: 'LinkedIn' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'var(--accent-gradient)' }} />

        {status === 'success' ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <FiCheck size={40} className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">I&apos;ll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {(['name', 'email', 'message'] as const).map((field) => (
              <div key={field} className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-2 capitalize">{field}</label>
                {field === 'message' ? (
                  <textarea
                    rows={5}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue border border-transparent transition-colors resize-none"
                    placeholder={`Your ${field}...`}
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue border border-transparent transition-colors"
                    placeholder={`Your ${field}...`}
                  />
                )}
                {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <FiX /> Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              style={{ background: 'var(--accent-gradient)', boxShadow: 'var(--glow-blue)' }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-12">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent-blue hover:scale-110 transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
