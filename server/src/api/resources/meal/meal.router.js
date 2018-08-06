import express from 'express'
import mealController from '../meal/meal.controller'

export const mealRouter = express.Router()

mealRouter.route("/")
    .post(mealController.create)
    .get(mealController.findAll)
mealRouter.route("/:id")
    .get(mealController.findOne)
    .put(mealController.update)
    .delete(mealController.delete)