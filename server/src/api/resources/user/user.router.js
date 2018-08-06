import express from 'express'
import userController from './user.controller'

export const userRouter = express.Router()

userRouter.route("/")
    .post(userController.create)
    .get(userController.findAll)
userRouter.route("/:id")
    .get(userController.findOne)
    .put(userController.update)
    .delete(userController.delete)