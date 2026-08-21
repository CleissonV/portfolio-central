import { useEffect, useState, type FocusEvent, type KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LuChevronLeft, LuChevronRight, LuExternalLink } from 'react-icons/lu'
import { projects, thumbs } from '../../constants/data'
import { useLanguage } from '../../i18n/LanguageContext'
import { getProjectTypeLabel } from '../../i18n/translations'
import { trackEvent } from '../../utils/tracking'

export default function LandingPagesHeroCarousel({ projectType, service }: { projectType: string; service: string }) {
  const { language, t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const carouselProjects = projects.filter(project => project.type === projectType)
  const current = carouselProjects[activeIndex]
  const labels = language === 'pt'
    ? { carousel: projectType === 'Institucional' ? 'Projetos de sites institucionais' : 'Projetos de landing pages', previous: 'Projeto anterior', next: 'Próximo projeto', goTo: 'Mostrar projeto', item: 'projeto' }
    : { carousel: projectType === 'Institucional' ? 'Corporate website projects' : 'Landing page projects', previous: 'Previous project', next: 'Next project', goTo: 'Show project', item: 'project' }

  useEffect(() => {
    if (paused) return

    const timer = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % carouselProjects.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [carouselProjects.length, paused])

  const move = (direction: number) => {
    setActiveIndex(index => (index + direction + carouselProjects.length) % carouselProjects.length)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') move(-1)
    if (event.key === 'ArrowRight') move(1)
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false)
  }

  return (
    <div
      className="commercial-hero__screen landing-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div className="commercial-hero__screen-bar"><span /><span /><span /></div>
      <div className="landing-carousel__viewport">
        <AnimatePresence mode="wait">
          <motion.a
            key={current.slug}
            className="landing-carousel__slide"
            href={current.demo}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 28, scale: 0.985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -28, scale: 0.985 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            aria-label={`${t.projects.viewSite}: ${current.name}`}
            onClick={() => trackEvent('project_click', { service, project: current.slug, location: 'hero_carousel' })}
          >
            <img src={thumbs[current.slug]} alt={`${t.projects.imageAlt} ${current.name}`} decoding="async" />
            <span className="landing-carousel__caption">
              <small>{getProjectTypeLabel(language, current.type)} · {current.segment}</small>
              <strong>{current.name}</strong>
              <b><LuExternalLink aria-hidden="true" /> {t.projects.viewSite}</b>
            </span>
          </motion.a>
        </AnimatePresence>

        <button className="landing-carousel__arrow landing-carousel__arrow--previous" type="button" onClick={() => move(-1)} aria-label={labels.previous}>
          <LuChevronLeft aria-hidden="true" />
        </button>
        <button className="landing-carousel__arrow landing-carousel__arrow--next" type="button" onClick={() => move(1)} aria-label={labels.next}>
          <LuChevronRight aria-hidden="true" />
        </button>

        <div className="landing-carousel__dots" aria-label={labels.carousel}>
          {carouselProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`${labels.goTo}: ${project.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
      <span className="sr-only" aria-live="polite">{activeIndex + 1} / {carouselProjects.length} {labels.item}: {current.name}</span>
    </div>
  )
}
