import { motion } from 'framer-motion'
import { FaBolt, FaBriefcase, FaDatabase, FaShieldAlt } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'

const highlightIcons = [FaBriefcase, FaDatabase, FaShieldAlt, FaBolt]

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section className="experience section" aria-labelledby="experience-title">
      <div className="container experience__grid">
        <motion.div
          className="experience__intro"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">{t.experience.eyebrow}</span>
          <h2 id="experience-title">{t.experience.title[0]}<br />{t.experience.title[1]}</h2>
          <p>{t.experience.intro}</p>
          <a href="https://linkedin.com/in/cleisson-vilela" target="_blank" rel="noreferrer">
            {t.experience.linkedin}
          </a>
        </motion.div>

        <motion.article
          className="experience-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="experience-card__header">
            <div>
              <span>{t.experience.cardEyebrow}</span>
              <h3>{t.experience.role}</h3>
            </div>
            <strong>{t.experience.years}</strong>
          </div>

          <div className="experience-card__highlights">
            {t.experience.highlights.map((item, index) => {
              const Icon = highlightIcons[index]

              return (
                <div key={item.title}>
                  <Icon aria-hidden="true" />
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </div>
              )
            })}
          </div>

          <p className="experience-card__stack">
            React · Next.js · TypeScript · Node.js · Express · NestJS · PostgreSQL · Docker
          </p>
        </motion.article>
      </div>
    </section>
  )
}
