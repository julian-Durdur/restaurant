import express from 'express'
import orderController from './order.controller'

export const orderRouter = express.Router()

orderRouter.route("/")
    .post(orderController.create)
    .get(orderController.findAll)
orderRouter.route("/:id")
    .get(orderController.findOne)
    .put(orderController.update)
    .delete(orderController.delete)
