import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import About from './sections/About'
import Experience from './sections/Experience'
import Stack from './sections/Stack'
import Contact from './sections/Contact'
import ArcaneZone from './components/ui/ArcaneZone'
import ServicePage from './pages/ServicePage'
import { isServicePath } from './content/servicePages'

export default function App() {
  const pathname = window.location.pathname

  if (isServicePath(pathname)) return <ServicePage pathname={pathname} />

  return (
    <main className="site-shell">
      <Nav />
      <Hero />
      <ArcaneZone>
        <Services />
      </ArcaneZone>
      <ArcaneZone>
        <Projects />
        <About />
        <Experience />
        <Stack />
      </ArcaneZone>
      <Contact />
    </main>
  )
}
