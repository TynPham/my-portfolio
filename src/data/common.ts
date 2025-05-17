import { IconType } from 'react-icons'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { HeaderNav, SocialLink } from 'src/types/common.type'
import { SiExpress, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export const headerNavDummy: HeaderNav[] = [
  {
    id: 1,
    title: 'About',
    href: '/#'
  },
  {
    id: 2,
    title: 'Experience',
    href: '/#experiences'
  },
  {
    id: 3,
    title: 'Builds',
    href: '/#builds'
  },
  {
    id: 4,
    title: 'Contact',
    href: '/#contact'
  }
]

export const socialLinks: SocialLink[] = [
  {
    title: 'Github',
    icon: FiGithub,
    url: 'https://github.com/TynPham'
  },
  {
    title: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/kait1104/'
  },
  {
    title: 'Linkedin',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/tuy%E1%BA%BFn-ph%E1%BA%A1m-b88667254/'
  },
  {
    title: 'Facebook',
    icon: FiFacebook,
    url: 'https://www.facebook.com/phamtuyendeptrai'
  }
]

export const currentTechs: { icon: IconType; name: string }[] = [
  {
    icon: SiReact,
    name: 'Reactjs'
  },
  {
    icon: SiNextdotjs,
    name: 'Nextjs'
  },
  {
    icon: SiTypescript,
    name: 'Typescript'
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwindcss'
  },
  {
    icon: SiNodedotjs,
    name: 'Node.js'
  },
  {
    icon: SiExpress,
    name: 'Express.js'
  }
]
