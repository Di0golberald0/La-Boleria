import { Router } from 'express';
import { order } from '../controllers/orderController.js';

const orderRouter = Router();
orderRouter.post("/order", order);

export default orderRouter;