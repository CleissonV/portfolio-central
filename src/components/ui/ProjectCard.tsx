import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { LuGithub, LuExternalLink } from 'react-icons/lu'
import type { Project } from '../../types'
import { thumbs } from '../../constants/data'
import HudCorners from './HudCorners'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-[#080810] overflow-hidden cursor-default group transition-all duration-400"
      style={{
        boxShadow: hovered
          ? `0 0 32px ${project.color}28, 0 8px 48px rgba(0,0,0,0.6)`
          : '0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      <HudCorners color={hovered ? project.color : '#1a1a2e'} />

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbs[project.slug]}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-black/50 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/65">
          <a
            href={`https://github.com/CleissonV/${project.slug}`}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border transition-colors"
            style={{ borderColor: project.color, color: project.color, background: `${project.color}12` }}
          >
            <LuGithub size={12} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold transition-colors"
            style={{ backgroundColor: project.color, color: '#030305' }}
          >
            <LuExternalLink size={12} /> Demo
          </a>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border"
            style={{ color: project.color, borderColor: `${project.color}55`, background: `${project.color}12` }}
          >
            {project.type}
          </span>
        </div>
        <div className="absolute top-3 right-3 font-mono text-xs font-bold" style={{ color: `${project.color}40` }}>
          #{String(project.id).padStart(2, '0')}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-[15px] text-[#c0c0d0]">{project.name}</h3>
            <p className="text-[10px] font-mono mt-0.5" style={{ color: project.color }}>{project.segment}</p>
          </div>
          <div className="flex gap-2 mt-0.5 flex-shrink-0">
            <a href={`https://github.com/CleissonV/${project.slug}`} target="_blank" rel="noreferrer" className="text-[#333355] hover:text-[#c0c0d0] transition-colors">
              <LuGithub size={14} />
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-[#333355] hover:text-[#c0c0d0] transition-colors">
              <LuExternalLink size={12} />
            </a>
          </div>
        </div>
        <p className="text-[#444466] text-xs leading-relaxed mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 border border-[#1a1a2e] text-[#333355]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
