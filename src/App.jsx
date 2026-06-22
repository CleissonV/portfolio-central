import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaCode, FaLayerGroup, FaRocket } from 'react-icons/fa'
import { SiReact, SiVite, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiPrisma, SiVercel } from 'react-icons/si'

const projects = [
  {
    id: 1,
    name: 'Ferreira & Associados',
    slug: 'lp-advogado',
    demo: 'https://lp-advogado-opal.vercel.app',
    type: 'Landing Page',
    segment: 'Advocacia',
    desc: 'Escritório de advocacia premium. Partículas douradas animadas, design elegante dark com acentos em gold.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#c9a84c',
    bg: 'from-[#1a0a0a] to-[#0a0505]',
    features: ['Partículas animadas', 'Parallax hero', 'Formulário contato', 'Mobile responsive'],
  },
  {
    id: 2,
    name: 'Sorriso Perfeito',
    slug: 'lp-dentista',
    demo: 'https://lp-dentista-gules.vercel.app',
    type: 'Landing Page',
    segment: 'Odontologia',
    desc: 'Clínica odontológica moderna. Blobs animados, agendamento online, paleta azul clean e profissional.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#00b4d8',
    bg: 'from-[#0a1628] to-[#0f2545]',
    features: ['Blob morphing CSS', 'Agendamento form', 'Team cards', 'Pulse button'],
  },
  {
    id: 3,
    name: 'Dark Ink Studio',
    slug: 'lp-tatuador',
    demo: 'https://lp-tatuador.vercel.app',
    type: 'Landing Page',
    segment: 'Tatuagem',
    desc: 'Estúdio de tatuagem underground premium. Efeito glitch, noise texture, tipografia bold impactante.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#e63946',
    bg: 'from-[#1a0505] to-[#050505]',
    features: ['Glitch effect CSS', 'Noise texture', 'Gallery grid', 'Parallax hero'],
  },
  {
    id: 4,
    name: 'NexusAI',
    slug: 'site-tech-startup',
    demo: 'https://site-tech-startup.vercel.app',
    type: 'Site Institucional',
    segment: 'Tecnologia / IA',
    desc: 'Startup de IA futurista. Canvas particles animado, typewriter effect, glassmorphism, código mockup.',
    tags: ['React', 'Canvas API', 'Framer Motion'],
    color: '#7c3aed',
    bg: 'from-[#1a0f3a] to-[#03040f]',
    features: ['Canvas particles', 'Typewriter effect', 'Scan line CSS', 'Dashboard mockup'],
  },
  {
    id: 5,
    name: 'Alma Gastronomia',
    slug: 'lp-restaurante',
    demo: 'https://lp-restaurante-ten.vercel.app',
    type: 'Landing Page',
    segment: 'Restaurante',
    desc: 'Restaurante Michelin star. Chamas de vela animadas em SVG, cardápio interativo com tabs, parallax.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#c8902a',
    bg: 'from-[#2a1505] to-[#0d0700]',
    features: ['Candle SVG animation', 'Menu tabs', 'Parallax hero', 'Reservation form'],
  },
  {
    id: 6,
    name: 'APEX Training',
    slug: 'lp-academia',
    demo: 'https://lp-academia-pearl.vercel.app',
    type: 'Landing Page',
    segment: 'Academia / Fitness',
    desc: 'Academia elite. Contadores animados com easing cúbico, grid pattern, tipografia bold impactante.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#ef233c',
    bg: 'from-[#1a0505] to-[#050505]',
    features: ['Counter animation', 'Fire gradient', 'Programs grid', 'Pricing cards'],
  },
  {
    id: 7,
    name: 'Prestige Imóveis',
    slug: 'site-imobiliaria',
    demo: 'https://site-imobiliaria-psi.vercel.app',
    type: 'Site Institucional',
    segment: 'Imobiliária',
    desc: 'Imobiliária de alto padrão. Gold shimmer, filtro de imóveis por tipo, search bar hero, cards premium.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#b8860b',
    bg: 'from-[#2a1a08] to-[#1a1208]',
    features: ['Property filter', 'Gold shimmer', 'Search hero', 'Dark services section'],
  },
  {
    id: 8,
    name: 'FluxCRM',
    slug: 'lp-saas',
    demo: 'https://lp-saas-ivory.vercel.app',
    type: 'Landing Page SaaS',
    segment: 'Software B2B',
    desc: 'CRM SaaS moderno. Orbs animados, dashboard mockup, FAQ accordion, glassmorphism, pricing tiers.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#8b5cf6',
    bg: 'from-[#1e1335] to-[#0f172a]',
    features: ['Animated orbs', 'Dashboard mockup', 'FAQ accordion', 'Gradient pricing'],
  },
  {
    id: 9,
    name: 'LUMIÈRE',
    slug: 'lp-ecommerce-moda',
    demo: 'https://lp-ecommerce-moda.vercel.app',
    type: 'E-commerce',
    segment: 'Moda Feminina',
    desc: 'Boutique de moda luxury. Editorial split layout, product grid com wishlist, marquee, newsletter.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#9a8c6e',
    bg: 'from-[#2a1a0a] to-[#1a0e05]',
    features: ['Editorial hero', 'Product grid', 'Wishlist toggle', 'Marquee strip'],
  },
  {
    id: 10,
    name: 'ORBIT Agency',
    slug: 'site-agencia-marketing',
    demo: 'https://site-agencia-marketing-woad.vercel.app',
    type: 'Site Agência',
    segment: 'Marketing Digital',
    desc: 'Agência de marketing bold. Stroke typography, dual marquee, cases grid, contact form completo.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: '#ff6b35',
    bg: 'from-[#1a0a00] to-[#0a0a0a]',
    features: ['Stroke typography', 'Dual marquee', 'Cases hover', 'Process steps'],
  },
]

const segments = ['Todos', 'Advocacia', 'Odontologia', 'Tatuagem', 'Tecnologia / IA', 'Restaurante', 'Academia / Fitness', 'Imobiliária', 'Software B2B', 'Moda Feminina', 'Marketing Digital']

const thumbs = {
  'lp-advogado': 'https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=800&q=80&auto=format&fit=crop',
  'lp-dentista': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop',
  'lp-tatuador': 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80&auto=format&fit=crop',
  'site-tech-startup': 'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&q=80&auto=format&fit=crop',
  'lp-restaurante': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop',
  'lp-academia': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop',
  'site-imobiliaria': 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80&auto=format&fit=crop',
  'lp-saas': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  'lp-ecommerce-moda': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&auto=format&fit=crop',
  'site-agencia-marketing': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop',
}

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="project-card bg-[#111] rounded-2xl overflow-hidden cursor-default"
    >
      {/* Preview */}
      <div className={`aspect-video bg-gradient-to-br ${project.bg} relative overflow-hidden flex items-center justify-center`}>
        <img
          src={thumbs[project.slug]}
          alt={project.name}
          loading="lazy"
          className="card-preview absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <div className="text-white font-bold text-lg leading-tight">{project.name}</div>
          <div className="text-xs mt-1 font-medium" style={{ color: project.color }}>{project.segment}</div>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <a
            href={`https://github.com/CleissonV/${project.slug}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <FaGithub size={14} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-white text-xs font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <FaExternalLinkAlt size={12} /> Demo
          </a>
        </div>
        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: project.color + '33', border: `1px solid ${project.color}44` }}>
            {project.type}
          </span>
        </div>
        <div className="absolute top-3 right-3 text-xs font-bold text-white/30">#{String(project.id).padStart(2,'0')}</div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-lg text-white">{project.name}</h3>
            <p className="text-xs font-medium" style={{ color: project.color }}>{project.segment}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a href={`https://github.com/CleissonV/${project.slug}`} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors">
              <FaGithub size={16} />
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors">
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.features.map(f => (
            <span key={f} className="text-xs px-2 py-0.5 rounded-md bg-[#1a1a1a] text-gray-500">{f}</span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-4 border-t border-[#1a1a1a]">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: project.color + '15', color: project.color }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [filter, setFilter] = useState('Todos')
  const { scrollYProgress } = useScroll()

  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.segment === filter)

  const stats = [
    { n: '10', l: 'Projetos', icon: FaLayerGroup },
    { n: '5', l: 'Segmentos', icon: FaCode },
    { n: '100%', l: 'React', icon: FaRocket },
  ]

  return (
    <div className="min-h-screen bg-[#080808]">
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%', background: 'linear-gradient(90deg, #a78bfa, #38bdf8, #34d399)' }}
      />

      {/* Nav */}
      <nav className="fixed w-full z-40 bg-[#080808]/90 backdrop-blur-xl border-b border-[#1a1a1a] py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
              <defs>
                <linearGradient id="navlogo" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#a78bfa" /><stop offset="0.5" stopColor="#38bdf8" /><stop offset="1" stopColor="#34d399" />
                </linearGradient>
              </defs>
              <path d="M16 5l11 6-11 6-11-6z" fill="url(#navlogo)" />
              <path d="M5 16l11 6 11-6" stroke="url(#navlogo)" strokeWidth="1.8" strokeLinejoin="round" opacity="0.7" />
              <path d="M5 21l11 6 11-6" stroke="url(#navlogo)" strokeWidth="1.8" strokeLinejoin="round" opacity="0.45" />
            </svg>
            <div>
              <span className="font-black text-xl text-white">dev</span>
              <span className="font-black text-xl gradient-text">portfolio</span>
              <span className="font-black text-xl text-white">.</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/55SEUNUMERO" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
              <FaWhatsapp size={16} /> WhatsApp
            </a>
            <a href="https://github.com/CleissonV" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#111] border border-[#1a1a1a] rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500">Disponível para novos projetos</span>
          </div>
          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            <span className="text-white">Sites que</span><br />
            <span className="gradient-text">convertem</span><br />
            <span className="text-white">& impressionam</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Desenvolvimento web premium — landing pages, e-commerce, sites institucionais e SaaS. React, animações e design de alto nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)' }}
            >
              <FaWhatsapp size={18} /> Solicitar Orçamento
            </a>
            <a href="#projetos" className="px-8 py-4 bg-[#111] border border-[#222] text-gray-300 rounded-xl font-medium hover:border-[#333] hover:text-white transition-all flex items-center justify-center gap-2">
              Ver Projetos ↓
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-4 bg-[#111] border border-[#1a1a1a] rounded-xl">
              <s.icon className="mx-auto mb-2 text-[#a78bfa]" size={18} />
              <div className="font-black text-2xl gradient-text">{s.n}</div>
              <div className="text-gray-600 text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="py-4 border-y border-[#1a1a1a] overflow-hidden mb-0">
        <div className="flex whitespace-nowrap marquee-track">
          {Array(4).fill(['React', 'Vite', 'Tailwind', 'Framer Motion', 'Node.js', 'Express', 'Prisma', 'TypeScript', 'Next.js', 'Vercel']).flat().map((t, i) => (
            <span key={i} className="text-[#1f1f1f] text-sm font-bold mx-8 uppercase tracking-widest">✦ {t}</span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <section id="projetos" className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[#a78bfa] text-xs tracking-[0.3em] uppercase mb-2">Portfólio</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-black text-4xl md:text-5xl text-white">
              {filtered.length} Projeto{filtered.length !== 1 ? 's' : ''}
            </motion.h2>
          </div>
          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {['Todos', 'Landing Page', 'Site Institucional', 'E-commerce', 'SaaS'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f === 'Todos' ? 'Todos' : projects.find(p => p.type.includes(f.split(' ')[0]))?.segment || f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  (f === 'Todos' && filter === 'Todos') ? 'bg-[#a78bfa] text-white' : 'bg-[#111] border border-[#1a1a1a] text-gray-500 hover:border-[#333] hover:text-gray-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Segment pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {segments.map(seg => (
            <button
              key={seg}
              onClick={() => setFilter(seg)}
              className={`px-3 py-1 rounded-full text-xs transition-all border ${
                filter === seg
                  ? 'border-[#a78bfa] text-[#a78bfa] bg-[#a78bfa]/10'
                  : 'border-[#1a1a1a] text-gray-600 hover:text-gray-400'
              }`}
            >
              {seg}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-[#0d0d0d] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[#a78bfa] text-xs tracking-[0.3em] uppercase mb-3">Stack Tecnológica</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-black text-4xl text-white mb-12">Tecnologias Utilizadas</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'React 18', desc: 'UI Components', color: '#61dafb', icon: SiReact },
              { name: 'Vite', desc: 'Build Tool', color: '#646cff', icon: SiVite },
              { name: 'Tailwind CSS', desc: 'Styling', color: '#38bdf8', icon: SiTailwindcss },
              { name: 'Framer Motion', desc: 'Animações', color: '#ff0055', icon: SiFramer },
              { name: 'Node.js', desc: 'Backend', color: '#68a063', icon: SiNodedotjs },
              { name: 'Express', desc: 'API REST', color: '#cbd5e1', icon: SiExpress },
              { name: 'Prisma', desc: 'ORM', color: '#5eead4', icon: SiPrisma },
              { name: 'Vercel', desc: 'Deploy', color: '#f5f5f5', icon: SiVercel },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#333] transition-colors cursor-default"
              >
                <tech.icon size={28} className="mb-3 mx-auto" style={{ color: tech.color }} />
                <div className="font-bold text-white text-sm">{tech.name}</div>
                <div className="text-gray-600 text-xs mt-0.5">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[#a78bfa] text-xs tracking-[0.3em] uppercase mb-4">Vamos Trabalhar Juntos</p>
          <h2 className="font-black text-5xl md:text-7xl text-white mb-6 leading-none">
            Seu próximo<br /><span className="gradient-text">site premium</span><br />começa aqui
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Landing pages, e-commerce, sites institucionais e muito mais. Entrega rápida, qualidade premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-purple-500/30"
              style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)' }}
            >
              <FaWhatsapp size={22} /> Pedir Orçamento Grátis
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            {[{ icon: FaGithub, href: 'https://github.com/CleissonV', label: 'GitHub' },
              { icon: FaInstagram, href: 'https://instagram.com/CleissonV', label: 'Instagram' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/CleissonV', label: 'LinkedIn' }
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-white transition-colors text-sm">
                <s.icon size={16} /> {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-6 border-t border-[#1a1a1a] text-center">
        <p className="text-gray-700 text-xs">© 2024 · Desenvolvido com React + Vite + Tailwind · Todos os projetos disponíveis no GitHub</p>
      </footer>
    </div>
  )
}
