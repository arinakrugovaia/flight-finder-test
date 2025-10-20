import type {
  AppState,
  SortType,
  Tickets,
  TotalTransferAmounts,
} from '@/types/types.ts'
import { filterTickets } from '@/utils/filterTickets.ts'
import { sortTickets } from '@/utils/sortTickets.ts'
import { createSelector } from '@reduxjs/toolkit'

export const getAllTickets = (state: AppState): Tickets =>
  state.search.allTickets
export const getVisibleCount = (state: AppState): number =>
  state.search.visibleCount
export const getSort = (state: AppState): SortType => state.sort
export const getTransfersAmount = (state: AppState): TotalTransferAmounts =>
  state.filters.transfersAmount
export const getSearchStatus = (state: AppState) => state.search.status

export const getSortedAndFilteredTicketsToDisplay = createSelector(
  [getAllTickets, getTransfersAmount, getSort, getVisibleCount],
  (tickets, transfersFilter, sort, visibleCount) => {
    const filtered = filterTickets(tickets, transfersFilter)
    const sorted = sortTickets(filtered, sort)
    return sorted.slice(0, visibleCount)
  },
)

export const getAllUniqueTransfers = createSelector(
  getAllTickets,
  (tickets: Tickets) =>
    Array.from(
      new Set(
        tickets.flatMap((ticket) =>
          ticket.segments.map((segment) => segment.stops.length),
        ),
      ),
    ).sort((a, b) => a - b),
)
