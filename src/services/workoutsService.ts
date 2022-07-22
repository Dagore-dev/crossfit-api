import * as Workout from '../database/Workout'
import { v4 as uuid } from 'uuid'

function getAllWorkouts (): Workout.Workouts {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

function getWorkoutById (id: string): Workout.Workout|undefined {
  const workout = Workout.getWorkoutById(id)
  return workout
}

function createWorkout (newWorkout: Workout.Workout): Workout.Workout|undefined {
  const workoutToInsert: Workout.Workout = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  const ok = Workout.createWorkout(workoutToInsert)

  if (ok) {
    return workoutToInsert
  }
}

function updateWorkoutById (id: string): object {
  return {}
}

function deleteWorkoutById (id: string): boolean {
  return true
}

export {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkoutById,
  deleteWorkoutById
}
