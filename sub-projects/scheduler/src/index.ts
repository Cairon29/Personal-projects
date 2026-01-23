import express from 'express';
import dotenv from 'dotenv';
// @`ts-ignore
import cors from 'cors';
import { config } from './config.js';

import type { Request, Response } from 'express';
import { UserRouter } from './users/controller.ts';

dotenv.config();
const app = express();

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
            'https://UrCommit.com',
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

const port = config.app.port;

app.get('/', (req: Request, res: Response) => {
    res.send({message: 'Hello, World!'});
})

app.get('/test', (req: Request, res: Response) => {
    res.send({message: 'Hello, World!'});
});

app.use('/users', UserRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
