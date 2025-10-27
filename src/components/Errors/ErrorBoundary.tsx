import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <h2>Что-то пошло не так. Попробуйте перезагрузить страницу.</h2>
        )
      )
    }
    return this.props.children
  }
}
