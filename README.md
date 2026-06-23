<h1 align="center">Portfolio · Cleisson Vilela</h1>

<p align="center">
  Portfólio pessoal com estética game dev / cyberpunk, cena 3D interativa em Three.js e animações declarativas com Framer Motion.
  <br /><br />
  <a href="https://portfolio-central.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-black?style=flat-square&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Portfólio desenvolvido com foco em impacto visual. A cena 3D no hero usa Three.js puro — sem @react-three/fiber — com 200 partículas em `BufferGeometry`, dois wireframes geométricos animados e paralaxe suave controlada pelo movimento do mouse.

## Funcionalidades

- Cena 3D interativa com Three.js (particles + IcosahedronGeometry + OctahedronGeometry)
- Hook `useTypewriter` customizado com suporte a múltiplos textos e cursor piscante
- Cantos HUD estilo interface de jogo como decoração reutilizável
- Filtro de projetos por categoria (Landing Page, SaaS, E-commerce, etc.)
- Grid de tecnologias com animações de entrada staggered
- Scanline overlay e vignette para estética cyberpunk

## Stack

- **React 18 + TypeScript** — UI tipada e componentes funcionais modernos
- **Three.js** — cena 3D vanilla (sem abstrações, controle total)
- **Tailwind CSS 3** — estilização utility-first
- **Framer Motion 11** — animações declarativas e transições suaves
- **Vite 5** — build rápido com HMR

## Instalação

```bash
git clone https://github.com/CleissonV/portfolio-central
cd portfolio-central
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts          # projetos, stack, stats, contatos
├── types/
│   └── index.ts         # interfaces TypeScript
├── hooks/
│   └── useTypewriter.ts # hook de digitação customizado
├── components/
│   └── ui/
│       ├── HudCorners.tsx
│       ├── TechCard.tsx
│       ├── ProjectCard.tsx
│       └── ThreeCanvas.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Stack.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
