import { memo } from 'react'
import ElementEffectEntering from 'src/components/effect/ElementEffectEntering'
import Project from './Project'
import projects from 'src/data/projects.dummy'
import { EASE_ENTERING_VARIANTS } from 'src/constants/animations'

export interface WorkProps {}

const Work = memo(function WorkInner(props: WorkProps) {
  return (
    <section id='builds' className='min-h-screen pt-8'>
      <ElementEffectEntering
        motionProps={{
          initial: { y: 50 },
          animate: { y: 0 },
          transition: { duration: 0.75, ease: EASE_ENTERING_VARIANTS, delay: 0.1 }
        }}
        elementClass='font-fira_mono flex flex-col gap-16 min-h-screen justify-center'
      >
        <h2 className='w-max text-xl md:text-3xl text-lightest_slate relative after:content-none after:md:content-[""] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[105%] after:w-[20vw] after:bg-main_green after:h-[0.5px] font-medium'>
          <span className='text-main_green text-lg md:text-2xl'>03.</span> Some Things I’ve Built
        </h2>
        <div className='flex flex-col gap-16 lg:gap-32'>
          {projects.map((project, index) => (
            <Project key={index} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </ElementEffectEntering>
    </section>
  )
})

export default Work
