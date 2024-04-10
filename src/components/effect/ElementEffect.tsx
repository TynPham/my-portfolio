import { MotionProps, motion } from 'framer-motion'
import { HTMLAttributes } from 'react'

export interface ElementEffectProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
  motionProps: MotionProps
  elementClass?: string
  elementType?: React.ElementType
}

export default function ElementEffect({
  children,
  motionProps,
  elementClass,
  elementType = 'div',
  ...rest
}: ElementEffectProps) {
  const DynamicMotionComponent = motion(elementType)
  return (
    <DynamicMotionComponent
      {...motionProps}
      initial={
        motionProps.variants
          ? motionProps.initial
          : { opacity: 0, ...(typeof motionProps.initial === 'object' ? motionProps.initial : {}) }
      }
      animate={
        motionProps.variants
          ? motionProps.animate
          : { opacity: 1, ...(typeof motionProps.animate === 'object' ? motionProps.animate : {}) }
      }
      className={elementClass}
      {...rest}
    >
      {children}
    </DynamicMotionComponent>
  )
}
