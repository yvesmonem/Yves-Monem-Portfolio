'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const links = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'yvesmonem',
    href: 'https://github.com/yvesmonem',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'yves-monem-140407271',
    href: 'https://www.linkedin.com/in/yves-monem-140407271/',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-600 uppercase">
            04 — Contact
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.05]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* CTA side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-zinc-100 leading-[1.05] mb-5">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let&apos;s build
              <br />
              something.
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 max-w-sm text-[0.975rem]">
              Open to full-time roles, freelance projects, and interesting
              conversations. I respond to every email.
            </p>
            <a
              href="mailto:yves_menhem@outlook.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-emerald-400 text-zinc-900 text-sm font-semibold rounded-full hover:bg-emerald-300 active:scale-[0.98] transition-all duration-150"
            >
              <Mail size={15} />
              yves_menhem@outlook.com
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3 lg:pt-4"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="group flex items-center justify-between p-4 bg-zinc-900/50 border border-white/[0.06] rounded-xl hover:border-white/[0.12] hover:bg-zinc-900/70 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <link.icon size={15} className="text-zinc-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-200">
                      {link.label}
                    </div>
                    <div className="text-xs text-zinc-600">{link.value}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
