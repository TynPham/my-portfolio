import { MotionProps, motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export interface ElementEffectEnteringProps {
  children?: React.ReactNode
  motionProps: MotionProps
  elementClass?: string
  containerClass?: string
}

export default function ElementEffectEntering({
  children,
  motionProps,
  elementClass,
  containerClass
}: ElementEffectEnteringProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref} className={containerClass}>
      {isInView && (
        <motion.div
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
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
