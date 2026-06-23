import { motion } from 'framer-motion'
import { LuLinkedin, LuGithub } from 'react-icons/lu'
import HudCorners from '../components/ui/HudCorners'
import { stats } from '../constants/data'

export default function About() {
  return (
    <section id="sobre" className="py-28 border-t border-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.4em] mb-6"
            >
              Sobre
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-4xl md:text-5xl leading-tight mb-8"
            >
              Full Stack<br />
              <span className="text-[#00ff88]">Developer.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-[#444466] text-sm leading-relaxed"
            >
              <p>
                Desenvolvedor Full Stack especializado em criar experiências web premium que combinam design sofisticado com código de alta qualidade. Construo com React, Node.js, Three.js e um stack moderno para entregar produtos digitais que realmente impressionam.
              </p>
              <p>
                Foco em animações avançadas com Framer Motion, interfaces 3D com Three.js e landing pages com alta taxa de conversão. Cada projeto é construído com atenção obsessiva aos detalhes — da tipografia às microinterações.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 mt-8"
            >
              <a
                href="https://linkedin.com/in/cleisson-vilela"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#1a1a2e] text-[#444466] text-xs font-mono hover:border-[#00ff88]/40 hover:text-[#00ff88] transition-all"
              >
                <LuLinkedin size={13} /> LinkedIn
              </a>
              <a
                href="https://github.com/CleissonV"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#1a1a2e] text-[#444466] text-xs font-mono hover:border-[#00ff88]/40 hover:text-[#00ff88] transition-all"
              >
                <LuGithub size={13} /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-[#1a1a2e]">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-[#080810] p-10"
              >
                <HudCorners color={s.c} />
                <div className="font-black text-5xl mb-2 leading-none" style={{ color: s.c }}>{s.n}</div>
                <div className="text-[#444466] text-[11px] font-mono">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
