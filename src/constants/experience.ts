import { EASE_ENTERING_VARIANTS } from './animations'

export const EXPERIENCE_ANIMATION = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.75, ease: EASE_ENTERING_VARIANTS, delay: 0.1 }
}

export const TAB_INDICATOR_ANIMATION = {
  duration: 300,
  positions: {
    1: 'top-0',
    2: 'top-1/3',
    3: 'top-2/3'
  }
}
