import type { IconType } from 'react-icons'

export interface Project {
  id: number
  name: string
  slug: string
  demo: string
  type: string
  segment: string
  desc: string
  tags: string[]
  color: string
}

export interface TechItem {
  name: string
  desc: string
  color: string
  icon: IconType
}

export interface Stat {
  n: string
  l: string
  c: string
}

export interface ContactItem {
  icon: IconType
  label: string
  sub: string
  href: string
  color: string
}
