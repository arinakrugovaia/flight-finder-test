import type { ReactNode } from 'react'

interface AppContainerProps {
  children: ReactNode
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="w-[100vw] min-h-screen flex justify-center">
      <div className="max-w-[960px] w-full my-[50px] px-8 flex flex-col">
        {children}
      </div>
    </div>
  )
}
