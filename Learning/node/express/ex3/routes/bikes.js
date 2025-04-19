import bikes from '../bikes.json' with { type: 'json'}
import { Router } from "express";
import { bikePartialValidate, bikeValidate } from '../schemas/bike-schema.js';
import { BikeModel } from '../models/bike.js';
import { BikeController } from '../controller/bike.js';

export const BikeRouter = Router()

BikeRouter.get('/', BikeController.getAll)

BikeRouter.get('/:brand', async (req, res) => {
    const { brand } = req.params;

    const {status, value} = await BikeModel.getBrand({ brand })
    return res.status(status).send(value)
})

BikeRouter.post('/', async (req, res) => {
    const result = bikeValidate(req.body)
    
    if (!result.success) {
        return res.status(404).json({ message: 'No bike created'})
    }
    const { data } = result
    const createResponse = await BikeModel.create({ data })
    res.status(createResponse.status).json(createResponse.value);
})

BikeRouter.patch('/', async (req, res) => {
    const { id } = req.query;
    const bikeIndex = bikes.findIndex((b) => b.id === id)

    if (bikeIndex === -1) {
        return res.status(200).json({ message: 'Bike not found'})
    }

    const result = bikePartialValidate(req.body);

    if (!result.success) {
        return res.status(400).json({ message: 'Format data incorrect' })
    }

    const { data } = result;
    const modifiedResponse = await BikeModel.modifyBike({ data, bikeIndex })

    return res.status(200).json({modifiedResponse})
})

BikeRouter.delete('/', async (req, res) => {
    const { id } = req.query;
    const { status, value} = await BikeModel.delete({ id })
    // const { status, value} = response
    return res.status(status).send(value);
})