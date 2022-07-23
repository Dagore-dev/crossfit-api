import * as Workout from '../database/Workout'

function isValidBodyForWorkout (body: Workout.Workout): boolean {
  const { name, mode, equipment, exercises, trainerTips } = body

  return (name.length !== 0) &&
        (mode.length !== 0) &&
        (Array.isArray(equipment)) &&
        (Array.isArray(exercises)) &&
        (Array.isArray(trainerTips))
}

export {
  isValidBodyForWorkout
}
