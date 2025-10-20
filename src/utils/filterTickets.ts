import type { Tickets, TotalTransferAmounts } from '@/types/types.ts'

export const filterTickets = (
  tickets: Tickets,
  transfersAmount: TotalTransferAmounts,
): Tickets =>
  tickets.filter((ticket) =>
    ticket.segments.some(
      (segment) =>
        !!transfersAmount[segment.stops.length as keyof TotalTransferAmounts],
    ),
  )
