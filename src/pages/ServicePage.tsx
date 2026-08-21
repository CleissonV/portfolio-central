import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaChartLine, FaCheck, FaCodeBranch, FaCogs, FaDatabase, FaLaptopCode, FaLock, FaWhatsapp } from 'react-icons/fa'
import { LuArrowDown, LuArrowRight, LuExternalLink } from 'react-icons/lu'
import CommercialNav from '../components/ui/CommercialNav'
import EcommerceHeroCarousel from '../components/ui/EcommerceHeroCarousel'
import LandingPagesHeroCarousel from '../components/ui/LandingPagesHeroCarousel'
import SystemsHeroVisual from '../components/ui/SystemsHeroVisual'
import TrafficHeroVisual from '../components/ui/TrafficHeroVisual'
import Footer from '../sections/Footer'
import { getServicePage, listServicePages, type ServiceIcon } from '../content/servicePages'
import { useLanguage } from '../i18n/LanguageContext'
import { trackEvent } from '../utils/tracking'

const icons: Record<ServiceIcon, typeof FaLaptopCode> = {
  automation: FaCogs,
  dashboard: FaChartLine,
  integration: FaCodeBranch,
  security: FaLock,
}

function updateMeta(selector: string, attribute: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute(attribute, value)
}

export default function ServicePage({ pathname }: { pathname: string }) {
  const { language } = useLanguage()
  const page = useMemo(() => getServicePage(pathname, language), [language, pathname])

  useEffect(() => {
    if (!page) return
    window.scrollTo(0, 0)
    document.title = page.meta.title
    updateMeta('meta[name="description"]', 'content', page.meta.description)
    updateMeta('meta[property="og:title"]', 'content', page.meta.title)
    updateMeta('meta[property="og:description"]', 'content', page.meta.description)
    updateMeta('meta[property="og:url"]', 'content', `${window.location.origin}${page.path}`)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', `${window.location.origin}${page.path}`)
  }, [page])

  if (!page) return null

  const whatsappUrl = `https://wa.me/5514998728303?text=${encodeURIComponent(page.whatsappMessage)}`
  const serviceLinks = listServicePages(language)
  const labels = language === 'pt'
    ? { more: 'Outras soluções', explore: 'Explore o ecossistema completo', card: 'Conhecer solução', product: 'produto', evolution: 'pronto para evoluir', proof: 'Diferenciais', image: 'Exemplo visual de', openProject: 'Ver projeto' }
    : { more: 'Other solutions', explore: 'Explore the complete ecosystem', card: 'Explore service', product: 'product', evolution: 'ready to evolve', proof: 'Key strengths', image: 'Visual example of', openProject: 'View project' }

  return (
    <main className={`site-shell commercial-page commercial-page--${page.slug}`}>
      <CommercialNav />

      <section className="commercial-hero">
        <div className="commercial-hero__glow" aria-hidden="true" />
        <div className="commercial-hero__stars" aria-hidden="true" />
        <div className="container commercial-hero__grid">
          <motion.div
            className="commercial-hero__copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="commercial-eyebrow">{page.eyebrow}</span>
            <h1>{page.title}<br /> <em>{page.highlight}</em></h1>
            <p>{page.intro}</p>
            <div className="commercial-hero__actions">
              <a
                className="button button--primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('contact_click', { service: page.slug, location: 'hero' })}
              >
                <FaWhatsapp aria-hidden="true" /> {page.primaryCta}
              </a>
              <a className="button button--outline" href="#entregas">
                <LuArrowDown aria-hidden="true" /> {page.secondaryCta}
              </a>
            </div>
            <div className="commercial-hero__proof" aria-label={labels.proof}>
              {page.proof.map(item => <span key={item}><FaCheck aria-hidden="true" /> {item}</span>)}
            </div>
          </motion.div>

          <motion.div
            className="commercial-hero__visual"
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="commercial-hero__orbit" aria-hidden="true" />
            {page.slug === 'trafego-pago' ? (
              <TrafficHeroVisual />
            ) : page.slug === 'sistemas' ? (
              <SystemsHeroVisual />
            ) : page.slug === 'landing-pages' ? (
              <LandingPagesHeroCarousel projectType="Landing Page" service={page.slug} />
            ) : page.slug === 'sites-institucionais' ? (
              <LandingPagesHeroCarousel projectType="Institucional" service={page.slug} />
            ) : page.slug === 'ecommerce' ? (
              <EcommerceHeroCarousel projectUrl={page.projectUrl} />
            ) : (
              <>
                <div className="commercial-hero__screen">
                  <div className="commercial-hero__screen-bar"><span /><span /><span /></div>
                  <a
                    className="commercial-hero__screen-link"
                    href={page.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${labels.openProject}: ${page.projectName}`}
                    onClick={() => trackEvent('project_click', { service: page.slug, project: page.projectName, location: 'hero_cover' })}
                  >
                    <img src={page.image} alt={`${labels.image} ${page.projectName}`} />
                    <span><LuExternalLink aria-hidden="true" /> {labels.openProject}</span>
                  </a>
                </div>
                <div className="commercial-hero__code-card" aria-hidden="true">
                  <FaDatabase />
                  <span>{labels.product}</span>
                  <strong>{labels.evolution}</strong>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <section className="commercial-section commercial-problem">
        <div className="container">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">{page.problem.eyebrow}</span>
            <h2>{page.problem.title}</h2>
            <p>{page.problem.intro}</p>
          </div>
          <div className="commercial-problem__grid">
            {page.problem.cards.map((card, index) => {
              const Icon = icons[card.icon]
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Icon aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="entregas" className="commercial-section commercial-deliverables">
        <div className="container">
          <div className="commercial-heading commercial-heading--split">
            <div><span className="commercial-eyebrow">{page.deliverables.eyebrow}</span><h2>{page.deliverables.title}</h2></div>
            <p>{page.deliverables.intro}</p>
          </div>
          <div className="commercial-deliverables__grid">
            {page.deliverables.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="commercial-section commercial-process">
        <div className="container">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">{page.process.eyebrow}</span>
            <h2>{page.process.title}</h2>
          </div>
          <ol className="commercial-process__list">
            {page.process.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="commercial-section commercial-fit">
        <div className="container commercial-fit__card">
          <div className="commercial-fit__copy">
            <span className="commercial-eyebrow">{page.fit.eyebrow}</span>
            <h2>{page.fit.title}</h2>
            <p>{page.fit.text}</p>
          </div>
          <ul>
            {page.fit.bullets.map(item => <li key={item}><FaCheck aria-hidden="true" /> {item}</li>)}
          </ul>
        </div>
      </section>

      <section id="faq" className="commercial-section commercial-faq">
        <div className="container commercial-faq__grid">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">{page.faq.eyebrow}</span>
            <h2>{page.faq.title}</h2>
          </div>
          <div className="commercial-faq__items">
            {page.faq.items.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-section commercial-solutions">
        <div className="container">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">{labels.more}</span>
            <h2>{labels.explore}</h2>
          </div>
          <div className="commercial-solutions__grid">
            {serviceLinks.map(item => (
              <a
                key={item.path}
                className={item.slug === page.slug ? 'is-current' : ''}
                href={item.path}
                onClick={() => trackEvent('service_navigation', { from_service: page.slug, to_service: item.slug })}
              >
                <span>{item.label}</span>
                <strong>{labels.card}</strong>
                <LuArrowRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contato-servico" className="commercial-final">
        <div className="commercial-final__glow" aria-hidden="true" />
        <div className="container commercial-final__inner">
          <span className="commercial-eyebrow">{page.finalCta.eyebrow}</span>
          <h2>{page.finalCta.title}</h2>
          <p>{page.finalCta.text}</p>
          <a
            className="button button--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('contact_click', { service: page.slug, location: 'final_cta' })}
          >
            <FaWhatsapp aria-hidden="true" /> {page.finalCta.button} <LuArrowRight aria-hidden="true" />
          </a>
        </div>
        <Footer />
      </section>
    </main>
  )
}
