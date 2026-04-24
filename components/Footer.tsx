'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs text-zinc-700"
        >
          © 2025 Yves Monem
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors"
        >
          Back to top ↑
        </motion.button>
      </div>
    </footer>
  )
}
