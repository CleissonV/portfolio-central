import { useEffect, useState, type FocusEvent, type KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LuChevronLeft, LuChevronRight, LuExternalLink } from 'react-icons/lu'
import { useLanguage } from '../../i18n/LanguageContext'
import { trackEvent } from '../../utils/tracking'

const slides = [
  '/assets/projects/lp-ecommerce-moda-service.png',
  '/assets/projects/lumiere-carousel-1.png',
  '/assets/projects/lumiere-carousel-2.png',
  '/assets/projects/lumiere-carousel-3.png',
  '/assets/projects/lumiere-carousel-4.png',
]

export default function EcommerceHeroCarousel({ projectUrl }: { projectUrl: string }) {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const image = slides[activeIndex]
  const labels = language === 'pt'
    ? { carousel: 'Telas do projeto Lumière', previous: 'Tela anterior', next: 'Próxima tela', goTo: 'Mostrar tela', view: 'Ver projeto', item: 'tela', caption: 'LUMIÈRE · E-COMMERCE' }
    : { carousel: 'Lumière project screens', previous: 'Previous screen', next: 'Next screen', goTo: 'Show screen', view: 'View project', item: 'screen', caption: 'LUMIÈRE · E-COMMERCE' }

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => setActiveIndex(index => (index + 1) % slides.length), 5500)
    return () => window.clearInterval(timer)
  }, [paused])

  const move = (direction: number) => setActiveIndex(index => (index + direction + slides.length) % slides.length)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') move(-1)
    if (event.key === 'ArrowRight') move(1)
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false)
  }

  return (
    <div className="commercial-hero__screen landing-carousel" role="region" aria-roledescription="carousel" aria-label={labels.carousel} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={handleBlur} onKeyDown={handleKeyDown}>
      <div className="commercial-hero__screen-bar"><span /><span /><span /></div>
      <div className="landing-carousel__viewport">
        <AnimatePresence mode="wait">
          <motion.a key={image} className="landing-carousel__slide" href={projectUrl} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 28, scale: 0.985 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -28, scale: 0.985 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }} aria-label={`${labels.view}: Lumière`} onClick={() => trackEvent('project_click', { service: 'ecommerce', project: 'lumiere', location: 'hero_carousel' })}>
            <img src={image} alt={`${labels.caption} — ${activeIndex + 1}`} decoding="async" />
            <span className="landing-carousel__caption"><small>{labels.caption}</small><strong>{activeIndex + 1} / {slides.length}</strong><b><LuExternalLink aria-hidden="true" /> {labels.view}</b></span>
          </motion.a>
        </AnimatePresence>
        <button className="landing-carousel__arrow landing-carousel__arrow--previous" type="button" onClick={() => move(-1)} aria-label={labels.previous}><LuChevronLeft aria-hidden="true" /></button>
        <button className="landing-carousel__arrow landing-carousel__arrow--next" type="button" onClick={() => move(1)} aria-label={labels.next}><LuChevronRight aria-hidden="true" /></button>
        <div className="landing-carousel__dots" aria-label={labels.carousel}>
          {slides.map((slide, index) => <button key={slide} type="button" className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)} aria-label={`${labels.goTo}: ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} />)}
        </div>
      </div>
      <span className="sr-only" aria-live="polite">{activeIndex + 1} / {slides.length} {labels.item}</span>
    </div>
  )
}
