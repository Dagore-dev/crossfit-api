import * as Workout from '../database/Workout'

function getAllWorkouts (): object {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

function getWorkoutById (id: string): object|undefined {
  const workout = Workout.getWorkoutById(id)
  return workout
}

function createWorkout (id: string): object {
  return {}
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
