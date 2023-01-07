import { Router } from "express";
import cakesRouter from "./cakes.js";
import clientsRouter from "./clients.js";
import orderRouter from "./order.js";
import ordersRouter from "./orders.js";

const router = Router();
router.use(cakesRouter);
router.use(clientsRouter);
router.use(orderRouter);
router.use(ordersRouter);

export default router;