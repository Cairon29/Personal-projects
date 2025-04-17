import express from 'express'
import bikes from './bikes.json' with { type : "json"}
import crypto from 'crypto';
import { bikePartialValidate, bikeValidate } from './schemas/bike-schema.js';
import cors from 'cors';

/*___________________________________________________ */

const app = express()
app.use(express.json())
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:8080',
            'http://localhost:1234'
        ];

            // ↓ this is a way of validating if the origin is in the allowed list
        if (ACCEPTED_ORIGINS.indexOf(origin) !== -1) {
            return callback(null, true)
        }
            // ↓ This is another way to validate
        // if (ACCEPTED_ORIGINS.includes(origin)) {
        //     return callback(null, true)
        // }

        if (!origin) {
            return callback(null, true)
        }
      
        return callback(new Error('Not allowed by CORS'))
    }
}))
app.disable('x-powered-by')

/*___________________________________________________ */

app.get('/', (req, res) => {
    res.status(200).json(bikes)
})

app.get('/bikes/:brand', (req, res) => {
    const { brand } = req.params;
    const brandBikes = bikes.filter((bike) => bike.brand.toLocaleLowerCase() === brand.toLocaleLowerCase())
    
    if (brandBikes.length > 0 ) {
        return res.status(200).send(brandBikes)
    }

    res.status(404).send({ message: `There are no bikes with the ${brand} brand`})
})

app.get('/bikes', (req, res) => {
    const { id } =  req.query;
    const bike = bikes.find(b => b.id === id)

    if (bike) {
        return res.status(200).send(bike)
    }

    res.status(404).json({ message: 'No bike found' })
})

app.post('/bikes', (req, res) => {
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

app.patch('/bikes', (req, res) => {
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

app.delete('/bikes', (req, res) => {
    const { id } = req.query;

    const bikeIndex = bikes.findIndex(b => b.id === id);

    if (bikeIndex === -1) {
        return res.status(404).json({ message: 'Bike not found'})
    }

    bikes.splice(bikeIndex, 1);
    return res.sendStatus(204);
})

/*___________________________________________________ */

app.use((req, res) => {
    res.status(200).send({ message: "Route not found"})
})

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})