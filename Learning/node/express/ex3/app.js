import express from 'express'
import cors from 'cors';
import { BikeRouter } from './routes/bikes.js';

const app = express()
app.use(express.json())
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:8080',
            'http://localhost:1234',
            'http://localhost:7890'
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

app.use('/bikes', BikeRouter)

app.use((req, res) => {
    res.status(404).send({ message: "Route not found"})
})

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})