import { useContext } from 'react'
import ElementEffect from 'src/components/effect/ElementEffect'
import { arrowVariants, buttonVariants } from 'src/constants/animations'
import { AppContext, AppContextType, EAboutContact } from 'src/contexts/app.context'
import { cn } from 'src/utils/utils'
export interface ButtonAboutProps {}

export default function ButtonAbout(props: ButtonAboutProps) {
  const { isShowAboutContact, setIsShowAboutContact } = useContext<AppContextType>(AppContext)
  const handleShow = (showType: EAboutContact) => {
    setIsShowAboutContact(showType)
  }
  return (
    <div onClick={() => handleShow(EAboutContact.ABOUT)} aria-hidden='true'>
      <ElementEffect
        motionProps={{
          initial: { opacity: 1 },
          whileHover: !isShowAboutContact ? 'hover' : {}
        }}
        elementType='button'
        elementClass={cn('px-4 py-2 rounded-sm border border-main_green text-main_green relative font-fira_mono', {
          'hover:text-black': !isShowAboutContact
        })}
      >
        <ElementEffect
          motionProps={{
            variants: buttonVariants
          }}
          elementClass='absolute left-0 top-0 w-0 h-full bg-main_green z-[-1]'
        ></ElementEffect>
        About Me
        <ElementEffect
          motionProps={{
            variants: arrowVariants
          }}
          elementClass='absolute top-1/2 -right-6 -translate-y-1/2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#64ffda'
            className='w-8 h-8'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
          </svg>
        </ElementEffect>
      </ElementEffect>
    </div>
  )
}
