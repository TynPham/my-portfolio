import ElementEffect from 'src/components/effect/ElementEffect'
import ButtonAbout from './ButtonAbout'
import { memo } from 'react'
import { aboutTexts, aboutButtonAnimation } from 'src/data/about'

export interface AboutProps {}

const About = memo(function AboutInner(props: AboutProps) {
  return (
    <section id='#' className='min-h-screen -mt-24 flex flex-col items-start justify-center'>
      <ElementEffect
        ElementType={aboutTexts[0].ElementType as React.ElementType}
        animationProps={aboutTexts[0].animationProps}
        className={aboutTexts[0].className}
      >
        {aboutTexts[0].text}
      </ElementEffect>

      <article className='flex flex-col font-bold mt-2'>
        {aboutTexts.slice(1).map((item, index) => (
          <ElementEffect
            key={index}
            ElementType={item.ElementType as React.ElementType}
            animationProps={item.animationProps}
            className={item.className}
          >
            {item.text}
          </ElementEffect>
        ))}
      </article>

      <ElementEffect {...aboutButtonAnimation}>
        <ButtonAbout />
      </ElementEffect>
    </section>
  )
})

export default About
