import { useEffect, useState } from 'react'
export const SCROLL_TYPE = {
  UP: 'up',
  DOWN: 'down'
} as const
export type ScrollType = (typeof SCROLL_TYPE)[keyof typeof SCROLL_TYPE]

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollType>(SCROLL_TYPE.UP)
  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY === 0 ? SCROLL_TYPE.UP : scrollY > lastScrollY ? SCROLL_TYPE.DOWN : SCROLL_TYPE.UP
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  return { scrollDirection, setScrollDirection }
}
