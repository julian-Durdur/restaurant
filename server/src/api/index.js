import express from 'express'
import { mealRouter } from './resources/meal/meal.router';

export const restRouter = express.Router()

restRouter.use('/meals', mealRouter)