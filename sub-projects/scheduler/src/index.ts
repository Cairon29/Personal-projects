// @`ts-ignore
import cors from 'cors';
import express from 'express';
import type { Request, Response } from 'express';
import { config } from './config.js';
import { api } from './modules/interface.ts';

const app = express();
const port = config.app.port;

app.use(express.json());

app.use(cors({
    origin: (
        origin: string | undefined, 
        callback: (
            err: Error | null, 
            allow?: boolean
        ) => void
    ) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:1111',
            'https://UrSchedule.com',
        ];
        if (ACCEPTED_ORIGINS.includes(origin || '')) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }
      
        return callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hello, World!' });
})

app.use('/api/v1', api);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
