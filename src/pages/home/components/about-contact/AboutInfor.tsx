/* eslint-disable react/no-unescaped-entities */
import { HiOutlineXMark } from 'react-icons/hi2'

import ElementEffect from 'src/components/effect/ElementEffect'
import { EASE_ABOUT_CONTACT_VARIANTS } from 'src/constants/animations'
import { EAboutContact } from 'src/contexts/app.context'
import { currentTechs } from 'src/data/common.dummy'
import { cn } from 'src/utils/utils'

export interface AboutInforProps {
  handleClose: () => void
  containerClass?: string
  isShowAboutContact: EAboutContact
}

export default function AboutInfor({ handleClose, containerClass, isShowAboutContact }: AboutInforProps) {
  return (
    <ElementEffect
      motionProps={{
        initial: { transform: 'translateY(-100%)' },
        animate: {
          transform: 'translateY(0%)',
          transition: { duration: 0.5, ease: EASE_ABOUT_CONTACT_VARIANTS }
        },
        exit: {
          transform: 'translateY(-100%)',
          transition: {
            ease: EASE_ABOUT_CONTACT_VARIANTS
          }
        }
      }}
      elementClass={cn(
        'w-full lg:w-1/2 h-full bg-white overflow-hidden px-8 sm:px-4 md:px-32 lg:px-16 py-40 lg:py-20',
        containerClass,
        {
          'hidden lg:block': isShowAboutContact === EAboutContact.CONTACT
        }
      )}
    >
      <HiOutlineXMark
        onClick={handleClose}
        className='text-black absolute top-8 left-4 w-8 h-8 cursor-pointer lg:hidden'
      />
      <div className='absolute -right-[10%] text-[100px] lg:text-[150px] xl:text-[190px] top-0 font-league_spartan font-bold opacity-20'>
        About
      </div>
      <div className='flex flex-col h-full justify-between text-black text-base xl:text-lg'>
        <h3 className='font-bold text-2xl'>About Me.</h3>
        <span className='text-sm'>Front-end developer</span>
        <div className='mt-4 flex flex-col gap-2'>
          <p>
            I'm Pham Tuyen, a 21-year-old Vietnamese
            <span className='text-main_green'> Front-end developer</span>. I'm a person with a great passion for
            computers and programming.
          </p>
          <p>
            I like to create smart user interface and imagine useful interaction, developing rich
            <span className='text-main_green'> web experiences</span> &
            <span className='text-main_green'> web applications</span>.
          </p>
        </div>
        <h4>Here are a few technologies I’ve been working with recently:</h4>
        <div className='flex items-center justify-between gap-2 mt-8 flex-wrap'>
          {currentTechs.map((tech, index) => {
            const Icon = tech.icon
            return (
              <article key={index} className='group flex flex-col items-center gap-2 relative'>
                <Icon className='w-14 xl:w-[4.5rem] h-14 xl:h-[4.5rem] group-hover:text-main_green transition-all' />
                <p className='absolute text-sm opacity-0 -bottom-12 transition-all group-hover:opacity-100 group-hover:-bottom-8 duration-500'>
                  {tech.name}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </ElementEffect>
  )
}
