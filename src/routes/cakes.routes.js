import { Router } from 'express';
import { cakes } from '../controllers/cakes.controller.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import cakeSchema from "../schemas/cakeSchema.js";

const cakesRouter = Router();
cakesRouter.post("/cakes", validateSchema(cakeSchema), cakes);

export default cakesRouter;