'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiCheck, FiX } from 'react-icons/fi'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const validate = () => {
    const errs = { name: '', email: '', message: '' }
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    setErrors(errs)
    return !errs.name && !errs.email && !errs.message
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
      </motion.div>

      {status === 'success' ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto mb-6"
          >
            <FiCheck size={36} className="text-green-400" />
          </motion.div>
          <p className="text-xl text-green-400 font-medium">Message sent! I&apos;ll get back to you soon.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-8 px-6 py-2 border border-white/20 rounded-full text-gray-300 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all text-sm"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
              <FiX className="text-red-400" size={20} />
              <span className="text-red-400 text-sm">Something went wrong. Please try again.</span>
            </div>
          )}

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full bg-[#111] border rounded-xl px-5 py-4 text-white placeholder-transparent outline-none transition-all peer ${
                errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#00d4ff]'
              }`}
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#00d4ff] peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs bg-[#0a0a0a] px-1"
            >
              Your Name
            </label>
            {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full bg-[#111] border rounded-xl px-5 py-4 text-white placeholder-transparent outline-none transition-all peer ${
                errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#00d4ff]'
              }`}
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#00d4ff] peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs bg-[#0a0a0a] px-1"
            >
              Your Email
            </label>
            {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full bg-[#111] border rounded-xl px-5 py-4 text-white placeholder-transparent outline-none transition-all resize-none peer ${
                errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#00d4ff]'
              }`}
              placeholder="Your Message"
            />
            <label
              htmlFor="message"
              className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#00d4ff] peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs bg-[#0a0a0a] px-1"
            >
              Your Message
            </label>
            {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 disabled:opacity-50"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)' }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      )}

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center gap-6 mt-12"
      >
        {[
          { icon: FiGithub, href: 'https://github.com/Ayush1Sikarwar', label: 'GitHub' },
          { icon: FiLinkedin, href: 'https://linkedin.com/in/ayush-sikarwar', label: 'LinkedIn' },
          { icon: FiInstagram, href: '#', label: 'Instagram' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 glass rounded-full text-gray-400 hover:text-white hover:border-[#00d4ff]/50 transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]"
          >
            <Icon size={22} />
          </a>
        ))}
      </motion.div>
    </section>
  )
}
