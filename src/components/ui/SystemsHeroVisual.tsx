import { useLanguage } from '../../i18n/LanguageContext'

export default function SystemsHeroVisual() {
  const { language } = useLanguage()
  const content = language === 'pt'
    ? { ariaLabel: 'Arquitetura de sistema sob medida conectando operação, automações e dados.', title: 'ARQUITETURA DO SISTEMA', status: 'SOB MEDIDA', operation: 'OPERAÇÃO', operationTitle: 'Pessoas + processo', operationText: 'Rotinas da empresa', system: 'SISTEMA', systemTitle: 'Regras + automações', systemText: 'Fluxos claros e seguros', data: 'INFORMAÇÃO', dataTitle: 'Dados + integrações', dataText: 'Visão para decidir', footer: 'Web · Desktop · API' }
    : { ariaLabel: 'Custom system architecture connecting operations, automation, and data.', title: 'SYSTEM ARCHITECTURE', status: 'CUSTOM-BUILT', operation: 'OPERATION', operationTitle: 'People + process', operationText: 'Business routines', system: 'SYSTEM', systemTitle: 'Rules + automation', systemText: 'Clear, secure flows', data: 'INFORMATION', dataTitle: 'Data + integrations', dataText: 'Visibility for decisions', footer: 'Web · Desktop · API' }

  return (
    <div className="commercial-hero__screen systems-visual" role="img" aria-label={content.ariaLabel}>
      <div className="commercial-hero__screen-bar" aria-hidden="true"><span /><span /><span /></div>
      <div className="systems-visual__canvas">
        <div className="systems-visual__topline"><span>{content.title}</span><strong><i />{content.status}</strong></div>
        <div className="systems-visual__flow">
          <article className="systems-visual__node systems-visual__node--operation"><small>{content.operation}</small><b>{content.operationTitle}</b><span>{content.operationText}</span></article>
          <i className="systems-visual__connector" aria-hidden="true" />
          <article className="systems-visual__node systems-visual__node--system"><small>{content.system}</small><b>{content.systemTitle}</b><span>{content.systemText}</span></article>
          <i className="systems-visual__connector" aria-hidden="true" />
          <article className="systems-visual__node systems-visual__node--data"><small>{content.data}</small><b>{content.dataTitle}</b><span>{content.dataText}</span></article>
        </div>
        <div className="systems-visual__footer"><i aria-hidden="true" /><span>{content.footer}</span></div>
      </div>
    </div>
  )
}
