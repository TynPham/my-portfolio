import { memo } from 'react'
import ElementEffect from 'src/components/effect/ElementEffect'
import { INIT_EFFECT_DURATION, LOADER_BAR_QUANTITY } from 'src/constants/common'

export interface LoaderProps {}

const Loader = memo(function LoaderInner() {
  return (
    <ElementEffect
      motionProps={{
        initial: { opacity: 1, zIndex: 50 },
        animate: { zIndex: -1 },
        transition: { delay: INIT_EFFECT_DURATION }
      }}
      elementClass='fixed inset-0 flex justify-center items-center'
    >
      <ElementEffect
        motionProps={{
          initial: { opacity: 1 },
          animate: { opacity: 0 },
          transition: { delay: 0.75 }
        }}
        elementClass='h-[90px] w-[300px]'
      >
        {Array(LOADER_BAR_QUANTITY)
          .fill(0)
          .map((_, index) => (
            <ElementEffect
              key={index}
              motionProps={{
                initial: { opacity: 1 },
                animate: { left: ['0', '0', '100%', '0', '0'], width: ['0%', '100%', '0%', '100%', '0%'] },
                transition: {
                  duration: INIT_EFFECT_DURATION,
                  ease: [0.694, 0.048, 0.335, 1],
                  times: [0, 0.25, 0.5, 0.75, 1],
                  delay: index * 0.1
                }
              }}
              elementClass='w-0 h-[30px] bg-white m-0 relative'
            />
          ))}
      </ElementEffect>
    </ElementEffect>
  )
})

export default Loader
