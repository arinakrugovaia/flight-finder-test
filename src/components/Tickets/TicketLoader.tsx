export function TicketLoader() {
  return (
    <div className=" w-full min-h-[200px] h-full p-6 flex flex-col justify-between rounded-base shadow-base animate-pulse gap-3 bg-primary-white">
      <div className="h-6 bg-secondary-light-gray mb-4 w-1/6 rounded" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <div className="h-4 bg-secondary-light-gray w-1/6 rounded" />
          <div className="h-4 bg-secondary-light-gray w-1/6 rounded" />
          <div className="h-4 bg-secondary-light-gray w-1/6 rounded" />
        </div>
        <div className="flex justify-between gap-2">
          <div className="h-4 bg-secondary-light-gray w-1/6 rounded" />
          <div className="h-4 bg-secondary-light-gray w-1/6 rounded" />
          <div className="h-4 bg-secondary-light-gray w-1/6 rounded" />
        </div>
      </div>
    </div>
  )
}
