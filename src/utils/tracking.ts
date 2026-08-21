declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, parameters: Record<string, unknown> = {}) {
  window.dataLayer?.push({ event: name, ...parameters })
  window.gtag?.('event', name, parameters)
  window.fbq?.('trackCustom', name, parameters)
}
