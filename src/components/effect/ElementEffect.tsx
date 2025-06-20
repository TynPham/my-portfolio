'use client'

import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { motion, MotionProps, useInView } from 'motion/react'

export interface ElementEffectProps {
  children?: React.ReactNode
  animationProps: MotionProps
  className?: string
  ElementType?: React.ComponentType | React.ElementType
  forceAnimate?: boolean
}

export default function ElementEffect({
  children,
  animationProps,
  className,
  ElementType,
  forceAnimate
}: ElementEffectProps) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useLayoutEffect(() => {
    if ((isInView && !hasAnimated) || forceAnimate) {
      setHasAnimated(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, forceAnimate])

  const Element = useMemo(() => (ElementType ? motion.create(ElementType) : motion.create('div')), [ElementType])
  return (
    <Element
      ref={ref}
      className={className}
      {...animationProps}
      initial={animationProps.initial}
      animate={hasAnimated ? animationProps.animate : animationProps.initial}
    >
      {children}
    </Element>
  )
}
