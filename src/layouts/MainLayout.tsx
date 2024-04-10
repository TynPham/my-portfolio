import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Header from './components/header/Header'
import SideElement from './components/side-element/SideElement'
import BgTracking from 'src/components/bg-tracking/BgTracking'
import { Fragment } from 'react'
import BgLoader from './components/init-loader/BgLoader'
import Loader from './components/init-loader/Loader'
import { Link, useLocation } from 'react-router-dom'
import AppProvider from 'src/contexts/app.context'
import MenuMobile from './components/menu-mobile/MenuMobile'
import { socialLinks } from 'src/data/common.dummy'
import ElementEffect from 'src/components/effect/ElementEffect'
import 'preline/preline'
import { IStaticMethods } from 'preline/preline'
import { useEffect } from 'react'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

export interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation()

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])
  return (
    <Fragment>
      <AppProvider>
        <Loader />
        <BgLoader />
        <MenuMobile />
        <div>
          <BgTracking />
          <Header />
          <div className='container px-6 sm:px-10 md:px-[100px] xl:px-[150px] pt-24'>{children}</div>
          <SideElement>
            <ul className='flex flex-col gap-6 items-center cursor-pointer'>
              {socialLinks.map((link, itemIdx) => {
                const Icon = link.icon
                return (
                  <ElementEffect
                    key={itemIdx}
                    motionProps={{
                      initial: { opacity: 1 },
                      whileHover: { y: -5, color: '#64ffda' }
                    }}
                  >
                    <Link to={link.url} target='_blank'>
                      <Icon />
                    </Link>
                  </ElementEffect>
                )
              })}
            </ul>
          </SideElement>
          <SideElement containerClass='right-10 left-auto gap-4'>
            <ElementEffect
              elementType='div'
              motionProps={{
                initial: { opacity: 1 },
                whileHover: { y: -5, color: '#64ffda' }
              }}
              elementClass='[writing-mode:vertical-lr] text-sm tracking-widest cursor-pointer'
            >
              <Link to='mailto:tuyenpham1104.dev@.com'>tuyenpham1104.dev@gmail.com</Link>
            </ElementEffect>
          </SideElement>
        </div>
      </AppProvider>
    </Fragment>
  )
}
