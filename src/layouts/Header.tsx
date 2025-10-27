import {
  fetchTicketsThunk,
  refreshSearchState,
} from '@/state/slices/search-slice.ts'
import type { AppDispatch } from '@/state/store.ts'
import { useDispatch } from 'react-redux'
import logo from '../images/logo.svg'

export function Header() {
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = () => {
    dispatch(refreshSearchState())
    dispatch(fetchTicketsThunk())
  }

  return (
    <header className="w-full h-[80px] md:h-[120px] flex justify-center cursor-pointer">
      <img src={logo} alt="App Logo" onClick={handleClick} />
    </header>
  )
}
