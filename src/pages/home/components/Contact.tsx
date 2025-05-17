import ElementEffect from 'src/components/effect/ElementEffect'
import { useContext } from 'react'
import { AppContext, AppContextType, EAboutContact } from 'src/contexts/app.context'
import { EASE_ENTERING_VARIANTS, buttonVariants } from 'src/constants/animations'

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  const { setIsShowAboutContact } = useContext<AppContextType>(AppContext)
  const handleShow = (showType: EAboutContact) => {
    setIsShowAboutContact(showType)
  }
  return (
    <section id='contact' className='min-h-screen'>
      <ElementEffect
        animationProps={{
          initial: { y: 50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.75, ease: EASE_ENTERING_VARIANTS }
        }}
        className='font-fira_mono flex flex-col gap-5 md:gap-32 min-h-screen justify-center xl:ml-32'
      >
        <h2 className='mx-auto w-max text-xl md:text-3xl text-lightest_slate relative after:content-[""] after:block after:absolute after:-bottom-4 after:left-0 after:w-full after:bg-main_green after:h-[0.5px] font-medium'>
          <span className='text-main_green text-lg md:text-2xl'>04.</span> Contact with me
        </h2>
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-3xl md:text-5xl text-lightest_slate font-bold mt-4'>Get In Touch</h3>
          <p className='mt-8 max-w-[700px]'>
            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a
            question or just want to say hi, I’ll try my best to get back to you!
          </p>
          <button onClick={() => handleShow(EAboutContact.CONTACT)}>
            <ElementEffect
              animationProps={{
                initial: { opacity: 1 },
                whileHover: 'hover'
              }}
              className={
                'px-6 py-3 rounded-sm border border-main_green text-main_green relative font-fira_mono hover:text-black w-max mt-16'
              }
            >
              <ElementEffect
                animationProps={{
                  variants: buttonVariants
                }}
                className='absolute left-0 top-0 w-0 h-full bg-main_green z-[-1]'
              ></ElementEffect>
              Say hello
            </ElementEffect>
          </button>
        </div>
      </ElementEffect>
    </section>
  )
}
