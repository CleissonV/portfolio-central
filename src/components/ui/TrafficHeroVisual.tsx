import { useLanguage } from '../../i18n/LanguageContext'

export default function TrafficHeroVisual() {
  const { language } = useLanguage()
  const isPortuguese = language === 'pt'
  const content = isPortuguese
    ? { ariaLabel: 'Fluxo de uma campanha de tráfego pago com aquisição, conversão e mensuração.', title: 'MAPA DE CAMPANHA', tracking: 'MENSURAÇÃO ATIVA', acquisition: 'AQUISIÇÃO', conversion: 'CONVERSÃO', objective: 'OBJETIVO', conversionTitle: 'Oferta + página', conversionText: 'Mensagem clara e CTA', objectiveTitle: 'Contato / venda', objectiveText: 'Ação alinhada ao negócio', measurement: 'Pixel · GA4 · Eventos' }
    : { ariaLabel: 'Paid traffic campaign flow with acquisition, conversion, and measurement.', title: 'CAMPAIGN MAP', tracking: 'ACTIVE MEASUREMENT', acquisition: 'ACQUISITION', conversion: 'CONVERSION', objective: 'OBJECTIVE', conversionTitle: 'Offer + page', conversionText: 'Clear message and CTA', objectiveTitle: 'Contact / sale', objectiveText: 'Action aligned with the business', measurement: 'Pixel · GA4 · Events' }

  return (
    <div className="commercial-hero__screen traffic-visual" role="img" aria-label={content.ariaLabel}>
      <div className="commercial-hero__screen-bar" aria-hidden="true"><span /><span /><span /></div>
      <div className="traffic-visual__canvas">
        <div className="traffic-visual__topline"><span>{content.title}</span><strong><i />{content.tracking}</strong></div>
        <div className="traffic-visual__flow">
          <article className="traffic-visual__node traffic-visual__node--acquisition"><small>{content.acquisition}</small><b>Meta Ads</b><span>+ Google Ads</span></article>
          <i className="traffic-visual__connector" aria-hidden="true" />
          <article className="traffic-visual__node traffic-visual__node--conversion"><small>{content.conversion}</small><b>{content.conversionTitle}</b><span>{content.conversionText}</span></article>
          <i className="traffic-visual__connector" aria-hidden="true" />
          <article className="traffic-visual__node traffic-visual__node--objective"><small>{content.objective}</small><b>{content.objectiveTitle}</b><span>{content.objectiveText}</span></article>
        </div>
        <div className="traffic-visual__measurement"><i aria-hidden="true" /><span>{content.measurement}</span></div>
      </div>
    </div>
  )
}
