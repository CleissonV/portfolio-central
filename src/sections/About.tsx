import { motion, useReducedMotion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ArcaneCircle from '../components/ui/ArcaneCircle'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  return (
    <section id="sobre" className="about section">
      <ArcaneCircle className="magic-circle--about" duration={48} direction={-1} depth={34} />
      <ArcaneCircle className="magic-circle--about-secondary magic-circle--faint" duration={62} depth={22} />
      {!reduceMotion && (
        <motion.div
          className="about__shooting-star-trigger"
          aria-hidden="true"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="about__shooting-star"
            variants={{
              hidden: { x: '-18vw', y: 0, rotate: 4, opacity: 0 },
              visible: {
                x: ['-18vw', '18vw', '48vw', '82vw', '118vw'],
                y: [0, '-35px', '20px', '150px', '430px'],
                rotate: [4, 7, 12, 22, 38],
                opacity: [0, 1, 1, 1, 0],
              },
            }}
            transition={{
              duration: 3.4,
              delay: 0.12,
              times: [0, 0.12, 0.42, 0.76, 1],
              ease: [0.22, 0.74, 0.24, 1],
            }}
          >
            <span />
          </motion.div>
        </motion.div>
      )}
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about__copy"
        >
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.title[0]}<br />{t.about.title[1]}</h2>
          {t.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <div className="about__actions">
            <a className="button button--primary" href="https://linkedin.com/in/cleisson-vilela" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
            <a className="button button--outline" href="https://github.com/CleissonV" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="about__portrait"
        >
          <img src="/assets/gif-creissu.gif" alt={t.about.portraitAlt} />
        </motion.div>
      </div>
    </section>
  )
}
