import { IconType } from 'react-icons'

export type HeaderNav = {
  id: number
  title: string
  href: string
}

export type SocialLink = {
  title: string
  url: string
  icon: IconType
}

export type WorkExperience = {
  workName: string
  position: {
    name: string
    time: string
    company?: string
  }
  content: string[]
}

export type Project = {
  link: {
    url: string
    img: string
  }
  name: string
  description: string
  technologies: string[]
  socialLinks: SocialLink[]
}
