import express from 'express'
import { Workout } from '../database/Workout'
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
  const { body } = request

  if ((body.name.length === 0) || (body.mode.length === 0) || (body.equipment.length === 0) || (body.exercises.length === 0) || (body.trainerTips.length === 0)) {
    response.status(400).send({ status: 'ERROR', message: 'Some fields are empty' })
  }

  const newWorkout: Workout = {
    id: '',
    createdAt: '',
    updatedAt: '',
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }
  const createdWorkout = services.createWorkout(newWorkout)

  if (createdWorkout === undefined) {
    response.status(409).send({ status: 'ERROR', message: `A workout with the name "${newWorkout.name}" already exists` })
  }

  response.status(201).send({ status: 'OK', data: createdWorkout })
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
