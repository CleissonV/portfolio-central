import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© 2026 Cleisson Vilela</span>
        <span>{t.footer.signature}</span>
      </div>
    </footer>
  )
}
