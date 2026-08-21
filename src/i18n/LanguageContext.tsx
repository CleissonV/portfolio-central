import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { translations, type Language } from './translations'

const STORAGE_KEY = 'clei-vilela-language'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: typeof translations.pt | typeof translations.en
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'pt' || saved === 'en') return saved
  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const t = translations[language]

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    if (window.location.pathname === '/') {
      document.title = t.meta.title
      document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', t.meta.description)
    }
  }, [language, t.meta.description, t.meta.title])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
