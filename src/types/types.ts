export interface AppState {
  search: {
    allTickets: Tickets
    visibleCount: number
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null | string
  }
  sort: SortType
  filters: Filters
}

export type Filters = {
  transfersAmount: TotalTransferAmounts
}

export type SortType = 'CHEAPEST' | 'FASTEST' | 'OPTIMAL'

export type TransferAmountNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface TotalTransferAmounts {
  0?: boolean
  1?: boolean
  2?: boolean
  3?: boolean
  4?: boolean
  5?: boolean
  6?: boolean
}

export type Tickets = Ticket[]

export interface Ticket {
  id: string
  price: number
  carrier: string
  segments: Segment[]
}

export interface Segment {
  origin: Airport
  destination: Airport
  date: string
  stops: Airport[]
  duration: number
}

export interface Airport {
  city: string
  code: string
}
