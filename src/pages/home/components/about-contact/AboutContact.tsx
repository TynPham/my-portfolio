/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence } from 'framer-motion'
import { Fragment, memo, useContext } from 'react'
import { AppContext, AppContextType } from 'src/contexts/app.context'
import AboutInfor from './AboutInfor'
import ContactForm from './ContactForm'

export interface AboutContactProps {}

const AboutContact = memo(function AboutContactInner(props: AboutContactProps) {
  const { isShowAboutContact, setIsShowAboutContact } = useContext<AppContextType>(AppContext)

  const handleClose = () => {
    setIsShowAboutContact(null)
  }

  return (
    <AnimatePresence>
      {isShowAboutContact && (
        <Fragment>
          <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)]'></div>
          <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] xl:w-[1200px] h-[90%] flex z-50 font-fira_mono transition-all'>
            <AboutInfor handleClose={handleClose} isShowAboutContact={isShowAboutContact} />
            <ContactForm handleClose={handleClose} isShowAboutContact={isShowAboutContact} />
          </div>
        </Fragment>
      )}
    </AnimatePresence>
  )
})

export default AboutContact
