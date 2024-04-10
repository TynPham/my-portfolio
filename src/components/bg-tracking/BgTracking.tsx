import { useEffect, useRef } from 'react'

export interface BgTrackingProps {}

export default function BgTracking(props: BgTrackingProps) {
  const bgTrackingRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const bgTrackingCursor = (x: number, y: number) => {
      if (bgTrackingRef.current) {
        bgTrackingRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }
    }

    window.addEventListener('mousemove', (e) => {
      bgTrackingCursor(e.clientX, e.clientY)
    })

    return () => {
      window.removeEventListener('mousemove', (e) => {
        bgTrackingCursor(e.clientX, e.clientY)
      })
    }
  }, [])
  return <div ref={bgTrackingRef} className='hidden lg:block fixed inset-0 -z-10'></div>
}
