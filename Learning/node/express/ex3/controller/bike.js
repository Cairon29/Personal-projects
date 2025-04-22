import bikes from '../bikes.json' with { type: 'json' }
import { BikeModel } from '../models/bike.js';
import {bikeValidate} from "../schemas/bike-schema.js";

export class BikeController {
    static async getAll (req, res) {
        let { id } = req.query;
        
        const bikesResponse = await BikeModel.getAll({ id })
        res.status(bikesResponse.status).send(bikesResponse.value)
    }

    static async getBrand (req, res) {
        const { brand } = req.params;
        const { status, value } = await BikeModel.getBrand({ brand })
        return res.status(status).send(value)
    }

    static async create (req, res) {
        const result = bikeValidate(req.body)
    
        if (!result.success) {
            return res.status(404).json({ message: 'No bike created'})
        }
        const { data } = result
        const createResponse = await BikeModel.create({ data })
        res.status(createResponse.status).json(createResponse.value);
    }

    static async modifyBike (req, res) {
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
    }

    static async delete (req, res) {
        const { id } = req.query;
        const { status, value} = await BikeModel.delete({ id })
        return res.status(status).send(value);
    }
} 