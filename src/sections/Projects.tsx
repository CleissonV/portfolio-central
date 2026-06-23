import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ui/ProjectCard'
import { projects, typeFilters } from '../constants/data'

export default function Projects() {
  const [filter, setFilter] = useState('Todos')
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.type === filter)

  return (
    <section id="projetos" className="py-20 border-t border-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.4em] mb-4"
          >
            Portfólio
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-4xl md:text-5xl"
            >
              {filtered.length} Projeto{filtered.length !== 1 ? 's' : ''}.
            </motion.h2>

            <div className="flex flex-wrap gap-2">
              {typeFilters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] border transition-all duration-200"
                  style={{
                    borderColor: filter === f ? '#00ff88' : '#1a1a2e',
                    color: filter === f ? '#00ff88' : '#444466',
                    background: filter === f ? 'rgba(0,255,136,0.07)' : 'transparent',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a2e]">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
