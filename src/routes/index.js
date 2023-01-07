import { Router } from "express";
import cakesRouter from "./cakes.routes.js";
import clientsRouter from "./clients.routes.js";
import orderRouter from "./order.routes.js";
import ordersRouter from "./orders.routes.js";

const router = Router();
router.use(cakesRouter);
router.use(clientsRouter);
router.use(orderRouter);
router.use(ordersRouter);

export default router;