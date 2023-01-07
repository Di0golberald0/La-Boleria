import { Router } from 'express';
import { clients } from '../controllers/clientsController.js';

const clientsRouter = Router();
clientsRouter.post("/clients", clients);
clientsRouter.get("/clients/:id/orders", clients);

export default clientsRouter;