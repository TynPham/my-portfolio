import { createContext, useState } from 'react'

export enum EAboutContact {
  ABOUT = 'about',
  CONTACT = 'contact'
}

export type AppContextType = {
  isOpenMenuMobile: boolean
  setIsMenuMobile: React.Dispatch<React.SetStateAction<boolean>>
  isShowAboutContact: EAboutContact | null
  setIsShowAboutContact: React.Dispatch<React.SetStateAction<EAboutContact | null>>
}

const initAppContext: AppContextType = {
  isOpenMenuMobile: false,
  setIsMenuMobile: () => null,
  isShowAboutContact: null,
  setIsShowAboutContact: () => null
}

export const AppContext = createContext<AppContextType>(initAppContext)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenMenuMobile, setIsMenuMobile] = useState<boolean>(initAppContext.isOpenMenuMobile)
  const [isShowAboutContact, setIsShowAboutContact] = useState<EAboutContact | null>(initAppContext.isShowAboutContact)
  return (
    <AppContext.Provider
      value={{
        isOpenMenuMobile,
        setIsMenuMobile,
        isShowAboutContact,
        setIsShowAboutContact
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
