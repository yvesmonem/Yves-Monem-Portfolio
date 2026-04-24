'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const line = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const socials = [
  { icon: Github, href: 'https://github.com/yvesmonem', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/yves-monem-140407271/',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:yves_menhem@outlook.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20 pb-24">
      {/* Ambient glows */}
      <div className="absolute -top-10 left-[10%] w-[520px] h-[520px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] right-[5%] w-[400px] h-[400px] bg-sky-500/[0.025] rounded-full blur-[100px] pointer-events-none" />

      <div className="grid lg:grid-cols-[1fr,320px] xl:grid-cols-[1fr,360px] gap-16 xl:gap-24 items-center">
        {/* ── Left column ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Availability badge */}
          <motion.div variants={line}>
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-500 border border-white/[0.07] rounded-full px-3 py-1.5 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={line}
            className="font-syne font-bold text-zinc-100 leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 6rem)' }}
          >
            Yves
            <br />
            Monem
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={line}
            className="text-lg text-zinc-400 font-medium"
          >
            Full Stack &amp; Web3 Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={line}
            className="text-zinc-500 leading-relaxed max-w-[480px] text-[0.975rem]"
          >
            CS graduate who spent a year building real products at a blockchain
            startup. I write production-level code across the full stack — from
            smart contracts to the interfaces people actually use.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={line} className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-emerald-400 text-zinc-900 text-sm font-semibold hover:bg-emerald-300 active:scale-[0.98] transition-all duration-150"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-white/[0.10] text-zinc-400 text-sm font-medium hover:border-white/[0.20] hover:text-zinc-200 active:scale-[0.98] transition-all duration-150"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={line} className="flex items-center gap-3 pt-1">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] text-zinc-600 hover:text-zinc-300 hover:border-white/[0.14] transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
            <div className="w-10 h-[1px] bg-white/[0.07] ml-1" />
            <span className="text-[11px] font-mono text-zinc-700 hidden sm:block">
              yves_menhem@outlook.com
            </span>
          </motion.div>
        </motion.div>

        {/* ── Right column: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-3xl bg-emerald-400/[0.04] blur-3xl scale-[1.15]" />
            {/* Photo frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] aspect-[3/4]">
              <Image
                src="/graduation-photo.jpg"
                alt="Yves Monem"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0px, 360px"
              />
              {/* Gradient fade at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950/70 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-zinc-700 hover:text-zinc-500 transition-colors"
        >
          <ArrowDown size={14} />
        </motion.a>
      </motion.div>
    </section>
  )
}
