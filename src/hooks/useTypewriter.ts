import { useState, useEffect } from 'react'

export function useTypewriter(texts: string[], speed = 75, pause = 2200): string {
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    const text = texts[idx]
    if (!deleting && charIdx < text.length) {
      const t = setTimeout(() => {
        setDisplay(text.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    }
    if (!deleting && charIdx === text.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setDisplay(text.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, speed / 2)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx === 0) {
      setDeleting(false)
      setIdx(i => (i + 1) % texts.length)
    }
  }, [charIdx, deleting, idx, texts, speed, pause])

  return display
}
