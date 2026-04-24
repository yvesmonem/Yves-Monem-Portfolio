'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Bill Splitter',
    subtitle: 'Decentralized expense distribution on Cosmos',
    description:
      'A blockchain-native platform for splitting expenses and distributing funds across multiple recipients. Built on the Andromeda Protocol with CosmWasm smart contracts — supporting percentage-based splits, waterfall, and liquid distribution strategies through an intuitive interface. Designed for DAOs, investment groups, and teams managing shared resources.',
    tech: [
      'Andromeda Protocol',
      'CosmWasm',
      'tRPC',
      'Next.js',
      'TypeScript',
      'Keplr Wallet',
    ],
    link: 'https://bill-splitting-five.vercel.app/',
    features: [
      { label: 'Distribution', value: 'Percentage · Weighted · Waterfall · Liquid' },
      { label: 'Chains', value: 'Andromeda · Osmosis · WASM devnets' },
      { label: 'Wallet', value: 'Keplr integration' },
      { label: 'Contracts', value: 'CosmWasm ADOs' },
    ],
    status: 'Live',
    accent: 'emerald',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-600 uppercase">
            02 — Projects
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.05]" />
        </motion.div>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-white/[0.10] transition-all duration-300"
            >
              {/* Subtle green tint behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] to-transparent opacity-60 pointer-events-none" />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start">
                  {/* Content */}
                  <div>
                    {/* Header row */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-mono text-zinc-700">
                        {project.number}
                      </span>
                      {project.status === 'Live' && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-400/8 border border-emerald-400/15 rounded-full px-2.5 py-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          Live
                        </span>
                      )}
                    </div>

                    <h3 className="font-syne font-bold text-2xl md:text-3xl text-zinc-100 mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-5">
                      {project.subtitle}
                    </p>

                    <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl text-[0.95rem]">
                      {project.description}
                    </p>

                    {/* Feature grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                      {project.features.map(feat => (
                        <div
                          key={feat.label}
                          className="bg-black/20 border border-white/[0.05] rounded-xl p-3"
                        >
                          <div className="text-[10px] font-mono text-zinc-600 mb-1 uppercase tracking-wider">
                            {feat.label}
                          </div>
                          <div className="text-[11px] text-zinc-300 font-medium leading-snug">
                            {feat.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="text-[11px] font-mono text-zinc-500 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex lg:flex-col gap-3 items-start shrink-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 border border-white/[0.10] rounded-full px-4 py-2 hover:border-emerald-400/30 hover:text-emerald-400 transition-all duration-200 group/btn"
                    >
                      View live
                      <ArrowUpRight
                        size={13}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center text-zinc-700 text-sm mt-10"
        >
          More projects on{' '}
          <a
            href="https://github.com/yvesmonem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-zinc-700"
          >
            GitHub
          </a>
        </motion.p>
      </div>
    </section>
  )
}
