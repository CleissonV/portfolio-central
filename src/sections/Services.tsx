import { motion } from 'framer-motion'
import { FaBullhorn, FaLaptopCode, FaServer } from 'react-icons/fa'
import ArcaneCircle from '../components/ui/ArcaneCircle'
import { useLanguage } from '../i18n/LanguageContext'

const serviceIcons = [FaLaptopCode, FaServer, FaBullhorn]
const serviceRoutes = [
  ['/landing-pages', '/sites-institucionais', '/ecommerce'],
  ['/sistemas', '/sistemas', '/sistemas'],
  ['/trafego-pago', '/trafego-pago', '/trafego-pago'],
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="services section">
      <ArcaneCircle className="magic-circle--services-left" duration={50} depth={30} />
      <ArcaneCircle className="magic-circle--services-right magic-circle--faint" duration={64} direction={-1} depth={24} />
      <div className="container">
        <div className="services__heading">
          <div className="section-heading section-heading--center">
            <span>{t.services.eyebrow}</span>
            <h2>{t.services.title}</h2>
          </div>
          <p>{t.services.description}</p>
        </div>

        <div className="services__grid">
          {t.services.cards.map((service, index) => {
            const Icon = serviceIcons[index]
            const number = String(index + 1).padStart(2, '0')

            return (
              <motion.article
                key={number}
                className="service-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="service-card__top">
                  <Icon aria-hidden="true" />
                  <span>{number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card__items">
                  {service.items.map((item, itemIndex) => <a key={item} href={serviceRoutes[index][itemIndex]}>{item}</a>)}
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="services__process" aria-label={t.services.processAria}>
          {t.services.process.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
