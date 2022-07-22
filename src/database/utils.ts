import fs from 'fs'
import { Workouts } from './Workout'

function saveToDatabase (db: Workouts): void {
  fs.writeFileSync('src/database/db.json', JSON.stringify(db, null, 2), { encoding: 'utf8' })
}

export {
  saveToDatabase
}
