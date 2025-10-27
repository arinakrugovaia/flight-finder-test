import { ServerError } from '@/components/Errors/ServerError.tsx'
import { Sorts } from '@/components/Sorts/Sorts.tsx'
import { NoTickets, Ticket, TicketLoader } from '@/components/Tickets'
import { TICKETS_PER_PAGE } from '@/state/constants/search-constants.ts'
import {
  getSearchStatus,
  getSortedAndFilteredTicketsToDisplay,
} from '@/state/selectors.ts'
import { showMoreTickets } from '@/state/slices/search-slice.ts'
import type { AppDispatch } from '@/state/store.ts'
import { useDispatch, useSelector } from 'react-redux'
import { FiltersLayout } from './FiltersLayout.tsx'

export function SearchPageLayout() {
  const dispatch = useDispatch<AppDispatch>()
  const tickets = useSelector(getSortedAndFilteredTicketsToDisplay)
  const searchStatus = useSelector(getSearchStatus)

  if (searchStatus === 'failed') return <ServerError />

  function renderTicketsOrLoader() {
    if (searchStatus === 'loading') {
      return Array.from({ length: TICKETS_PER_PAGE }, (_, i) => (
        <TicketLoader key={i} />
      ))
    }
    if (tickets.length === 0) {
      return <NoTickets />
    }
    return tickets.map((ticket) => (
      <Ticket key={ticket.id}>
        <Ticket.Header ticket={ticket} />
        <Ticket.Body ticket={ticket} />
      </Ticket>
    ))
  }

  return (
    <main className="flex flex-col md:flex-row justify-between items-start gap-4 lg:gap-8">
      <h1 className="visually-hidden">Flight Finder App </h1>
      <FiltersLayout />
      <div className="w-full flex flex-col gap-4 lg:gap-8">
        <Sorts />
        <div className="flex flex-col gap-1.5 lg:gap-3">
          {renderTicketsOrLoader()}
        </div>
        {searchStatus === 'succeeded' && tickets.length > 0 && (
          <button
            className="p-3 md:p-5 text-sm md:text-base"
            onClick={() => dispatch(showMoreTickets())}
          >
            ЕЩЕ
          </button>
        )}
      </div>
    </main>
  )
}
