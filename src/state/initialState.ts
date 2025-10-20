import type { AppState, TotalTransferAmounts } from '@/types/types.ts'

const initialTransfersAmount: TotalTransferAmounts = Object.fromEntries(
  [0, 1, 2, 3, 4, 5, 6].map((n) => [n, true]),
) as TotalTransferAmounts

export const initialState: AppState = {
  search: {
    allTickets: [],
    visibleCount: 5,
    status: 'idle',
    error: null,
  },
  sort: 'CHEAPEST',
  filters: {
    transfersAmount: initialTransfersAmount,
  },
}
