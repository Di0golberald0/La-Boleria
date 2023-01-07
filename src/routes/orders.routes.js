import { Router } from 'express';
import { orders } from '../controllers/orders.controller.js';

const ordersRouter = Router();
ordersRouter.get("/orders", orders);
ordersRouter.get("/orders/:id", orders);

export default ordersRouter;