import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LuMenu, LuX } from 'react-icons/lu'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../../i18n/LanguageContext'

export default function CommercialNav() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const labels = language === 'pt'
    ? { portfolio: 'Portfólio', deliveries: 'Entregas', process: 'Processo', faq: 'Dúvidas', contact: 'Pedir orçamento', open: 'Abrir menu', close: 'Fechar menu' }
    : { portfolio: 'Portfolio', deliveries: 'Deliverables', process: 'Process', faq: 'FAQ', contact: 'Request a quote', open: 'Open menu', close: 'Close menu' }
  const links = [
    ['#entregas', labels.deliveries],
    ['#processo', labels.process],
    ['#faq', labels.faq],
  ]

  return (
    <nav className="nav nav--scrolled commercial-nav" aria-label={language === 'pt' ? 'Navegação comercial' : 'Commercial navigation'}>
      <div className="container nav__inner">
        <a href="/" className="nav__brand" aria-label={labels.portfolio}>
          <img src="/assets/logo-clei-vilela-hero.svg" alt="Clei Vilela" />
        </a>

        <div className="nav__links commercial-nav__links">
          <a href="/">{labels.portfolio}</a>
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <LanguageSwitcher />
          <a className="commercial-nav__cta" href="#contato-servico">{labels.contact}</a>
        </div>

        <div className="nav__mobile-controls">
          <LanguageSwitcher />
          <button
            className="nav__toggle"
            type="button"
            onClick={() => setOpen(current => !current)}
            aria-label={open ? labels.close : labels.open}
            aria-expanded={open}
            aria-controls="commercial-mobile-navigation"
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="commercial-mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav__mobile"
          >
            <a href="/">{labels.portfolio}</a>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a href="#contato-servico" onClick={() => setOpen(false)}>{labels.contact}</a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}
