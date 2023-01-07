import { Router } from 'express';
import { orders } from '../controllers/ordersController.js';

const ordersRouter = Router();
ordersRouter.get("/orders", orders);
ordersRouter.get("/orders/:id", orders);

export default ordersRouter;