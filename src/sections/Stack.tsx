import { motion } from 'framer-motion'
import TechCard from '../components/ui/TechCard'
import { stack } from '../constants/data'

export default function Stack() {
  return (
    <section id="stack" className="py-28 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.4em] mb-4"
        >
          Stack Tecnológica
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black text-4xl md:text-5xl leading-tight"
        >
          Tecnologias<br />
          <span className="text-[#444466] font-normal text-3xl md:text-4xl">que uso todo dia.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[#1a1a2e]">
        {stack.map((tech, i) => (
          <TechCard key={i} tech={tech} index={i} />
        ))}
      </div>
    </section>
  )
}
