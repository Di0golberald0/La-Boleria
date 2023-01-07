import { Router } from 'express';
import { clients } from '../controllers/clients.controller.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import clientSchema from "../schemas/clientSchema.js";

const clientsRouter = Router();
clientsRouter.post("/clients", validateSchema(clientSchema), clients);
clientsRouter.get("/clients/:id/orders", clients);

export default clientsRouter;