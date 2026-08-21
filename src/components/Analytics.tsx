import { useEffect } from 'react'

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
const metaPixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined

function appendScript(src: string, id: string) {
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export default function Analytics() {
  useEffect(() => {
    const initialize = () => {
      if (gaId) {
        window.dataLayer = window.dataLayer ?? []
        window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args))
        window.gtag('js', new Date())
        window.gtag('config', gaId, { page_path: window.location.pathname })
        appendScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`, 'ga4-script')
      }

      if (metaPixelId) {
        if (!window.fbq) {
          type PixelFunction = ((...args: unknown[]) => void) & {
            callMethod?: (...args: unknown[]) => void
            queue: unknown[][]
            loaded: boolean
            version: string
            push: (...args: unknown[]) => void
          }
          const pixel = ((...args: unknown[]) => {
            if (pixel.callMethod) pixel.callMethod(...args)
            else pixel.queue.push(args)
          }) as PixelFunction
          pixel.queue = []
          pixel.loaded = true
          pixel.version = '2.0'
          pixel.push = (...args: unknown[]) => pixel(...args)
          window.fbq = pixel
        }
        window.fbq('init', metaPixelId)
        window.fbq('track', 'PageView')
        appendScript('https://connect.facebook.net/en_US/fbevents.js', 'meta-pixel-script')
      }
    }

    const idleWindow = window as typeof window & { requestIdleCallback?: (callback: () => void) => number; cancelIdleCallback?: (id: number) => void }
    const idleId = idleWindow.requestIdleCallback?.(initialize)
    const timeoutId = idleId === undefined ? window.setTimeout(initialize, 1200) : undefined

    return () => {
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId)
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [])

  return null
}
