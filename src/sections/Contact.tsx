import { type CSSProperties, type PointerEvent as ReactPointerEvent, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { LuArrowRight } from 'react-icons/lu'
import { getWhatsappUrl } from '../constants/contact'
import { useLanguage } from '../i18n/LanguageContext'
import { trackEvent } from '../utils/tracking'
import Footer from './Footer'

const sparkles = [
  { left: '5%', top: '19%', size: 3, delay: 0.2, duration: 4.1 },
  { left: '12%', top: '63%', size: 5, delay: 1.5, duration: 5.2 },
  { left: '21%', top: '31%', size: 3, delay: 2.2, duration: 3.7 },
  { left: '30%', top: '79%', size: 4, delay: 0.8, duration: 4.8 },
  { left: '39%', top: '39%', size: 6, delay: 2.8, duration: 5.5 },
  { left: '47%', top: '17%', size: 3, delay: 1.1, duration: 4.4 },
  { left: '54%', top: '72%', size: 4, delay: 3.4, duration: 3.9 },
  { left: '61%', top: '28%', size: 5, delay: 0.5, duration: 5.1 },
  { left: '69%', top: '54%', size: 3, delay: 2.5, duration: 4.2 },
  { left: '76%', top: '21%', size: 4, delay: 1.8, duration: 5.6 },
  { left: '84%', top: '67%', size: 6, delay: 0.3, duration: 4.7 },
  { left: '93%', top: '37%', size: 3, delay: 3.1, duration: 3.8 },
  { left: '8%', top: '42%', size: 2, delay: 0.7, duration: 2.4 },
  { left: '16%', top: '83%', size: 3, delay: 1.2, duration: 2.9 },
  { left: '25%', top: '55%', size: 2, delay: 0.1, duration: 2.1 },
  { left: '34%', top: '14%', size: 4, delay: 1.7, duration: 3.2 },
  { left: '43%', top: '61%', size: 2, delay: 0.9, duration: 2.6 },
  { left: '51%', top: '34%', size: 3, delay: 1.4, duration: 2.3 },
  { left: '58%', top: '87%', size: 2, delay: 0.4, duration: 3.1 },
  { left: '65%', top: '12%', size: 3, delay: 1.9, duration: 2.7 },
  { left: '72%', top: '76%', size: 2, delay: 0.6, duration: 2.2 },
  { left: '80%', top: '44%', size: 4, delay: 1.1, duration: 3.3 },
  { left: '88%', top: '18%', size: 2, delay: 0.2, duration: 2.5 },
  { left: '96%', top: '81%', size: 3, delay: 1.6, duration: 2.8 },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { language, t } = useLanguage()
  const contacts = [
    { icon: FaWhatsapp, title: 'whatsapp', text: t.contact.quickReply, href: getWhatsappUrl(language) },
    { icon: FaLinkedinIn, title: 'linkedin', text: '/in/cleisson-vilela', href: 'https://linkedin.com/in/cleisson-vilela' },
    { icon: FaGithub, title: 'github', text: '/cleissonv', href: 'https://github.com/CleissonV' },
    { icon: FaEnvelope, title: 'e-mail', text: 'cleissonsilva1@hotmail.com', href: 'mailto:cleissonsilva1@hotmail.com' },
  ]
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const backgroundScrollY = useTransform(scrollYProgress, [0, 1], [-90, 90])
  const backgroundX = useSpring(useTransform(pointerX, value => value * -24), { stiffness: 65, damping: 22 })
  const backgroundY = useSpring(useTransform(pointerY, value => value * -16), { stiffness: 65, damping: 22 })
  const sparkleX = useSpring(useTransform(pointerX, value => value * -38), { stiffness: 70, damping: 20 })
  const sparkleY = useSpring(useTransform(pointerY, value => value * -26), { stiffness: 70, damping: 20 })
  const contentX = useSpring(useTransform(pointerX, value => value * 8), { stiffness: 80, damping: 22 })
  const contentY = useSpring(useTransform(pointerY, value => value * 6), { stiffness: 80, damping: 22 })
  const parallaxX = useSpring(useTransform(pointerX, value => value * 28), { stiffness: 75, damping: 20 })
  const parallaxY = useSpring(useTransform(pointerY, value => value * 20), { stiffness: 75, damping: 20 })

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (reduceMotion) return

    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  function resetParallax() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section ref={sectionRef} id="contato" className="contact" onPointerMove={handlePointerMove} onPointerLeave={resetParallax}>
      <motion.div className="contact__bg-parallax" style={reduceMotion ? undefined : { y: backgroundScrollY }}>
        <motion.img
          className="contact__bg"
          src="/assets/contact-bg.png"
          alt=""
          loading="lazy"
          decoding="async"
          style={reduceMotion ? undefined : { x: backgroundX, y: backgroundY }}
        />
      </motion.div>
      <motion.div
        className="contact__sparkles"
        aria-hidden="true"
        style={reduceMotion ? undefined : { x: sparkleX, y: sparkleY }}
      >
        {sparkles.map((sparkle, index) => (
          <motion.span
            key={index}
            className={`contact__sparkle ${index % 3 === 1 ? 'contact__sparkle--blue' : ''}`}
            style={{
              left: sparkle.left,
              top: sparkle.top,
              '--sparkle-size': `${sparkle.size}px`,
            } as CSSProperties}
            animate={reduceMotion ? undefined : {
              opacity: [0.08, 1, 0.22, 0.82, 0.08],
              scale: [0.55, 1.5, 0.78, 1.18, 0.55],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="container contact__inner"
        style={reduceMotion ? undefined : { x: contentX, y: contentY }}
      >
        <div className="section-heading section-heading--center contact__heading">
          <span>{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.description}<br /><strong>{t.contact.response}</strong></p>
        </div>

        <div className="contact__grid">
          <div className="contact__links">
            {contacts.map((item, index) => (
              <motion.a
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="contact-card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('contact_click', { service: 'portfolio', location: 'contact', channel: item.title })}
              >
                <item.icon />
                <div><strong>{item.title}</strong><span>{item.text}</span></div>
                <LuArrowRight className="contact-card__arrow" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="contact__art"
            style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
          >
            <div className="contact__arcane-ring">
              <motion.img
                src="/assets/magic-circle.png"
                alt=""
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
              />
            </div>
            <img className="contact__envelope" src="/assets/contact-envelope-layer.png" alt={t.contact.envelopeAlt} loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </section>
  )
}
