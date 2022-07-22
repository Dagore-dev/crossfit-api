import express from 'express'
import { createWorkout, deleteWorkoutById, getAllWorkouts, getWorkoutById, updateWorkoutById } from '../../controllers/workoutsController'
export const router = express.Router()

router
  .get('/', getAllWorkouts)
  .get('/:workoutId', getWorkoutById)
  .post('/:workoutId', createWorkout)
  .patch('/:workoutId', updateWorkoutById)
  .delete('/:workoutId', deleteWorkoutById)
