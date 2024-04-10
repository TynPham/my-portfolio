import useScrollDirection, { SCROLL_TYPE } from 'src/hooks/useScrollDirection'
import { cn } from 'src/utils/utils'
import HeaderChild from './HeaderChild'

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const { scrollDirection } = useScrollDirection()
  return (
    <header
      className={cn(
        'fixed w-full z-30 font-fira_mono text-lightest_slate bg-[rgba(10,_25,_47,_0.85)] shadow-navy_shadow h-24 px-6 sm:px-10 lg:px-12 text-sm flex items-center justify-between backdrop-blur-md transition-all duration-300 ease-in-out top-0',
        {
          'top-0': scrollDirection === SCROLL_TYPE.UP,
          '-top-24': scrollDirection === SCROLL_TYPE.DOWN
        }
      )}
    >
      <HeaderChild />
    </header>
  )
}
