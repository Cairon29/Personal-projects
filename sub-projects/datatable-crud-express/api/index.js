import express from 'express'
import cors from 'cors'
import { UserRouter } from './routes/users.js'

const PORT = 5556
const app = express()


app.use(express.json())
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:5173'
        ];

        if (ACCEPTED_ORIGINS.indexOf(origin) !== -1) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
}))

app.use('/api/users', UserRouter)

app.listen(PORT, () => {
    console.log('currently running on port 5556');
})