'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Skill = { name: string; logo: string; invert?: boolean }
type Category = {
  label: string
  skills?: Skill[]
  tags?: string[]
}

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const categories: Category[] = [
  {
    label: 'Frontend & Mobile',
    skills: [
      { name: 'React', logo: `${CDN}/react/react-original.svg` },
      { name: 'Next.js', logo: `${CDN}/nextjs/nextjs-original.svg`, invert: true },
      { name: 'React Native', logo: `${CDN}/react/react-original.svg` },
      { name: 'TailwindCSS', logo: `${CDN}/tailwindcss/tailwindcss-original.svg` },
    ],
    tags: ['Expo', 'Shadcn/UI', 'Chakra UI', 'Zustand'],
  },
  {
    label: 'Backend & APIs',
    skills: [
      { name: 'Spring Boot', logo: `${CDN}/spring/spring-original.svg` },
      { name: 'Node.js', logo: `${CDN}/nodejs/nodejs-original.svg` },
    ],
    tags: ['tRPC', 'Zod', 'REST APIs'],
  },
  {
    label: 'Databases & Search',
    skills: [
      { name: 'PostgreSQL', logo: `${CDN}/postgresql/postgresql-original.svg` },
      { name: 'MySQL', logo: `${CDN}/mysql/mysql-original.svg` },
    ],
    tags: ['Elasticsearch'],
  },
  {
    label: 'Infrastructure & DevOps',
    skills: [
      { name: 'Docker', logo: `${CDN}/docker/docker-original.svg` },
      { name: 'Nginx', logo: `${CDN}/nginx/nginx-original.svg` },
      { name: 'Linux', logo: `${CDN}/linux/linux-original.svg` },
      { name: 'Git', logo: `${CDN}/git/git-original.svg` },
    ],
    tags: ['CI/CD', 'MinIO', 'Object Storage'],
  },
  {
    label: 'Web3 / Blockchain',
    tags: ['CosmWasm', 'Keplr Wallet', 'Andromeda VFS', 'IBC Token Handling', 'Smart Contracts'],
  },
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript', logo: `${CDN}/typescript/typescript-original.svg` },
      { name: 'JavaScript', logo: `${CDN}/javascript/javascript-original.svg` },
      { name: 'Python', logo: `${CDN}/python/python-original.svg` },
      { name: 'Java', logo: `${CDN}/java/java-original.svg` },
      { name: 'Rust', logo: `${CDN}/rust/rust-original.svg`, invert: true },
      { name: 'C++', logo: `${CDN}/cplusplus/cplusplus-original.svg` },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 md:py-36 px-6 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-600 uppercase">
            03 — Stack
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.05]" />
        </motion.div>

        <div className="grid lg:grid-cols-[200px,1fr] gap-12 lg:gap-20 items-start">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-syne font-bold text-3xl text-zinc-100 leading-tight mb-3">
              Technical
              <br />
              stack
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Tools and technologies I reach for.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="space-y-9">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + ci * 0.06 }}
              >
                <span className="text-[10px] font-mono tracking-[0.18em] text-zinc-600 uppercase block mb-3">
                  {cat.label}
                </span>

                <div className="flex flex-wrap gap-2">
                  {/* Icon-based skill pills */}
                  {cat.skills?.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.25 + ci * 0.05 + si * 0.035,
                      }}
                      className="flex items-center gap-2 bg-zinc-900/60 border border-white/[0.06] rounded-lg px-3 py-2 hover:border-white/[0.12] transition-all duration-200"
                    >
                      <div className="w-[22px] h-[22px] bg-white/[0.06] rounded flex items-center justify-center flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          width={14}
                          height={14}
                          className="object-contain"
                          style={
                            skill.invert
                              ? { filter: 'invert(1)', opacity: 0.72 }
                              : undefined
                          }
                        />
                      </div>
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                    </motion.div>
                  ))}

                  {/* Text-only tags */}
                  {cat.tags?.map((tag, ti) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + ci * 0.05 + ti * 0.03,
                      }}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 ${
                        cat.label === 'Web3 / Blockchain'
                          ? 'bg-emerald-400/[0.04] border border-emerald-400/[0.12] hover:border-emerald-400/[0.22]'
                          : 'bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.10]'
                      }`}
                    >
                      {cat.label === 'Web3 / Blockchain' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 flex-shrink-0" />
                      )}
                      <span className="text-sm text-zinc-400">{tag}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
