import { memo } from 'react'
import Project from './Project'
import projects from 'src/data/projects'
import { FADE_IN_ANIMATION, FADE_IN_STAGGER_ANIMATION, fadeInChildVariants } from 'src/constants/animations'
import ElementEffectStagger from 'src/components/effect/ElementEffectStagger'
import ElementEffect from 'src/components/effect/ElementEffect'

export interface WorkProps {}

const Work = memo(function WorkInner(props: WorkProps) {
  return (
    <section id='builds' className='min-h-screen pt-8'>
      <ElementEffect
        animationProps={FADE_IN_ANIMATION}
        className='font-fira_mono flex flex-col gap-16 min-h-screen justify-center'
      >
        <h2 className='w-max text-xl md:text-3xl text-lightest_slate relative after:content-none after:md:content-[""] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[105%] after:w-[20vw] after:bg-main_green after:h-[0.5px] font-medium min-h-3'>
          <span className='text-main_green text-lg md:text-2xl'>03.</span> Some Things I’ve Built
        </h2>
        <ElementEffectStagger
          animationProps={FADE_IN_STAGGER_ANIMATION}
          childVariants={fadeInChildVariants}
          className='flex flex-col gap-16 lg:gap-32'
        >
          {projects.map((project, index) => (
            <Project key={index} project={project} reverse={index % 2 !== 0} />
          ))}
        </ElementEffectStagger>
      </ElementEffect>
    </section>
  )
})

export default Work
