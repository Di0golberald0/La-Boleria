import { Router } from 'express';
import { clients, ordersByClient } from '../controllers/clients.controller.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import clientSchema from "../schemas/clientSchema.js";

const clientsRouter = Router();
clientsRouter.post("/clients", validateSchema(clientSchema, 400), clients);
clientsRouter.get("/clients/:id/orders", ordersByClient);

export default clientsRouter;