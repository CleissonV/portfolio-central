import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

interface ArcaneCircleProps {
  className: string
  duration: number
  direction?: 1 | -1
  depth?: number
}

export default function ArcaneCircle({
  className,
  duration,
  direction = 1,
  depth = 30,
}: ArcaneCircleProps) {
  const circleRef = useRef<HTMLImageElement>(null)
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(useTransform(pointerX, value => value * -depth), { stiffness: 65, damping: 20 })
  const y = useSpring(useTransform(pointerY, value => value * -depth * 0.7), { stiffness: 65, damping: 20 })

  useEffect(() => {
    const section = circleRef.current?.closest('section')
    if (!section || reduceMotion) return

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect()
      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
    }

    const resetParallax = () => {
      pointerX.set(0)
      pointerY.set(0)
    }

    section.addEventListener('pointermove', handlePointerMove)
    section.addEventListener('pointerleave', resetParallax)

    return () => {
      section.removeEventListener('pointermove', handlePointerMove)
      section.removeEventListener('pointerleave', resetParallax)
    }
  }, [pointerX, pointerY, reduceMotion])

  return (
    <motion.img
      ref={circleRef}
      className={`magic-circle ${className}`}
      src="/assets/magic-circle.png"
      alt=""
      aria-hidden="true"
      style={reduceMotion ? undefined : { x, y }}
      animate={reduceMotion ? undefined : { rotate: direction * 360 }}
      transition={{ duration, ease: 'linear', repeat: Infinity }}
    />
  )
}
