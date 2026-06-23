import {
  SiReact, SiNodedotjs, SiExpress, SiPrisma,
  SiTailwindcss, SiFramer, SiTypescript, SiVite,
  SiVercel, SiThreedotjs,
} from 'react-icons/si'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa'
import type { Project, TechItem, Stat, ContactItem } from '../types'

export const projects: Project[] = [
  { id: 1, name: 'Ferreira & Associados', slug: 'lp-advogado', demo: 'https://lp-advogado-opal.vercel.app', type: 'Landing Page', segment: 'Advocacia', desc: 'Escritório de advocacia premium. Design dark elegante, partículas douradas animadas, parallax hero.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#c9a84c' },
  { id: 2, name: 'Sorriso Perfeito', slug: 'lp-dentista', demo: 'https://lp-dentista-gules.vercel.app', type: 'Landing Page', segment: 'Odontologia', desc: 'Clínica odontológica moderna. Blob morphing CSS, agendamento online, paleta azul profissional.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#00b4d8' },
  { id: 3, name: 'Dark Ink Studio', slug: 'lp-tatuador', demo: 'https://lp-tatuador.vercel.app', type: 'Landing Page', segment: 'Tatuagem', desc: 'Estúdio de tatuagem underground. Glitch effect, noise texture, vídeo hero, tipografia bold.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#e63946' },
  { id: 4, name: 'NexusAI', slug: 'site-tech-startup', demo: 'https://site-tech-startup.vercel.app', type: 'Institucional', segment: 'Tech / IA', desc: 'Startup de IA futurista. Canvas particles animado, typewriter effect, glassmorphism premium.', tags: ['React', 'Canvas API', 'Framer Motion'], color: '#7c3aed' },
  { id: 5, name: 'Alma Gastronomia', slug: 'lp-restaurante', demo: 'https://lp-restaurante-ten.vercel.app', type: 'Landing Page', segment: 'Restaurante', desc: 'Restaurante Michelin star. Velas SVG animadas, cardápio com tabs interativas, parallax.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#c8902a' },
  { id: 6, name: 'APEX Training', slug: 'lp-academia', demo: 'https://lp-academia-pearl.vercel.app', type: 'Landing Page', segment: 'Academia', desc: 'Academia elite. Contadores animados com easing cúbico, vídeo hero, grid pattern impactante.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#ef233c' },
  { id: 7, name: 'Prestige Imóveis', slug: 'site-imobiliaria', demo: 'https://site-imobiliaria-psi.vercel.app', type: 'Institucional', segment: 'Imobiliária', desc: 'Imobiliária de alto padrão. Gold shimmer, filtro de imóveis, hero com busca e parallax.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#b8860b' },
  { id: 8, name: 'FluxCRM', slug: 'lp-saas', demo: 'https://lp-saas-ivory.vercel.app', type: 'SaaS', segment: 'Software B2B', desc: 'CRM SaaS moderno. Terminal animado, pipeline visual em tempo real, pricing table clean.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#6366f1' },
  { id: 9, name: 'LUMIÈRE', slug: 'lp-ecommerce-moda', demo: 'https://lp-ecommerce-moda.vercel.app', type: 'E-commerce', segment: 'Moda', desc: 'Boutique luxury. Editorial split layout, hover crossfade em produtos, blend cursor custom.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#cbb892' },
  { id: 10, name: 'ORBIT Agency', slug: 'site-agencia-marketing', demo: 'https://site-agencia-marketing-woad.vercel.app', type: 'Agência', segment: 'Marketing', desc: 'Agência digital. Cases em rows fullbleed alternados, serviços como lista expansível, acid lime.', tags: ['React', 'Framer Motion', 'Tailwind'], color: '#b8ff4a' },
  { id: 11, name: 'TENGU 天狗', slug: 'site-game-tengu', demo: 'https://site-game-tengu.vercel.app', type: 'Game', segment: 'Concept Site', desc: 'Site de jogo souls-like de samurai. Partículas de brasa em Canvas API, parallax multicamada, 3 personagens, kanji decorativo.', tags: ['React', 'Canvas API', 'Framer Motion'], color: '#dc2626' },
]

export const thumbs: Record<string, string> = {
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
  'site-game-tengu': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80&auto=format&fit=crop',
}

export const stack: TechItem[] = [
  { name: 'React', desc: 'UI & SPA', color: '#61dafb', icon: SiReact },
  { name: 'Three.js', desc: '3D & WebGL', color: '#00ff88', icon: SiThreedotjs },
  { name: 'Node.js', desc: 'Backend', color: '#68a063', icon: SiNodedotjs },
  { name: 'Express', desc: 'API REST', color: '#e0e0e0', icon: SiExpress },
  { name: 'Prisma', desc: 'ORM / DB', color: '#5eead4', icon: SiPrisma },
  { name: 'TypeScript', desc: 'Type Safety', color: '#3178c6', icon: SiTypescript },
  { name: 'Tailwind', desc: 'Styling', color: '#38bdf8', icon: SiTailwindcss },
  { name: 'Framer', desc: 'Animações', color: '#ff0055', icon: SiFramer },
  { name: 'Vite', desc: 'Build Tool', color: '#646cff', icon: SiVite },
  { name: 'Vercel', desc: 'Deploy / CI', color: '#f5f5f5', icon: SiVercel },
]

export const typeTexts: string[] = [
  'Full Stack Developer.',
  'React & Node.js Specialist.',
  'UI Designer & Animator.',
  'Building premium web products.',
]

export const typeFilters: string[] = ['Todos', 'Landing Page', 'Institucional', 'E-commerce', 'SaaS', 'Agência', 'Game']

export const stats: Stat[] = [
  { n: '11+', l: 'Sites entregues', c: '#00ff88' },
  { n: '100%', l: 'React & Modern Stack', c: '#a855f7' },
  { n: '10', l: 'Tecnologias no arsenal', c: '#00d4ff' },
  { n: '∞', l: 'Atenção aos detalhes', c: '#00ff88' },
]

export const contactItems: ContactItem[] = [
  { icon: FaWhatsapp, label: 'WhatsApp', sub: 'Resposta rápida', href: 'https://wa.me/5511945678901', color: '#25d366' },
  { icon: LuLinkedin, label: 'LinkedIn', sub: '/in/cleisson-vilela', href: 'https://linkedin.com/in/cleisson-vilela', color: '#0a66c2' },
  { icon: LuGithub, label: 'GitHub', sub: '/CleissonV', href: 'https://github.com/CleissonV', color: '#c0c0d0' },
  { icon: LuMail, label: 'Email', sub: 'cleissonvilela23@gmail.com', href: 'mailto:cleissonvilela23@gmail.com', color: '#00ff88' },
]
