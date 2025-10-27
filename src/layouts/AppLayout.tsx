import { fetchTicketsThunk } from '@/state/slices/search-slice.ts'
import type { AppDispatch } from '@/state/store.ts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppContainer } from './AppContainer.tsx'
import { Header } from './Header.tsx'
import { SearchPageLayout } from './SearchPageLayout.tsx'

function AppLayout() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchTicketsThunk())
  }, [dispatch])

  return (
    <AppContainer>
      <Header />
      <SearchPageLayout />
    </AppContainer>
  )
}

export default AppLayout
