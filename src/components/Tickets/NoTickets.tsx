export function NoTickets() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-primary-dark text-sm mt-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 text-secondary-gray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 16.5l-7.5-4.5L21 7.5M3 16.5l7.5-4.5L3 7.5m9 13.5V3"
        />
      </svg>
      <p className="text-base font-medium">Билетов не найдено</p>
      <p className="text-secondary-gray text-xs text-center max-w-[220px]">
        Попробуйте изменить фильтры — возможно вы найдете то, что вам подходит
        ✈️
      </p>
    </div>
  )
}
