import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { LuArrowDown, LuVolume2 } from 'react-icons/lu'
import type { Language } from '../../i18n/translations'
import { trackEvent } from '../../utils/tracking'

type CommercialVideoHeroProps = {
  language: Language
  service: string
  whatsappUrl: string
  primaryCta: string
}

export default function CommercialVideoHero({ language, service, whatsappUrl, primaryCta }: CommercialVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const copy = language === 'pt'
    ? {
        eyebrow: 'Veja antes de decidir',
        title: 'Antes de explicar, melhor mostrar.',
        text: 'Em pouco mais de um minuto, veja como estratégia, tecnologia e design transformam ideias em experiências digitais profissionais.',
        duration: 'Vídeo • 1 min 11 s',
        explore: 'Conhecer esta solução',
        label: 'Apresentação de projetos e soluções digitais de Clei Vilela',
        sound: 'Ativar som',
      }
    : {
        eyebrow: 'See it before deciding',
        title: 'Better to show than explain.',
        text: 'In just over a minute, see how strategy, technology and design turn ideas into professional digital experiences.',
        duration: 'Video • 1 min 11 sec',
        explore: 'Explore this solution',
        label: 'Clei Vilela digital projects and solutions showcase',
        sound: 'Turn sound on',
      }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const enableSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    setIsMuted(false)
    video.play().catch(() => undefined)
    trackEvent('commercial_video_sound_on', { service })
  }

  return (
    <section className="commercial-video-hero" aria-labelledby="commercial-video-title">
      <div className="commercial-video-hero__glow" aria-hidden="true" />
      <div className="commercial-video-hero__grid" aria-hidden="true" />
      <div className="container commercial-video-hero__inner">
        <motion.header
          className="commercial-video-hero__heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="commercial-eyebrow">{copy.eyebrow}</span>
            <h1 id="commercial-video-title">{copy.title}</h1>
          </div>
          <div className="commercial-video-hero__intro">
            <p>{copy.text}</p>
            <span>{copy.duration}</span>
          </div>
        </motion.header>

        <motion.div
          className="commercial-video-hero__frame"
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <video
            ref={videoRef}
            controls
            autoPlay
            muted={isMuted}
            playsInline
            preload="metadata"
            poster="/assets/comercial-clei-poster.jpg"
            aria-label={copy.label}
            onPlay={() => trackEvent('commercial_video_play', { service })}
            onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
          >
            <source src="/assets/comercial-clei.mp4" type="video/mp4" />
          </video>
          {isMuted ? (
            <button className="commercial-video-hero__sound" type="button" onClick={enableSound}>
              <LuVolume2 aria-hidden="true" /> {copy.sound}
            </button>
          ) : null}
        </motion.div>

        <div className="commercial-video-hero__actions">
          <a
            className="button button--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('contact_click', { service, location: 'video_hero' })}
          >
            <FaWhatsapp aria-hidden="true" /> {primaryCta}
          </a>
          <a className="button button--outline" href="#servico-principal">
            <LuArrowDown aria-hidden="true" /> {copy.explore}
          </a>
        </div>
      </div>
    </section>
  )
}
