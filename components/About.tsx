"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".about-stat", {
        scrollTrigger: { trigger: ".about-stats", start: "top 80%" },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "20+", label: "Projects Built" },
    { value: "10+", label: "Technologies" },
    { value: "5+", label: "Open Source Contributions" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-4xl font-bold text-gradient">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Hi! I&apos;m Ayush Sikarwar, a Full Stack Developer based in India. I love turning complex problems
              into elegant, efficient solutions. With a strong foundation in both frontend and backend technologies,
              I build end-to-end web applications that are fast, accessible, and scalable.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring open source projects, learning new technologies,
              or writing about software development. I believe in continuous learning and love collaborating
              with other developers to create impactful software.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          {/* Photo placeholder + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Photo placeholder */}
            <div className="glass rounded-2xl p-1 neon-glow mx-auto w-48 h-48 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>

            {/* Stats */}
            <div className="about-stats grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat glass rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
