import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { TechItem } from '../../types'
import HudCorners from './HudCorners'

interface Props {
  tech: TechItem
  index: number
}

export default function TechCard({ tech, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-[#080810] p-6 flex flex-col items-center gap-3 cursor-default transition-all duration-300"
      style={{
        boxShadow: hovered ? `0 0 24px ${tech.color}30, 0 0 48px ${tech.color}10` : 'none',
      }}
    >
      <HudCorners color={hovered ? tech.color : '#1a1a2e'} />
      <tech.icon
        size={32}
        style={{ color: hovered ? tech.color : '#444466', transition: 'color 0.3s, filter 0.3s', filter: hovered ? `drop-shadow(0 0 8px ${tech.color}80)` : 'none' }}
      />
      <div className="text-center">
        <div className="text-[#c0c0d0] text-sm font-bold">{tech.name}</div>
        <div className="text-[#444466] text-[10px] font-mono mt-0.5">{tech.desc}</div>
      </div>
    </motion.div>
  )
}
