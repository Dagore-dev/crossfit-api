import fs from 'fs'
import { getWorkoutById, Workouts } from './Workout'

function saveToDatabase (db: Workouts): void {
  fs.writeFileSync('src/database/db.json', JSON.stringify(db, null, 2), { encoding: 'utf8' })
}

function isNewNameInUseInOtherWorkout (db: Workouts, id: string, newName: string): boolean {
  const oldWorkout = getWorkoutById(id)

  if (oldWorkout?.name === newName) {
    return false
  }

  const workoutsWithSameName = db.workouts.filter(workout => workout.name === newName)

  return workoutsWithSameName.length > 0
}

export {
  saveToDatabase,
  isNewNameInUseInOtherWorkout
}
