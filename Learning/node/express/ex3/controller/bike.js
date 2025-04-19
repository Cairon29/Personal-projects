import crypto from 'crypto'
import bikes from '../bikes.json' with { type: 'json' }
import { BikeModel } from '../models/bike.js';

export class BikeController {
    static async getAll (req, res) {
        let { id } = req.query;
        
        const bikesResponse = await BikeModel.getAll({ id })
        res.status(bikesResponse.status).send(bikesResponse.value)
    }
} 