import { TicketParam } from '@/components/Tickets/TicketParam.tsx'
import type { Ticket, TransferAmountNumber } from '@/types/types.ts'
import { getTicketInfoToDisplay } from '@/utils/getTicketInfo.ts'
import { stringifyTransferAmount } from '@/utils/stringifyTransferAmount.ts'

interface TicketBodyProps {
  ticket: Ticket
}

export function TicketBody({ ticket }: TicketBodyProps) {
  return (
    <div>
      {ticket.segments.map((segment, index) => {
        const info = getTicketInfoToDisplay(segment)
        const { ru: transfersAmountString } = stringifyTransferAmount(
          segment.stops.length as TransferAmountNumber,
        )

        return (
          <div key={index}>
            <div className="mb-2 sm:mb-3">{`${info.day} ${info.month}`}</div>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-1">
              <TicketParam
                title={`${segment.origin.code} - ${segment.destination.code}`}
                description={`${info.departure} - ${info.arrival}`}
              />
              <TicketParam title="В ПУТИ" description={info.durationLabel} />
              <TicketParam
                title={transfersAmountString}
                description={segment.stops.length > 0 ? segment.stops.map((stop) => stop.code).join(', ') : "—"}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
