import bikes from '../bikes.json' with { type: 'json'}
import { Router } from "express";
import { bikePartialValidate, bikeValidate } from '../schemas/bike-schema.js';
import crypto from 'crypto'

export const BikeRouter = Router()

// BikeRouter.get('/', (req, res) => {
//     res.status(200).json(bikes)
// })

// BikeRouter.get('/', (req, res) => {
//     const { id } =  req.query;
//     const bike = bikes.find(b => b.id === id)

//     if (bike) {
//         return res.status(200).json(bike)
//     }

//     res.status(404).json({ message: 'No bike found' })
// })


BikeRouter.get('/', (req, res) => {
    const { id } = req.query;
    
    if (id) {
        const bike = bikes.find(b => b.id === id);
        if (bike) {
            return res.status(200).json(bike);
        }
    } else {
        try {
            return res.status(200).json(bikes);
        } catch {
            return res.status(404).json({ message: 'No bike found' });
        }
    }
    
})

BikeRouter.get('/:brand', (req, res) => {
    const { brand } = req.params;
    const brandBikes = bikes.filter((bike) => bike.brand.toLocaleLowerCase() === brand.toLocaleLowerCase())
    
    if (brandBikes.length > 0 ) {
        return res.status(200).send(brandBikes)
    }

    res.status(404).send({ message: `There are no bikes with the ${brand} brand`})
})

BikeRouter.post('/', (req, res) => {
    const newId = crypto.randomUUID()
    const result = bikeValidate(req.body)

    if (!result.success) {
        return res.status(404).json({ message: 'No bike created'})
    }

    const newBike = {
        id: newId,
        ...result.data
    };

    bikes.push(newBike)
    res.status(201).json(newBike);
})

BikeRouter.patch('/', (req, res) => {
    const { id } = req.query;
    const bikeIndex = bikes.findIndex((b) => b.id === id)

    if (bikeIndex === -1) {
        return res.status(200).json({ message: 'Bike not found'})
    }

    const result = bikePartialValidate(req.body);

    if (!result.success) {
        return res.status(400).json({ message: 'Format data incorrect' })
    }

    const modifiedBike = {
        ...bikes[bikeIndex],
        ...result.data
    }

    bikes[bikeIndex] = modifiedBike
    return res.status(200).json({modifiedBike})
})

BikeRouter.delete('/', (req, res) => {
    const { id } = req.query;

    const bikeIndex = bikes.findIndex(b => b.id === id);

    if (bikeIndex === -1) {
        return res.status(404).json({ message: 'Bike not found'})
    }

    bikes.splice(bikeIndex, 1);
    return res.sendStatus(204);
})