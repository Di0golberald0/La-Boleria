import { Router } from 'express';
import { cakes } from '../controllers/cakesController.js';

const cakesRouter = Router();
cakesRouter.post("/cakes", cakes);

export default cakesRouter;