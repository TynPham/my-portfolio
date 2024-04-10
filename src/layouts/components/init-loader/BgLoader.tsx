import { memo } from 'react'
import ElementEffect from 'src/components/effect/ElementEffect'
import { INIT_EFFECT_DURATION } from 'src/constants/common'

const DURATION = 0.5

export interface BgLoaderProps {}

const BgLoader = memo(function BgLoaderInner() {
  return (
    <ElementEffect
      motionProps={{
        initial: { opacity: 1, width: '100%' },
        animate: { width: '0%' },
        transition: { duration: DURATION, delay: INIT_EFFECT_DURATION - DURATION }
      }}
      elementClass='fixed top-0 right-0 h-full bg-dark_navy z-40'
    ></ElementEffect>
  )
})

export default BgLoader
