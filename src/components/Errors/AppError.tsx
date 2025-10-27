export function AppError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen text-center gap-4 text-primary-dark">
      <p className="text-base font-medium">Что-то пошло не так 😢</p>
      <p className="text-secondary-gray text-xs text-center max-w-[250px]">
        Произошла непредвиденная ошибка. Мы уже работаем над её исправлением.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="rounded-xl text-xs lg:text-base py-2 px-3 lg:px-5 bg-primary-blue text-primary-white"
      >
        Обновить страницу
      </button>
    </div>
  )
}
