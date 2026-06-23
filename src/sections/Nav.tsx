import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuGithub, LuMenu, LuX } from 'react-icons/lu'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#030305]/96 backdrop-blur-xl border-b border-[#1a1a2e]' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-mono font-black text-lg flex items-center gap-1">
          <span className="text-[#00ff88]">&gt;</span>
          <span className="text-[#c0c0d0]">CV</span>
          <span className="text-[#a855f7]">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[['#stack', 'Stack'], ['#projetos', 'Projetos'], ['#sobre', 'Sobre'], ['#contato', 'Contato']].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[10px] font-mono text-[#444466] hover:text-[#00ff88] transition-colors uppercase tracking-[0.25em]"
            >
              {label}
            </a>
          ))}
          <a href="https://github.com/CleissonV" target="_blank" rel="noreferrer" className="text-[#444466] hover:text-[#00ff88] transition-colors">
            <LuGithub size={16} />
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#444466] hover:text-[#00ff88] transition-colors">
          {menuOpen ? <LuX size={18} /> : <LuMenu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#1a1a2e] bg-[#030305] overflow-hidden"
          >
            <div className="flex flex-col gap-5 p-6 font-mono text-sm">
              {[['#stack', 'Stack'], ['#projetos', 'Projetos'], ['#sobre', 'Sobre'], ['#contato', 'Contato']].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-[#444466] hover:text-[#00ff88] transition-colors">{label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
