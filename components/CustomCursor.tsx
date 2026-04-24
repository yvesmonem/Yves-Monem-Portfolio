'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { damping: 22, stiffness: 260, mass: 0.4 })
  const springY = useSpring(mouseY, { damping: 22, stiffness: 260, mass: 0.4 })

  // Center the dot (6px) and ring (28px) on the cursor position
  const dotX = useTransform(mouseX, v => v - 3)
  const dotY = useTransform(mouseY, v => v - 3)
  const ringX = useTransform(springX, v => v - 14)
  const ringY = useTransform(springY, v => v - 14)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Dot — snaps exactly to cursor */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-emerald-400 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: dotX, y: dotY }}
      />
      {/* Ring — follows with spring delay */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-zinc-500/35 pointer-events-none z-[9998] hidden md:block"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
