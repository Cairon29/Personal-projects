import { Router } from "express";
import { BikeController } from '../controller/bike.js';

export const BikeRouter = Router()

BikeRouter.get('/', BikeController.getAll)
BikeRouter.get('/:brand', BikeController.getBrand)
BikeRouter.post('/', BikeController.create)
BikeRouter.patch('/', BikeController.modifyBike)
BikeRouter.delete('/', BikeController.delete)
