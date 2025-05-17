import { AnimationProps, Variants } from 'motion/react'

export const EASE_VARIANTS = [0.32, 0, 0.39, 0]
export const EASE_ABOUT_CONTACT_VARIANTS = [0.694, 0.048, 0.335, 1]
export const EASE_ENTERING_VARIANTS = [0.645, 0.045, 0.355, 1]

export const drawerVars: Variants = {
  initial: {
    right: '-100vw'
  },
  animate: {
    right: 0,
    transition: {
      duration: 0.3,
      ease: EASE_VARIANTS
    }
  },
  exit: {
    right: '-100vw',
    transition: {
      duration: 0.3,
      ease: EASE_VARIANTS,
      delay: 0.3
    }
  }
}

export const drawerItemVars: Variants = {
  initial: {
    marginLeft: 30,
    opacity: 0
  },
  animate: {
    marginLeft: 0,
    opacity: 1
  },
  exit: {
    marginLeft: 30,
    opacity: 0
  }
}

export const buttonVariants = {
  hover: { width: '100%' }
}
export const arrowVariants = {
  hover: { right: '-30px' }
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const FADE_IN_ANIMATION: AnimationProps = {
  initial: 'hidden',
  animate: 'visible',
  transition: { duration: 0.5 },
  variants: fadeInVariants
}

const fadeInStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const FADE_IN_STAGGER_ANIMATION: AnimationProps = {
  initial: 'hidden',
  animate: 'visible',
  transition: { duration: 0.5 },
  variants: fadeInStaggerVariants
}

export const fadeInChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}
