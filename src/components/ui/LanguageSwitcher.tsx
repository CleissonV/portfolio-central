import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="language-switcher" role="group" aria-label={t.language.label}>
      {(['pt', 'en'] as Language[]).map(option => (
        <button
          key={option}
          type="button"
          className={language === option ? 'active' : ''}
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          aria-label={option === 'pt' ? t.language.portuguese : t.language.english}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
