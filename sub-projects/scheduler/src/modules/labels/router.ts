import { Router } from "express";
import { LabelController } from "./controller.ts";

export const LabelRouter = Router()

LabelRouter.get('/', LabelController.getLabels)
// LabelRouter.post('/', LabelController.createLabel)
