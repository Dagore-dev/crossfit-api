import express from 'express'
import { createWorkout, deleteWorkoutById, getAllWorkouts, getWorkoutById, updateWorkoutById } from '../../controllers/workoutsController'
export const router = express.Router()

router
  .get('/', getAllWorkouts)
  .post('/', createWorkout)
  .get('/:workoutId', getWorkoutById)
  .put('/:workoutId', updateWorkoutById)
  .delete('/:workoutId', deleteWorkoutById)
