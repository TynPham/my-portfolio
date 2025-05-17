/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { memo, useCallback, useMemo, useState } from 'react'
import ElementEffect from 'src/components/effect/ElementEffect'
import { experiencesDummy } from 'src/data/experiences'
import { cn } from 'src/utils/utils'
import { EXPERIENCE_ANIMATION, TAB_INDICATOR_ANIMATION } from 'src/constants/experience'
import TabContent from './components/TabContent'

export interface ExperienceProps {}

const Experience = memo(function ExperienceInner(props: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<number>(1)

  const handleTabChange = useCallback((index: number) => {
    setActiveTab(index + 1)
  }, [])

  const tabContent = useMemo(() => {
    return experiencesDummy.map((experience, index) => (
      <TabContent key={index} experience={experience} index={index} isActive={activeTab === index + 1} />
    ))
  }, [activeTab])

  return (
    <section id='experiences' className='pt-8'>
      <ElementEffect
        animationProps={EXPERIENCE_ANIMATION}
        className='font-fira_mono flex flex-col xl:ml-32 gap-5 md:gap-10 justify-center'
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
                  onClick={() => handleTabChange(index)}
                >
                  {experience.workName}
                </button>
              ))}
            </nav>
            <div
              className={cn(
                'absolute w-[2px] h-1/3 bg-main_green -left-[2px] transition-all',
                TAB_INDICATOR_ANIMATION.positions[activeTab as keyof typeof TAB_INDICATOR_ANIMATION.positions]
              )}
              style={{ transitionDuration: `${TAB_INDICATOR_ANIMATION.duration}ms` }}
            />
          </div>
          <div className='ms-3 flex-1'>{tabContent}</div>
        </div>
      </ElementEffect>
    </section>
  )
})

export default Experience
