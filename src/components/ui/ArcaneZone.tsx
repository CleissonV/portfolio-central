import { useRef, type CSSProperties, type PropsWithChildren } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

const createDust = (count: number, offset: number) =>
  Array.from({ length: count }, (_, index) => ({
    left: 2 + ((index * 41 + offset * 17) % 96),
    top: 1 + ((index * 31 + offset * 23) % 98),
    size: 2 + ((index + offset) % 4),
    duration: 3.2 + ((index + offset) % 7) * 0.72,
    delay: -((index * 0.61 + offset) % 5),
    blue: (index + offset) % 3 === 0,
  }))

const dustLayers = [
  createDust(40, 1),
  createDust(32, 3),
  createDust(28, 5),
]

const crystals = [
  { layer: 0, left: 7, top: 11, size: 28, duration: 8.4, delay: -1.2, tilt: -9, mobile: true },
  { layer: 0, left: 90, top: 52, size: 36, duration: 9.2, delay: -4.1, tilt: 8, mobile: false },
  { layer: 0, left: 13, top: 86, size: 24, duration: 7.8, delay: -2.8, tilt: -4, mobile: false },
  { layer: 1, left: 92, top: 19, size: 48, duration: 7.2, delay: -3.4, tilt: 11, mobile: true },
  { layer: 1, left: 5, top: 44, size: 40, duration: 8.1, delay: -5.2, tilt: -12, mobile: false },
  { layer: 1, left: 84, top: 88, size: 32, duration: 9.8, delay: -1.9, tilt: 5, mobile: false },
  { layer: 2, left: 9, top: 68, size: 58, duration: 6.8, delay: -4.7, tilt: -7, mobile: true },
  { layer: 2, left: 94, top: 36, size: 52, duration: 7.6, delay: -2.2, tilt: 9, mobile: false },
]

export default function ArcaneZone({ children }: PropsWithChildren) {
  const zoneRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: zoneRef,
    offset: ['start end', 'end start'],
  })
  const farY = useTransform(scrollYProgress, [0, 1], [-60, 70])
  const middleY = useTransform(scrollYProgress, [0, 1], [-125, 135])
  const nearY = useTransform(scrollYProgress, [0, 1], [-210, 220])

  return (
    <div ref={zoneRef} className="arcane-zone">
      <div className="arcane-atmosphere" aria-hidden="true">
        {[farY, middleY, nearY].map((layerY, layerIndex) => (
          <motion.div
            key={layerIndex}
            className={`arcane-depth-layer arcane-depth-layer--${layerIndex + 1}`}
            style={reduceMotion ? undefined : { y: layerY }}
          >
            {dustLayers[layerIndex].map((particle, index) => (
              <span
                key={index}
                className={`arcane-dust ${particle.blue ? 'arcane-dust--blue' : ''}`}
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: particle.size,
                  height: particle.size,
                  '--dust-duration': `${particle.duration}s`,
                  '--dust-delay': `${particle.delay}s`,
                } as CSSProperties}
              />
            ))}
            {crystals
              .filter(crystal => crystal.layer === layerIndex)
              .map((crystal, index) => (
                <span
                  key={index}
                  className={`arcane-crystal ${crystal.mobile ? '' : 'arcane-crystal--mobile-hidden'}`}
                  style={{
                    left: `${crystal.left}%`,
                    top: `${crystal.top}%`,
                    width: crystal.size,
                    height: crystal.size * 1.48,
                    '--crystal-duration': `${crystal.duration}s`,
                    '--crystal-delay': `${crystal.delay}s`,
                    '--crystal-tilt': `${crystal.tilt}deg`,
                  } as CSSProperties}
                >
                  <span className="arcane-crystal__body" />
                </span>
              ))}
          </motion.div>
        ))}
      </div>

      {children}
    </div>
  )
}
