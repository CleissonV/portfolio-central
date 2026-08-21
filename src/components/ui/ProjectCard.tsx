import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { LuExternalLink } from 'react-icons/lu'
import type { Project } from '../../types'
import { thumbs } from '../../constants/data'
import { useLanguage } from '../../i18n/LanguageContext'
import { getProjectTypeLabel, projectDescriptions } from '../../i18n/translations'

interface Props {
  project: Project
  index: number
  mobileHidden?: boolean
}

export default function ProjectCard({ project, index, mobileHidden = false }: Props) {
  const { language, t } = useLanguage()
  const origin = project.origin === 'client'
    ? t.projects.client
    : project.origin === 'authorial' || project.type === 'Fan Project' || project.type === 'Game'
      ? t.projects.authorial
      : t.projects.concept
  const githubUrl = project.github === null
    ? null
    : project.github ?? `https://github.com/CleissonV/${project.slug}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className={`project-card${mobileHidden ? ' project-card--mobile-hidden' : ''}`}
    >
      <div className="project-card__image">
        <img src={thumbs[project.slug]} alt={`${t.projects.imageAlt} ${project.name}`} loading="lazy" />
        <div className="project-card__actions">
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          ) : null}
          <a href={project.demo} target="_blank" rel="noreferrer">
            <LuExternalLink /> {t.projects.viewSite}
          </a>
        </div>
      </div>
      <div className="project-card__body">
        <span className="project-card__origin">{origin}</span>
        <h3>{project.name}</h3>
        <p className="project-card__type">{getProjectTypeLabel(language, project.type)}</p>
        <p>{projectDescriptions[language][project.slug] ?? project.desc}</p>
      </div>
    </motion.article>
  )
}
