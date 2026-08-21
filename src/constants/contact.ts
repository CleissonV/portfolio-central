import type { Language } from '../i18n/translations'

const whatsappMessages: Record<Language, string> = {
  pt: 'Olá, Cleisson! Vim pelo seu portfólio e gostaria de conversar sobre um projeto. Podemos falar?',
  en: 'Hi, Cleisson! I found you through your portfolio and would like to discuss a project. Can we talk?',
}

export function getWhatsappUrl(language: Language) {
  return `https://wa.me/5514998728303?text=${encodeURIComponent(whatsappMessages[language])}`
}
