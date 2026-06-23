import { motion } from 'framer-motion'
import { LuArrowRight, LuChevronDown } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa'
import ThreeCanvas from '../components/ui/ThreeCanvas'
import { useTypewriter } from '../hooks/useTypewriter'
import { typeTexts } from '../constants/data'

export default function Hero() {
  const typed = useTypewriter(typeTexts)

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      <ThreeCanvas />

      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,136,0.010) 3px, rgba(0,255,136,0.010) 4px)',
          zIndex: 1,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(3,3,5,0.85) 100%)', zIndex: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse" />
          <span className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.45em]">Sistema Online · Disponível para Projetos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="font-black leading-none mb-8"
        >
          <span className="block text-[14vw] md:text-[9.5vw] lg:text-[112px] xl:text-[136px] text-[#c0c0d0] leading-[0.95]">
            CLEISSON
          </span>
          <span
            className="block text-[14vw] md:text-[9.5vw] lg:text-[112px] xl:text-[136px] leading-[0.95]"
            style={{ WebkitTextStroke: '2px #00ff88', color: 'transparent' }}
          >
            VILELA
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="text-[#a855f7] font-mono text-base">&gt;_</span>
          <span className="text-[#c0c0d0] font-mono text-base md:text-xl min-w-[200px] md:min-w-[340px]">{typed}</span>
          <span className="inline-block w-0.5 h-5 bg-[#00ff88] cursor-blink" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/5511945678901"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00ff88] text-[#030305] font-mono font-black text-sm hover:bg-[#1affaa] transition-colors"
          >
            <FaWhatsapp size={15} />
            Solicitar Orçamento
            <LuArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1a1a2e] text-[#444466] font-mono text-sm hover:border-[#00ff88]/40 hover:text-[#00ff88] transition-all"
          >
            Ver Projetos <LuChevronDown size={14} />
          </a>
        </motion.div>
      </div>

      {/* HUD bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 border-t border-[#1a1a2e]/60 px-6 py-3 flex justify-between items-center"
        style={{ zIndex: 2, background: 'rgba(3,3,5,0.6)', backdropFilter: 'blur(8px)' }}
      >
        {[
          ['PROJ', '10 SITES'],
          ['STACK', '10 TECH'],
          ['LOC', 'BRASIL'],
          ['STATUS', 'FREELANCE'],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-[#1a1a2e] font-mono text-[9px] uppercase tracking-widest hidden sm:block">{label}:</span>
            <span className="text-[#00ff88] font-mono text-[10px] font-bold tracking-widest">{value}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
