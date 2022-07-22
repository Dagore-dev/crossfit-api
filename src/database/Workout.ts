import db from './db.json'
import { saveToDatabase } from './utils'
export type Workouts = typeof db
export interface Workout {
  id: string
  name: string
  mode: string
  equipment: string[]
  exercises: string[]
  createdAt: string
  updatedAt: string
  trainerTips: string[]
}

function getAllWorkouts (): Workouts {
  return db
}

function getWorkoutById (id: string): Workout|undefined {
  const workout = db.workouts.find(workout => workout.id === id)
  return workout
}

function createWorkout (newWorkout: Workout): boolean {
  const index = db.workouts.findIndex(workout => workout.name === newWorkout.name)
  const isAlreadyAdded = index !== -1

  if (isAlreadyAdded) {
    return false
  }

  db.workouts.push(newWorkout)

  saveToDatabase(db)
  return true
}

export {
  getAllWorkouts,
  getWorkoutById,
  createWorkout
}
