import { memo, useContext } from 'react'
import { EASE_VARIANTS, drawerItemVars } from 'src/constants/animations'
import { AppContext, AppContextType } from 'src/contexts/app.context'
import { headerNavDummy, socialLinks } from 'src/data/common.dummy'
import { AnimatePresence } from 'framer-motion'
import ElementEffect from 'src/components/effect/ElementEffect'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
export interface MenuMobileProps {}

const MenuMobile = memo(function MenuMobileInner() {
  const { isOpenMenuMobile, setIsMenuMobile } = useContext<AppContextType>(AppContext)
  const handleChangeHash = () => {
    setIsMenuMobile(false)
  }
  return (
    <div className='block md:hidden'>
      <AnimatePresence>
        {isOpenMenuMobile && (
          <ElementEffect
            motionProps={{
              initial: { opacity: 1 },
              animate: { opacity: 0.7 },
              exit: { opacity: 0, transition: { delay: 0.4 } }
            }}
            elementClass='fixed inset-0 bg-main_green z-10'
          ></ElementEffect>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpenMenuMobile && (
          <ElementEffect
            motionProps={{
              initial: { width: 0 },
              animate: { width: '80%', transition: { duration: 0.4 } },
              exit: { width: 0, transition: { delay: 0.4 } }
            }}
            elementClass='fixed top-0 right-0 h-full bg-navy z-20'
          >
            <div className='flex flex-col gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              {headerNavDummy.map((nav, itemIdx) => (
                <ElementEffect
                  key={nav.id}
                  motionProps={{
                    variants: drawerItemVars,
                    initial: 'initial',
                    animate: {
                      ...drawerItemVars.animate,
                      transition: {
                        duration: 0.1 + itemIdx / 8,
                        ease: EASE_VARIANTS,
                        delay: 0.3
                      }
                    },
                    exit: {
                      ...drawerItemVars.exit,
                      transition: {
                        ease: EASE_VARIANTS,
                        duration: 0.1 + itemIdx / 10
                      }
                    }
                  }}
                >
                  <HashLink smooth to={nav.href} onClick={handleChangeHash}>
                    <h3 className='uppercase text-xl text-main_green'>{nav.title}</h3>
                  </HashLink>
                </ElementEffect>
              ))}
            </div>
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-8'>
              {socialLinks.map((link, itemIdx) => {
                const Icon = link.icon
                return (
                  <ElementEffect
                    key={itemIdx}
                    motionProps={{
                      variants: drawerItemVars,
                      initial: 'initial',
                      animate: {
                        ...drawerItemVars.animate,
                        transition: {
                          duration: 0.1 + itemIdx / 8,
                          ease: EASE_VARIANTS,
                          delay: 0.3
                        }
                      },
                      exit: {
                        ...drawerItemVars.exit,
                        transition: {
                          ease: EASE_VARIANTS,
                          duration: 0.1 + itemIdx / 10
                        }
                      }
                    }}
                  >
                    <Link to={link.url} target='_blank'>
                      <Icon className='w-6 h-6 text-main_green' />
                    </Link>
                  </ElementEffect>
                )
              })}
            </div>
          </ElementEffect>
        )}
      </AnimatePresence>
    </div>
  )
})

export default MenuMobile
