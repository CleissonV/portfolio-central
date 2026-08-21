import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { LuExternalLink } from 'react-icons/lu'
import { getWhatsappUrl } from '../constants/contact'
import { useLanguage } from '../i18n/LanguageContext'
import { trackEvent } from '../utils/tracking'

export default function Hero() {
  const [loreOpen, setLoreOpen] = useState(false)
  const loreRef = useRef<HTMLDivElement>(null)
  const { language, t } = useLanguage()
  const whatsappUrl = getWhatsappUrl(language)

  useEffect(() => {
    if (!loreOpen) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!loreRef.current?.contains(event.target as Node)) setLoreOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLoreOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [loreOpen])

  return (
    <section id="top" className="hero">
      <img className="hero__bg" src="/assets/hero-layer-background-with-crystals.png" alt="" decoding="async" />
      <img className="hero__circles" src="/assets/hero-circles.png" alt="" aria-hidden="true" decoding="async" />
      <img className="hero__layer hero__layer--cape" src="/assets/hero-layer-cape.png" alt="" aria-hidden="true" decoding="async" />
      <img className="hero__layer hero__layer--hair" src="/assets/hero-layer-hair.png" alt="" aria-hidden="true" decoding="async" />
      <img className="hero__layer hero__layer--body" src="/assets/hero-layer-body.png" alt="" aria-hidden="true" decoding="async" />
      <img className="hero__layer hero__layer--sword-glow" src="/assets/hero-layer-sword.png" alt="" aria-hidden="true" decoding="async" />
      <img className="hero__layer hero__layer--sword" src="/assets/hero-layer-sword.png" alt="" aria-hidden="true" decoding="async" />
      <div className="hero__twinkles" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <i
            key={index}
            className="hero__twinkle"
            style={{
              left: index === 9 ? '61%' : index === 16 ? '64%' : index === 21 ? '88%' : `${8 + ((index * 37) % 88)}%`,
              top: `${5 + ((index * 23) % 58)}%`,
              animationDelay: `-${(index % 8) * .43}s`,
              animationDuration: `${2.1 + (index % 5) * .38}s`,
              background: index % 4 === 0 ? '#55cfff' : '#fff',
            }}
          />
        ))}
      </div>
      <div className="hero__veil" />

      <aside
        className={`hero__lore ${loreOpen ? 'hero__lore--open' : ''}`}
        aria-label={t.hero.loreAria}
      >
        <div ref={loreRef} className="hero__lore-content">
          <div className="hero__lore-card" id="hero-lore-card">
            <span>{t.hero.loreEyebrow}</span>
            <strong>{t.hero.loreTitle}</strong>
            <p>
              {t.hero.loreStarWarsBefore}<em>Star Wars</em>{t.hero.loreStarWarsAfter}
              <em>The Witcher</em>{t.hero.loreWitcherAfter}
              <em>The Midnight Gospel</em>{t.hero.loreMidnightAfter}
            </p>
            <a
              href="https://www.lucasfilm.com/news/greg-hildebrandt/"
              target="_blank"
              rel="noreferrer"
            >
              <LuExternalLink /> {t.hero.loreLink}
            </a>
          </div>
          <button
            className="hero__lore-trigger"
            type="button"
            aria-expanded={loreOpen}
            aria-controls="hero-lore-card"
            onClick={() => setLoreOpen(open => !open)}
          >
            <span aria-hidden="true">✦</span> {t.hero.origin}
          </button>
          <span className="hero__lore-hint">
            {loreOpen ? t.hero.closeHint : t.hero.openHint}
          </span>
        </div>
      </aside>

      <a
        className="hero__art-credit"
        href="https://www.instagram.com/jothanan_/"
        target="_blank"
        rel="noreferrer"
        aria-label={t.hero.creditAria}
      >
        <FaInstagram aria-hidden="true" />
        <span>{t.hero.creditBy}</span>
        <strong>Jonathan Teixeira da Silva · @jothanan_</strong>
      </a>

      <div className="container hero__content">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="hero__role"
        >
          {t.hero.role}
        </motion.span>
        <h1 className="hero__title">
          <span className="sr-only">Clei Vilela — Desenvolvedor de Software e Soluções Digitais</span>
          <motion.img
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="hero__name"
            src="/assets/hero-name.svg"
            alt=""
            aria-hidden="true"
          />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 }}
        className="hero__tagline"
        >
          {t.hero.tagline.map((line, index) => (
            <span key={line}>{line}{index < t.hero.tagline.length - 1 ? <br /> : null}</span>
          ))}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48 }}
          className="hero__actions"
        >
          <a
            className="button button--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('contact_click', { service: 'portfolio', location: 'hero' })}
          >
            <FaWhatsapp /> {t.hero.talk}
          </a>
          <a className="button button--outline" href="#projetos">
            <LuExternalLink /> {t.hero.seeProjects}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
