import express from 'express'
import dotenv from 'dotenv'
import { router as v1WorkoutRoutes } from './v1/routes/workoutRoutes'

dotenv.config()

const app = express()
const PORT: string = process.env.PORT ?? '3000'

app.use('/api/v1/workouts', v1WorkoutRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
