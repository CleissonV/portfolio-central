interface Props {
  color?: string
  size?: number
}

export default function HudCorners({ color = '#00ff88', size = 12 }: Props) {
  return (
    <>
      <span className="absolute pointer-events-none transition-colors duration-300" style={{ top: 0, left: 0, width: size, height: size, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      <span className="absolute pointer-events-none transition-colors duration-300" style={{ top: 0, right: 0, width: size, height: size, borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
      <span className="absolute pointer-events-none transition-colors duration-300" style={{ bottom: 0, left: 0, width: size, height: size, borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      <span className="absolute pointer-events-none transition-colors duration-300" style={{ bottom: 0, right: 0, width: size, height: size, borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
    </>
  )
}
