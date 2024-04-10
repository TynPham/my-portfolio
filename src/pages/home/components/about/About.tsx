import ElementEffect from 'src/components/effect/ElementEffect'
import ButtonAbout from './ButtonAbout'
import { memo } from 'react'
const ABOUT_DURATION_EFFECT = 0.25
export interface AboutProps {}

const About = memo(function AboutInner(props: AboutProps) {
  return (
    <section id='#' className='min-h-screen -mt-24 flex flex-col items-start justify-center'>
      <ElementEffect
        elementType='h2'
        motionProps={{
          initial: { y: 30 },
          animate: { y: 0 },
          transition: { duration: ABOUT_DURATION_EFFECT, delay: 2 }
        }}
        elementClass='text-base text-main_green'
      >
        Hi, my name is
      </ElementEffect>
      <article className='flex flex-col font-bold mt-2'>
        <ElementEffect
          elementType='h1'
          motionProps={{
            initial: { y: 30 },
            animate: { y: 0 },
            transition: { duration: ABOUT_DURATION_EFFECT, delay: 2.1 }
          }}
          elementClass='text-lightest_slate text-4xl sm:text-5xl md:text-6xl lg:text-[80px]'
        >
          Pham Tuyen.
        </ElementEffect>
        <ElementEffect
          elementType='h3'
          motionProps={{
            initial: { y: 30 },
            animate: { y: 0 },
            transition: { duration: ABOUT_DURATION_EFFECT, delay: 2.2 }
          }}
          elementClass='text-2xl sm:text-3xl md:text-5xl lg:text-7xl'
        >
          I build things for the web.
        </ElementEffect>
      </article>
      <ElementEffect
        motionProps={{
          initial: { y: 30 },
          animate: { y: 0 },
          transition: { duration: ABOUT_DURATION_EFFECT, delay: 2.3 }
        }}
        elementClass='relative mt-14'
      >
        <ButtonAbout />
      </ElementEffect>
    </section>
  )
})

export default About
