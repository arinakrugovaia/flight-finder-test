interface TicketParam {
  title: string
  description: string
}

export function TicketParam({ title, description }: TicketParam) {
  return (
    <div className="sm:max-w-[140px] w-full flex flex-col justify-start gap-0.5">
      <div className="text-secondary-gray font-bold text-xs">
        {title.toUpperCase()}
      </div>
      <div className="text-primary-dark text-sm">{description}</div>
    </div>
  )
}
