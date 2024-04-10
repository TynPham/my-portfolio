import { useContext } from 'react'
import { AppContext, AppContextType } from 'src/contexts/app.context'

const BURGER_BAR_WIDTH = [{ transform: 'rotate-45' }, { transform: 'scale-0' }, { transform: '-rotate-45' }]
const BurgerBar = ({ transform, isTransform }: { transform?: string; isTransform: boolean }) => {
  return (
    <div
      className={`w-9 rounded border-[1px] border-solid border-main_green bg-main_green transition-all duration-300 origin-left ${isTransform ? transform : ''}`}
    />
  )
}

export interface BurgerMenuProps {}

export default function BurgerMenu(props: BurgerMenuProps) {
  const { isOpenMenuMobile, setIsMenuMobile } = useContext<AppContextType>(AppContext)

  const handleToggleMenu = () => {
    setIsMenuMobile(!isOpenMenuMobile)
  }
  return (
    <div
      onClick={handleToggleMenu}
      aria-hidden='true'
      className='flex flex-col gap-[0.66rem] md:hidden cursor-pointer opacity-0 animate-appear'
    >
      {BURGER_BAR_WIDTH.map((bar, index) => (
        <BurgerBar key={index} transform={bar.transform} isTransform={isOpenMenuMobile} />
      ))}
    </div>
  )
}
