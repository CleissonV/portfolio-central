import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaDatabase, FaJava, FaPaintBrush } from 'react-icons/fa'
import {
  SiAngular,
  SiBlender,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGit,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSpringboot,
  SiTypescript,
  SiUnrealengine,
} from 'react-icons/si'
import ArcaneCircle from '../components/ui/ArcaneCircle'
import { useLanguage } from '../i18n/LanguageContext'

const techs: Array<{ icon: IconType; name: string; nameEn?: string }> = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiExpress, name: 'Express' },
  { icon: SiNestjs, name: 'NestJS' },
  { icon: SiPrisma, name: 'Prisma' },
  { icon: FaDatabase, name: 'MikroORM' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiAngular, name: 'Angular' },
  { icon: FaJava, name: 'Java' },
  { icon: SiSpringboot, name: 'Spring Boot' },
  { icon: SiGit, name: 'Git' },
  { icon: SiUnrealengine, name: 'Unreal Engine' },
  { icon: SiCplusplus, name: 'C++' },
  { icon: SiBlender, name: 'Blender' },
  { icon: FaPaintBrush, name: 'Desenho Digital', nameEn: 'Digital Drawing' },
]

export default function Stack() {
  const { language, t } = useLanguage()

  return (
    <section id="stack" className="stack section">
      <ArcaneCircle className="magic-circle--stack" duration={42} depth={24} />
      <ArcaneCircle className="magic-circle--stack-right magic-circle--faint" duration={58} direction={-1} depth={30} />
      <div className="container">
        <div className="section-heading section-heading--center">
          <span>{t.stack.eyebrow}</span>
          <h2>{t.stack.title}</h2>
        </div>

        <div className="stack__grid">
          {techs.map(({ icon: Icon, name, nameEn }, index) => {
            const label = language === 'en' && nameEn ? nameEn : name

            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.045 }}
                className="tech-tile"
                title={label}
                tabIndex={0}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
