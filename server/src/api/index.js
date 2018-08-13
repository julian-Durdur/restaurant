import express from 'express'
import { mealRouter } from './resources/meal/meal.router';
import { userRouter } from './resources/user/user.router';
import { orderRouter } from './resources/order/order.router';

export const restRouter = express.Router()

restRouter.use('/meals', mealRouter)
restRouter.use('/users', userRouter)
restRouter.use('/orders', orderRouter)
