import type { Segment } from '@/types/types.ts'

const formatDate = (date: Date) =>
  `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`

export function getTicketInfoToDisplay(segment: Segment) {
  const departure = new Date(segment.date)
  const arrival = new Date(departure.getTime() + segment.duration * 60 * 1000)

  const hoursDuration = Math.trunc(segment.duration / 60)
  const minutesDuration = segment.duration % 60

  const day = departure.getDate()
  const month = departure
    .toLocaleString('ru-RU', { month: 'short' })
    .replace('.', '')

  const durationLabel =
    hoursDuration > 0
      ? `${hoursDuration}ч ${minutesDuration}м`
      : `${minutesDuration}м`

  return {
    departure: formatDate(departure),
    arrival: formatDate(arrival),
    durationLabel,
    day,
    month,
  }
}
