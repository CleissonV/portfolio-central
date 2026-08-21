import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { LuMenu, LuX } from 'react-icons/lu'
import LanguageSwitcher from '../components/ui/LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()
  const links = [
    ['#servicos', t.nav.services],
    ['#projetos', t.nav.projects],
    ['#sobre', t.nav.about],
    ['#stack', t.nav.stack],
    ['#contato', t.nav.contact],
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAndNavigate = (href: string) => {
    setOpen(false)
    window.setTimeout(() => {
      document.querySelector<HTMLElement>(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 220)
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={t.nav.home}>
          <img src="/assets/logo-clei-vilela-hero.svg" alt="Clei Vilela" />
        </a>

        <div className="nav__links">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
            >
              {label}
            </a>
          ))}
          <a href="https://github.com/CleissonV" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <LanguageSwitcher />
        </div>

        <div className="nav__mobile-controls">
          <LanguageSwitcher />
          <button
            className="nav__toggle"
            onClick={() => setOpen(current => !current)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav__mobile"
          >
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => closeAndNavigate(href)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
