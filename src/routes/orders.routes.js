import { Router } from 'express';
import { order, orders, ordersInfo } from '../controllers/orders.controller.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/orderSchema.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(orderSchema, 400), order);

ordersRouter.get("/orders", orders);
ordersRouter.get("/orders/:id", ordersInfo);

export default ordersRouter;