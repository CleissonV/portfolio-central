import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-[#030305] text-[#c0c0d0]">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 h-px z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          background: 'linear-gradient(90deg, #00ff88, #a855f7, #00d4ff)',
        }}
      />
      <Nav />
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
