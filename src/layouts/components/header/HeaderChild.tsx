import { Fragment, memo } from 'react'
import { HashLink } from 'react-router-hash-link'
import BurgerMenu from 'src/components/burger-bar/BurgerBar'
import ElementEffect from 'src/components/effect/ElementEffect'
import { INIT_EFFECT_DURATION } from 'src/constants/common'
import { headerNavDummy } from 'src/data/common'

const HeaderChild = memo(function HeaderChildInner() {
  return (
    <Fragment>
      <ElementEffect
        animationProps={{
          transition: { delay: INIT_EFFECT_DURATION },
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        }}
        ElementType={'h2'}
        className='text-2xl italic text-main_green'
        forceAnimate={true}
      >
        Tyn Pham
      </ElementEffect>
      <ul className='hidden md:flex items-center gap-12'>
        {headerNavDummy.map((nav, index) => (
          <ElementEffect
            key={nav.id}
            animationProps={{
              initial: { y: '-100%', opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: INIT_EFFECT_DURATION + index * 0.1 }
            }}
            className='cursor-pointer hover:text-main_green transition-all'
            ElementType={'li'}
            forceAnimate={true}
          >
            <HashLink smooth to={nav.href} className='flex items-center gap-4'>
              <span className='text-main_green'>0{nav.id}</span>
              <span>{nav.title}</span>
            </HashLink>
          </ElementEffect>
        ))}
      </ul>
      <BurgerMenu />
    </Fragment>
  )
})

export default HeaderChild
