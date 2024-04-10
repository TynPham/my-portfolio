/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import About from './components/about/About'
import Contact from './components/Contact'
import Experience from './components/experience/Experience'
import Work from './components/builds/Builds'
import { useLocation } from 'react-router-dom'
import { INIT_EFFECT_DURATION } from 'src/constants/common'
import AboutContact from './components/about-contact/AboutContact'

export interface HomeProps {}

export default function Home(props: HomeProps) {
  const { hash } = useLocation()
  useEffect(() => {
    let scrollTimeout: any = null
    const hashSlice = hash?.slice(1)
    if (hashSlice) {
      const element = document.getElementById(hashSlice)
      if (element) {
        scrollTimeout = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, INIT_EFFECT_DURATION * 1000)
      }
    }
    return () => {
      clearTimeout(scrollTimeout)
    }
  }, [])
  return (
    <div className='flex flex-col gap-20'>
      <About />
      <Experience />
      <Work />
      <Contact />
      <AboutContact />
    </div>
  )
}
