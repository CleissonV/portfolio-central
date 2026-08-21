import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { LuChevronLeft, LuChevronRight, LuExternalLink } from 'react-icons/lu'
import ProjectCard from '../components/ui/ProjectCard'
import ArcaneCircle from '../components/ui/ArcaneCircle'
import { projects, typeFilters } from '../constants/data'
import { useLanguage } from '../i18n/LanguageContext'
import { getProjectTypeLabel } from '../i18n/translations'

const featuredProjects = [
  {
    key: 'grimo',
    name: 'Grimo',
    image: '/assets/projects/grimo-featured.png',
    demo: 'https://grimoapp.vercel.app/',
  },
  {
    key: 'tengu',
    name: 'TENGU 天狗',
    image: '/assets/projects/site-game-tengu-featured.png',
    github: 'https://github.com/CleissonV/site-game-tengu',
    demo: 'https://game-tengu.vercel.app',
  },
  {
    key: 'starwars',
    name: 'STAR WARS: ERAS',
    image: '/assets/projects/site-starwars-eras-featured.png',
    github: 'https://github.com/CleissonV/site-starwars-eras',
    demo: 'https://starwars-eras.vercel.app',
  },
  {
    key: 'lumiere',
    name: 'LUMIÈRE',
    image: '/assets/projects/lp-ecommerce-moda-featured.png',
    github: 'https://github.com/CleissonV/lp-ecommerce-moda',
    demo: 'https://moda-vitrine-br.vercel.app',
  },
]

export default function Projects() {
  const { language, t } = useLanguage()
  const [filter, setFilter] = useState('Todos')
  const [showAllMobile, setShowAllMobile] = useState(false)
  const [activeFeatured, setActiveFeatured] = useState(0)
  const [featuredPaused, setFeaturedPaused] = useState(false)
  const filtered = filter === 'Todos' ? projects : projects.filter(project => project.type === filter)
  const featured = featuredProjects[activeFeatured]
  const featuredText = t.featured.items[featured.key]
  const previousFeatured = featuredProjects[(activeFeatured - 1 + featuredProjects.length) % featuredProjects.length]
  const nextFeatured = featuredProjects[(activeFeatured + 1) % featuredProjects.length]

  useEffect(() => {
    if (featuredPaused) return

    const timer = window.setInterval(() => {
      setActiveFeatured(current => (current + 1) % featuredProjects.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [featuredPaused])

  const changeFeatured = (step: number) => {
    setActiveFeatured(current => (current + step + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <>
      <section
        className="featured"
        aria-label={t.featured.aria}
        onMouseEnter={() => setFeaturedPaused(true)}
        onMouseLeave={() => setFeaturedPaused(false)}
        onFocusCapture={() => setFeaturedPaused(true)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setFeaturedPaused(false)
        }}
      >
        <button
          type="button"
          className="featured__side featured__side--left"
          style={{ backgroundImage: `linear-gradient(rgba(23, 18, 61, .48), rgba(23, 18, 61, .72)), url('${previousFeatured.image}')` }}
          onClick={() => changeFeatured(-1)}
          aria-label={`${t.featured.previousAria}: ${previousFeatured.name}`}
        >
          <span>
            <small>{t.featured.previous}</small>
            <strong>{previousFeatured.name}</strong>
          </span>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={featured.name}
            initial={{ opacity: 0, y: 24, scale: .985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: .985 }}
            transition={{ duration: .48, ease: [0.22, 1, 0.36, 1] }}
            className="featured__card"
          >
            <div className="featured__visual">
              <img src={featured.image} alt={`${t.projects.imageAlt} ${featured.name}`} />
            </div>
            <div className="featured__copy">
              <span>{t.featured.highlight}</span>
              <h2 className={featured.name.length > 12 ? 'featured__title--long' : ''}>{featured.name}</h2>
              <strong>{featuredText.type}</strong>
              <small className="featured__origin">{featuredText.origin}</small>
              <p>{featuredText.desc}</p>
              <div className="featured__focus">
                <span>{t.featured.focus}</span>
                <strong>{featuredText.focus}</strong>
              </div>
              <div className="featured__actions">
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                )}
                <a href={featured.demo} target="_blank" rel="noreferrer"><LuExternalLink /> {t.featured.viewSite}</a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          className="featured__side featured__side--right"
          style={{ backgroundImage: `linear-gradient(rgba(23, 18, 61, .48), rgba(23, 18, 61, .72)), url('${nextFeatured.image}')` }}
          onClick={() => changeFeatured(1)}
          aria-label={`${t.featured.nextAria}: ${nextFeatured.name}`}
        >
          <span>
            <small>{t.featured.next}</small>
            <strong>{nextFeatured.name}</strong>
          </span>
        </button>

        <div className="featured__controls" aria-label={t.featured.controlsAria}>
          <button type="button" onClick={() => changeFeatured(-1)} aria-label={t.featured.previousControl}>
            <LuChevronLeft />
          </button>
          <div className="featured__dots">
            {featuredProjects.map((project, index) => (
              <button
                type="button"
                key={project.name}
                className={index === activeFeatured ? 'active' : ''}
                onClick={() => setActiveFeatured(index)}
                aria-label={`${t.featured.show} ${project.name}`}
                aria-current={index === activeFeatured ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={() => changeFeatured(1)} aria-label={t.featured.nextControl}>
            <LuChevronRight />
          </button>
        </div>
      </section>

      <section id="projetos" className="projects section">
        <ArcaneCircle className="magic-circle--projects" duration={54} depth={38} />
        <ArcaneCircle className="magic-circle--projects-middle magic-circle--faint" duration={68} direction={-1} depth={24} />
        <ArcaneCircle className="magic-circle--projects-bottom" duration={46} depth={32} />
        <div className="container">
          <div className="section-heading section-heading--center">
            <span>{t.projects.eyebrow}</span>
            <h2>{t.projects.title}</h2>
            <p className="projects__intro">{t.projects.intro}</p>
          </div>

          <div className="filters" aria-label={t.projects.filterAria}>
            {typeFilters.map(item => (
              <button
                key={item}
                className={filter === item ? 'active' : ''}
                onClick={() => {
                  setFilter(item)
                  setShowAllMobile(false)
                }}
              >
                {item === 'Landing Page' ? t.projects.landingPages : getProjectTypeLabel(language, item)}
              </button>
            ))}
          </div>

          <motion.div layout className="projects__grid">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                mobileHidden={!showAllMobile && index >= 6}
              />
            ))}
          </motion.div>

          {filtered.length > 6 ? (
            <button
              type="button"
              className="projects__more button button--outline"
              onClick={() => setShowAllMobile(current => !current)}
              aria-expanded={showAllMobile}
            >
              {showAllMobile
                ? t.projects.showLess
                : `${t.projects.showMore} ${filtered.length - 6} ${t.projects.projectsWord}`}
            </button>
          ) : null}
        </div>
      </section>
    </>
  )
}
