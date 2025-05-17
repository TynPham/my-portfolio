/* eslint-disable react/no-unescaped-entities */
import { HiOutlineXMark } from 'react-icons/hi2'

import ElementEffect from 'src/components/effect/ElementEffect'
import { EASE_ABOUT_CONTACT_VARIANTS } from 'src/constants/animations'
import { EAboutContact } from 'src/contexts/app.context'
import { currentTechs } from 'src/data/common'
import { cn } from 'src/utils/utils'

export interface AboutInforProps {
  handleClose: () => void
  containerClass?: string
  isShowAboutContact: EAboutContact
}

export default function AboutInfor({ handleClose, containerClass, isShowAboutContact }: AboutInforProps) {
  return (
    <ElementEffect
      animationProps={{
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
      className={cn(
        'w-full lg:w-1/2 h-full bg-white overflow-hidden px-8 md:px-32 lg:px-16 pb-8 lg:pb-20 pt-20',
        containerClass,
        {
          'hidden lg:block': isShowAboutContact === EAboutContact.CONTACT
        }
      )}
      forceAnimate={true}
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
        <span className='text-sm'>Full-stack Web Developer</span>
        <div className='mt-4 flex flex-col gap-2 overflow-y-auto max-h-[500px] border-y-2 border-main_green py-4 scrollbar-none'>
          <p>
            I'm Pham Tuyen, a passionate <span className='text-main_green font-medium'>Full-stack Web Developer</span>{' '}
            with expertise in both frontend and backend development. I specialize in creating modern, responsive web
            applications using React.js and Next.js for the frontend and Node.js with Express.js for the backend.
          </p>
          <p>
            My focus is on building <span className='text-main_green font-medium'>scalable applications</span> with
            clean code architecture and optimal user experiences. I enjoy solving complex problems and turning ideas
            into reality through elegant code solutions.
          </p>
          <p>
            When I'm not coding, I'm constantly learning new technologies and best practices to stay at the forefront of
            web development. I believe in writing maintainable code and creating applications that are both performant
            and user-friendly.
          </p>
        </div>
        <h4 className='mt-4 font-medium'>Here are a few technologies I've been working with recently:</h4>
        <div className='flex items-center justify-between gap-2 mt-8 flex-wrap'>
          {currentTechs.map((tech, index) => {
            const Icon = tech.icon
            return (
              <article key={index} className='group flex flex-col items-center gap-2 relative cursor-pointer'>
                <Icon className='size-8 md:size-10 lg:size-14 group-hover:text-main_green transition-all' />
                <p className='absolute text-xs lg:text-sm opacity-0 -bottom-12 transition-all group-hover:opacity-100 group-hover:-bottom-4  lg:group-hover:-bottom-8 duration-500'>
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
