'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-white/[0.06]'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-7 h-7 rounded border border-emerald-400/25 bg-emerald-400/[0.06] flex items-center justify-center">
            <span className="text-[11px] font-syne font-bold text-emerald-400 leading-none">
              YM
            </span>
          </div>
          <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
            Yves Monem
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:yves_menhem@outlook.com"
            className="text-sm px-4 py-1.5 rounded-full border border-white/[0.09] text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/25 transition-all duration-200"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] py-2 px-1"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-[22px] h-[1.5px] bg-zinc-400 origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-[22px] h-[1.5px] bg-zinc-400"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-[22px] h-[1.5px] bg-zinc-400 origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-md border-b border-white/[0.06]"
          >
            <nav className="flex flex-col px-6 py-5 gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors py-0.5"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="mailto:yves_menhem@outlook.com"
                className="text-sm text-emerald-400 border border-emerald-400/20 rounded-full px-4 py-2 text-center mt-1"
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
