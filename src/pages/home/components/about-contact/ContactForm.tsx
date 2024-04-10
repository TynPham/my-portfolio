/* eslint-disable react/no-unescaped-entities */
import { HiOutlineXMark } from 'react-icons/hi2'
import ElementEffect from 'src/components/effect/ElementEffect'
import { cn } from 'src/utils/utils'
import { EAboutContact } from 'src/contexts/app.context'
import { EASE_ABOUT_CONTACT_VARIANTS, buttonVariants } from 'src/constants/animations'
import Input from 'src/components/input/Input'
import Textarea from 'src/components/textarea/Textarea'

export interface ContactFormProps {
  handleClose: () => void
  containerClass?: string
  isShowAboutContact: EAboutContact
}

export default function ContactForm({ handleClose, containerClass, isShowAboutContact }: ContactFormProps) {
  return (
    <ElementEffect
      motionProps={{
        initial: { transform: 'translateY(100%)' },
        animate: {
          transform: 'translateY(0%)',
          transition: { duration: 0.5, ease: EASE_ABOUT_CONTACT_VARIANTS, delay: 0.1 }
        },
        exit: {
          transform: 'translateY(100%)',
          transition: {
            ease: EASE_ABOUT_CONTACT_VARIANTS
          }
        }
      }}
      elementClass={cn(
        'w-full lg:w-1/2 h-full bg-light_navy overflow-hidden px-4 lg:px-8 xl:px-16 py-20',
        containerClass,
        {
          'hidden lg:block': isShowAboutContact === EAboutContact.ABOUT
        }
      )}
    >
      <HiOutlineXMark onClick={handleClose} className='text-main_green absolute top-8 right-8 w-8 h-8 cursor-pointer' />
      <div className='absolute left-[10%] text-[100px] lg:text-[150px] xl:text-[190px] bottom-0 font-league_spartan font-bold opacity-20 text-white'>
        Contact
      </div>
      <div className='flex flex-col justify-between h-full text-white text-base xl:text-lg'>
        <h3 className='font-bold text-2xl'>Let's Talk.</h3>
        <span className='text-sm'>New projects or even a coffee.</span>
        <form className='flex flex-col justify-between h-full mt-4'>
          <Input label='Name' id='floating_name' />
          <Input label='Email' id='floating_email' />
          <Textarea label='Description' id='floating_description' />
          <ElementEffect
            motionProps={{
              initial: { opacity: 1 },
              whileHover: 'hover'
            }}
            elementType='button'
            elementClass={
              'px-4 py-2 rounded-sm border border-main_green text-main_green relative font-fira_mono hover:text-black w-max mt-4'
            }
            onClick={(e) => e.preventDefault()}
          >
            <ElementEffect
              motionProps={{
                variants: buttonVariants
              }}
              elementClass='absolute left-0 top-0 w-0 h-full bg-main_green z-[-1]'
            ></ElementEffect>
            Send Message
          </ElementEffect>
        </form>
      </div>
    </ElementEffect>
  )
}
