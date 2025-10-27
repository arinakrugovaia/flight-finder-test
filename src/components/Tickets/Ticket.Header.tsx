import type { Ticket } from '@/types/types.ts'

interface TicketHeaderProps {
  ticket: Ticket
}

export function TicketHeader({ ticket }: TicketHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-xl sm:text-2xl font-medium text-primary-blue">
        {ticket.price}$
      </span>
      <img
        src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
        alt={ticket.carrier ?? 'Carrier logo'}
        className="h-8 sm:h-10"
      />
    </div>
  )
}
