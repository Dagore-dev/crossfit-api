import express from 'express'
import { Workout } from '../database/Workout'
import * as services from '../services/workoutsService'
import { isValidBodyForWorkout } from './utils'

function getAllWorkouts (request: express.Request, response: express.Response): void {
  const allWorkouts = services.getAllWorkouts()
  response.send({ status: 'OK', data: allWorkouts })
}

function getWorkoutById (request: express.Request, response: express.Response): void {
  const { workoutId } = request.params
  const workout = services.getWorkoutById(workoutId)
  response.send({ status: 'OK', data: workout })
}

function createWorkout (request: express.Request, response: express.Response): void {
  const { body } = request

  if (isValidBodyForWorkout(body)) {
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

    if (createdWorkout !== undefined) {
      response.status(201).send({ status: 'OK', data: createdWorkout })
    } else {
      response.status(409).send({ status: 'ERROR', message: `A workout with the name "${newWorkout.name}" already exists` })
    }
  } else {
    response.status(400).send({ status: 'ERROR', message: 'Some fields are empty' })
  }
}

function updateWorkoutById (request: express.Request, response: express.Response): void {
  const { body } = request

  if (isValidBodyForWorkout(body)) {
    const { workoutId } = request.params
    const workout = services.getWorkoutById(workoutId)

    if (workout !== undefined) {
      const updatedWorkout = services.updateWorkoutById(workoutId, body, workout.createdAt)

      if (updatedWorkout !== undefined) {
        response.status(200).send({ status: 'OK', data: updatedWorkout })
      } else {
        response.status(409).send({ status: 'ERROR', message: `Another workout with name "${workout.name}" is already stored in database` })
      }
    } else {
      response.status(409).send({ status: 'ERROR', message: `Workout with id "${workoutId}" seems not to be stored in database` })
    }
  } else {
    response.status(409).send({
      status: 'ERROR',
      message:
      `
      Invalid body content. Body must contain properties:
      {
        name: string,
        mode: string,
        equipment: string[],
        exercises: string[],
        trainerTips: string[]
      }
    `
    })
  }
}

function deleteWorkoutById (request: express.Request, response: express.Response): void {
  const { workoutId } = request.params
  const workout = services.deleteWorkoutById(workoutId)

  if (workout !== undefined) {
    response.status(200).send({ status: 'OK', data: workout })
  } else {
    response.status(409).send({ status: 'ERROR', message: `Workout with id "${workoutId}" seems not to be stored in database ` })
  }
}

export {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkoutById,
  deleteWorkoutById
}
