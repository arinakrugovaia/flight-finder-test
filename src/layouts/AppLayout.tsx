import { fetchTicketsThunk } from '@/state/slices/search-slice.ts'
import type { AppDispatch } from '@/state/store.ts'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AppContainer } from './AppContainer.tsx'
import { Header } from './Header.tsx'
import { SearchPageLayout } from './SearchPageLayout.tsx'

function AppLayout() {
  const dispatch = useDispatch<AppDispatch>()
  const didFetch = useRef(false)

  useEffect(() => {
    if (didFetch.current) return
    didFetch.current = true
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
