import { Router } from 'express';
import { cakes } from '../controllers/cakes.controller.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import { cakeSchema, imageSchema } from '../schemas/cakeSchema.js';

const cakesRouter = Router();
cakesRouter.post("/cakes", validateSchema(cakeSchema, 400), validateSchema(imageSchema, 422), cakes);

export default cakesRouter;