import db from './db.json'

function getAllWorkouts (): object[] {
  return db.workouts
}

function getWorkoutById (id: string): object|undefined {
  const workout = db.workouts.find(workout => workout.id === id)
  return workout
}

export {
  getAllWorkouts,
  getWorkoutById
}
