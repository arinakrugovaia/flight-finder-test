import type { Tickets } from '@/types/types.ts'

export async function fetchTickets(): Promise<Tickets> {
  const response = await fetch('http://localhost:4000/tickets')
  if (!response.ok) {
    throw new Error('Сервер временно недоступен')
  }
  const data: Tickets = await response.json()
  return data
}
