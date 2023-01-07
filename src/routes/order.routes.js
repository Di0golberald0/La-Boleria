import { Router } from 'express';
import { order } from '../controllers/order.controller.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/orderSchema.js";

const orderRouter = Router();
orderRouter.post("/order", validateSchema(orderSchema), order);

export default orderRouter;