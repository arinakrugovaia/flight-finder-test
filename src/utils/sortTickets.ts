import { CHEAPEST, FASTEST, OPTIMAL } from '@/state/constants/sort-constants.ts'
import type { SortType, Tickets } from '@/types/types.ts'

export const sortTickets = (tickets: Tickets, sort: SortType): Tickets => {
  const sorted = [...tickets]

  switch (sort) {
    case CHEAPEST:
      return sorted.sort((a, b) => a.price - b.price)
    case FASTEST:
      return sorted.sort((a, b) => {
        const aDuration = a.segments.reduce(
          (acc, segment) => acc + segment.duration,
          0,
        )
        const bDuration = b.segments.reduce(
          (acc, segment) => acc + segment.duration,
          0,
        )
        return aDuration - bDuration
      })
    case OPTIMAL:
      return sorted.sort((a, b) => {
        const aDuration = a.segments.reduce(
          (acc, segment) => acc + segment.duration,
          0,
        )
        const bDuration = b.segments.reduce(
          (acc, segment) => acc + segment.duration,
          0,
        )

        const aScore = a.price + aDuration * 0.2
        const bScore = b.price + bDuration * 0.2

        return aScore - bScore
      })
    default:
      return sorted
  }
}
