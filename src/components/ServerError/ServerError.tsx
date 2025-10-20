interface ServerErrorProps {
  message?: string
}

export function ServerError({ message }: ServerErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-primary-dark h-[60vh]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-base font-medium">Ошибка при загрузке билетов</p>
      <p className="text-secondary-gray text-xs text-center max-w-[250px]">
        {message || 'Попробуйте обновить страницу нажав на иконку самолета или повторить запрос позже ✈️'}
      </p>
    </div>
  )
}
