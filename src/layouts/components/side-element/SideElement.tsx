import { cn } from 'src/utils/utils'
import ElementEffect from 'src/components/effect/ElementEffect'
import { memo } from 'react'

export interface SideElementProps {
  children: React.ReactNode
  containerClass?: string
}

const SideElement = memo(
  function SideElement({ children, containerClass }: SideElementProps) {
    return (
      <ElementEffect
        animationProps={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 2.5 }
        }}
        forceAnimate={true}
        className={cn(
          'hidden md:flex flex-col items-center gap-9 w-10 fixed bottom-0 left-10 right-auto z-10 text-light_slate after:content-[""] after:block after:w-[1px] after:h-[90px] after:bg-light_slate after:mx-auto after:my-0',
          containerClass
        )}
      >
        {children}
      </ElementEffect>
    )
  },
  () => true
)

export default SideElement
