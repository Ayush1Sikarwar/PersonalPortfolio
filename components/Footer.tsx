"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Ayush Sikarwar</span>. All rights reserved.
        </motion.p>
        <div className="flex gap-6">
          <a href="https://github.com/Ayush1Sikarwar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ayush-sikarwar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a>
          <a href="https://twitter.com/ayush_sikarwar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
