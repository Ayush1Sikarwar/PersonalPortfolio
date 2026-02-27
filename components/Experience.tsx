"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Startup",
    period: "Jan 2024 – Present",
    type: "Full-time",
    description: "Built and maintained scalable web applications using Next.js, Node.js, and PostgreSQL. Led the frontend architecture redesign, improving performance by 40%. Collaborated with cross-functional teams to deliver features on tight deadlines.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Digital Agency",
    period: "Jun 2023 – Dec 2023",
    type: "Internship",
    description: "Developed responsive UI components with React and Tailwind CSS. Integrated REST APIs and optimized web performance. Contributed to a component library used across multiple projects.",
    tech: ["React", "Tailwind CSS", "REST APIs", "JavaScript"],
  },
  {
    id: 3,
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 – Present",
    type: "Volunteer",
    description: "Actively contributed to open source projects on GitHub. Fixed bugs, added features, and improved documentation for several React and Node.js projects.",
    tech: ["React", "Node.js", "Git", "GitHub"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">My journey</p>
          <h2 className="text-4xl font-bold text-gradient">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="sm:pl-20 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hidden sm:flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
