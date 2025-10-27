import type { Airport, Tickets } from '@/types/types.ts'
import cors from 'cors'
import express from 'express'

const app = express()
const PORT = 4000

app.use(cors())

const ORIGIN: Airport = { city: 'Moscow', code: 'SVO' }
const DESTINATION: Airport = { city: 'Paris', code: 'CDG' }
const CARRIERS = ['S7']

function generateTickets(ticketsAmount: number = 15): Tickets {
  return Array.from({ length: ticketsAmount }, (_, index) => {
    const stopsCount = Math.floor(Math.random() * 6)
    const stops: Airport[] = Array.from({ length: stopsCount }, (_, i) => ({
      city: `StopCity${i + 1}`,
      code: `STP${i + 1}`,
    }))

    const duration = Math.floor(Math.random() * 600) + 60
    const price = Math.floor(Math.random() * 500) + 100
    const carrier = CARRIERS[Math.floor(Math.random() * CARRIERS.length)]

    return {
      id: `ticket-${index}`,
      price,
      carrier: carrier,
      segments: [
        {
          origin: ORIGIN,
          destination: DESTINATION,
          date: new Date(
            Date.now() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
          ).toISOString(),
          stops,
          duration,
        },
      ],
    }
  })
}

app.get('/tickets', (_, res) => {
  if (Math.random() < 0.1) {
    return res.status(500).json({ message: 'Сервер временно недоступен.' })
  }

  const tickets = generateTickets(15)
  res.json(tickets)
})

app.listen(PORT, () => {
  console.log(`Fake ticket server running at http://localhost:${PORT}`)
})
