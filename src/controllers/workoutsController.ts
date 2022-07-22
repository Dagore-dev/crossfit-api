import express from 'express'
import * as services from '../services/workoutsService'

function getAllWorkouts (request: express.Request, response: express.Response): void {
  const allWorkouts = services.getAllWorkouts()
  response.send({ status: 'OK', data: allWorkouts })
}

function getWorkoutById (request: express.Request, response: express.Response): void {
  const workout = services.getWorkoutById(request.params.workoutId)
  response.send({ status: 'OK', data: workout })
}

function createWorkout (request: express.Request, response: express.Response): void {
  // const createdWorkout = services.createWorkout(request.params.workoutId)
  response.send(`Post workout = ${request.params.workoutId}`)
}

function updateWorkoutById (request: express.Request, response: express.Response): void {
  // const updateWorkout = services.updateWorkoutById(request.params.workoutId)
  response.send(`Patch workout = ${request.params.workoutId}`)
}

function deleteWorkoutById (request: express.Request, response: express.Response): void {
  // const isDeleted = services.deleteWorkoutById(request.params.workoutId)
  response.send(`Delete workout = ${request.params.workoutId}`)
}

export {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkoutById,
  deleteWorkoutById
}
