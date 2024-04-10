/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { memo, useState } from 'react'
import ElementEffectEntering from 'src/components/effect/ElementEffectEntering'
import { experiencesDummy } from 'src/data/experiences.dummy'
import { cn } from 'src/utils/utils'
import parse from 'html-react-parser'
import { EASE_ENTERING_VARIANTS } from 'src/constants/animations'

export interface ExperienceProps {}

const Experience = memo(function ExperienceInner(props: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<number>(1)
  return (
    <section id='experiences' className='min-h-screen pt-8'>
      <ElementEffectEntering
        motionProps={{
          initial: { y: 50 },
          animate: { y: 0 },
          transition: { duration: 0.75, ease: EASE_ENTERING_VARIANTS, delay: 0.1 }
        }}
        elementClass='font-fira_mono flex flex-col xl:ml-32 gap-5 md:gap-10 justify-center'
      >
        <h2 className='w-max text-xl md:text-3xl text-lightest_slate relative after:content-none after:md:content-[""] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[105%] after:w-[20vw] after:bg-main_green after:h-[0.5px] font-medium'>
          <span className='text-main_green text-lg md:text-2xl'>02.</span> Experiences
        </h2>
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='border-s-2 border-lightest_navy relative h-max'>
            <nav className='flex flex-col space-y-2' aria-label='Tabs' role='tablist' data-hs-tabs-vertical='true'>
              {experiencesDummy.map((experience, index) => (
                <button
                  key={index}
                  type='button'
                  className={cn(
                    'hs-tab-active:bg-light_navy hs-tab-active:border-main_green hs-tab-active:text-main_green py-3 px-7 !m-0 inline-flex items-center text-sm whitespace-nowrap hover:text-main_green hover:bg-light_navy transition-all',
                    {
                      active: activeTab === index + 1
                    }
                  )}
                  id={`vertical-tab-with-border-item-${index + 1}`}
                  data-hs-tab={`#vertical-tab-with-border-${index + 1}`}
                  aria-controls={`vertical-tab-with-border${index + 1}`}
                  role='tab'
                  onClick={() => setActiveTab(index + 1)}
                >
                  {experience.workName}
                </button>
              ))}
            </nav>
            <div
              className={cn('absolute w-[2px] h-1/2 bg-main_green -left-[2px] top-1/3 transition-all duration-300', {
                'top-0': activeTab === 1,
                'top-1/2': activeTab === 2
              })}
            ></div>
          </div>
          <div className='ms-3 flex-1'>
            {experiencesDummy.map((experience, index) => (
              <div
                key={index}
                id={`vertical-tab-with-border-${index + 1}`}
                role='tabpanel'
                aria-labelledby={`vertical-tab-with-border-item-${index + 1}`}
                className={cn('mt-1', { hidden: activeTab !== index + 1 })}
              >
                <div className='flex flex-col gap-8'>
                  <article className='flex flex-col gap-2'>
                    <h3 className='text-lightest_slate font-medium text-lg'>
                      {experience.position.name}{' '}
                      {experience.position.company && (
                        <span className='text-main_green'>{experience.position.company}</span>
                      )}
                    </h3>
                    <span className='text-sm'>{experience.position.time}</span>
                  </article>
                  <ul className="list-['▸'] marker:text-main_green ml-3 flex flex-col gap-6 text-sm max-w-[600px]">
                    {experience.content.map((content, idx) => (
                      <li className='pl-4' key={idx}>
                        {parse(content)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ElementEffectEntering>
    </section>
  )
})

export default Experience
