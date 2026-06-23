import { motion } from 'framer-motion'
import { LuArrowRight } from 'react-icons/lu'
import HudCorners from '../components/ui/HudCorners'
import { contactItems } from '../constants/data'

export default function Contact() {
  return (
    <section id="contato" className="py-28 border-t border-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.4em] mb-8"
        >
          Contato
        </motion.p>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-7xl leading-none"
          >
            Vamos<br />
            <span style={{ WebkitTextStroke: '2px #00ff88', color: 'transparent' }}>CONSTRUIR</span>
            <br />juntos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#444466] text-sm font-mono max-w-xs leading-relaxed"
          >
            Disponível para projetos freelance, consultorias e desenvolvimento de produtos digitais. Resposta em até 24h.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a2e]">
          {contactItems.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group bg-[#080810] p-8 flex flex-col gap-4 hover:bg-[#0c0c18] transition-colors"
            >
              <HudCorners color={c.color} />
              <c.icon size={22} style={{ color: c.color }} />
              <div>
                <div className="font-bold text-[#c0c0d0] text-sm">{c.label}</div>
                <div className="text-[#333355] text-[11px] font-mono mt-0.5 break-all">{c.sub}</div>
              </div>
              <LuArrowRight
                size={14}
                className="mt-auto text-[#1a1a2e] group-hover:translate-x-1 transition-all"
                style={{ color: 'inherit' }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
