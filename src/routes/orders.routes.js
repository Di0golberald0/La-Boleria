import { Router } from 'express';
import { orders, ordersInfo } from '../controllers/orders.controller.js';

const ordersRouter = Router();
ordersRouter.get("/orders", orders);
ordersRouter.get("/orders/:id", ordersInfo);

export default ordersRouter;