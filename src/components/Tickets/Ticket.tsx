import { TicketBody } from '@/components/Tickets/Ticket.Body.tsx'
import { TicketHeader } from '@/components/Tickets/Ticket.Header.tsx'
import type { ReactNode } from 'react'

interface TicketProps {
  children: ReactNode
}

export function Ticket({ children }: TicketProps) {
  return (
    <div className="w-full min-h-[180px] lg:min-h-[200px] h-full p-4 lg:p-5 flex flex-col justify-between gap-3 rounded-base shadow-base bg-primary-white text-primary-dark">
      {children}
    </div>
  )
}

Ticket.Header = TicketHeader
Ticket.Body = TicketBody
