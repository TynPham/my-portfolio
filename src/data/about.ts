import { AnimationProps } from 'motion/react'

export const ABOUT_DURATION_EFFECT = 0.25

const DELAYS = {
  GREETING: 2,
  NAME: 2.1,
  TITLE: 2.2,
  BUTTON: 2.3
} as const

// Helper function để tạo animation props
const createAnimationProps = (delay: number): AnimationProps => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: ABOUT_DURATION_EFFECT, delay }
})

export const aboutTexts = [
  {
    text: 'Hi, my name is',
    ElementType: 'h2',
    className: 'text-base text-main_green',
    animationProps: createAnimationProps(DELAYS.GREETING)
  },
  {
    text: 'Pham Tuyen.',
    ElementType: 'h1',
    className: 'text-lightest_slate text-4xl sm:text-5xl md:text-6xl lg:text-[80px]',
    animationProps: createAnimationProps(DELAYS.NAME)
  },
  {
    text: 'I build things for the web.',
    ElementType: 'h3',
    className: 'text-2xl sm:text-3xl md:text-5xl lg:text-7xl',
    animationProps: createAnimationProps(DELAYS.TITLE)
  }
]

export const aboutButtonAnimation = {
  animationProps: createAnimationProps(DELAYS.BUTTON),
  className: 'relative mt-14'
}
