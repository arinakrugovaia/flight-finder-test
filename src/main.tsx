import { AppError } from '@/components/Errors/AppError.tsx'
import { ErrorBoundary } from '@/components/Errors/ErrorBoundary.tsx'
import { store } from '@/state/store.ts'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import AppLayout from './layouts/AppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<AppError />}>
        <AppLayout />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
)
