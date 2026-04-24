'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '1+', label: 'Year at Andromeda' },
  { value: 'Web3', label: 'Specialization' },
  { value: 'Full', label: 'Stack Coverage' },
  { value: 'CS', label: 'Degree' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-600 uppercase">
            01 — About
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.05]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-14 lg:gap-20 items-start">
          {/* Left: heading + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-zinc-100 mb-8 leading-tight">
              Developer who
              <br />
              <span className="text-zinc-500">ships real things</span>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="p-4 bg-zinc-900/50 border border-white/[0.05] rounded-xl"
                >
                  <div className="text-2xl font-syne font-bold text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-5 text-zinc-400 leading-relaxed text-[0.975rem]"
          >
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I&apos;m a{' '}
              <span className="text-zinc-200 font-medium">
                Web3 frontend developer
              </span>{' '}
              who spent over a year building dApps at{' '}
              <span className="text-emerald-400 font-medium">
                Andromeda Protocol
              </span>{' '}
              — a blockchain startup on the Cosmos ecosystem. I wasn&apos;t
              given small isolated tasks; I had full ownership over real products
              that people used.
            </p>
            <p>
              The startup environment forced me to learn fast, think
              independently, and write{' '}
              <span className="text-zinc-200 font-medium">
                production-level code
              </span>{' '}
              without a safety net. If something broke, I figured it out. If
              something could be better, I improved it without waiting for
              instructions.
            </p>
            <p>
              Beyond Web3, I have a strong computer science foundation — I work
              across the full stack with{' '}
              <span className="text-zinc-200 font-medium">
                React, TypeScript, and Spring Boot
              </span>
              , and have explored machine learning and real-time systems through
              my CS degree.
            </p>
            <p className="text-zinc-500 text-sm border-l-2 border-emerald-400/30 pl-4 italic">
              That experience turned me from a learner into a developer who can
              deliver — and that&apos;s what I bring to every project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
