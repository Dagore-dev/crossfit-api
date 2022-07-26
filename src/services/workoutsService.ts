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

function updateWorkoutById (id: string, updatedWorkout: Workout.Workout, createdAt: string): Workout.Workout|undefined {
  const update = {
    ...updatedWorkout,
    id,
    createdAt,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  const ok = Workout.updatedWorkoutById(id, update)

  if (ok) {
    return update
  }
}

function deleteWorkoutById (id: string): Workout.Workout|undefined {
  const workoutToDelete = getWorkoutById(id)

  if (workoutToDelete !== undefined) {
    Workout.deleteWorkoutById(id)
  }

  return workoutToDelete
}

export {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkoutById,
  deleteWorkoutById
}
