import express from 'express';
import crypto from 'crypto';
import { validateMovie } from './schema/movieSchema.js'
import { readFile } from 'fs/promises';

const movies = JSON.parse(
    await readFile(
        new URL('./movies.json', import.meta.url)
    )
);

const app = express();
const port = 3456;

// Add this line to parse JSON bodies
app.use(express.json());

app.use((req, res, next) => {  // Fixed parameter order
    if (req.method === 'POST' && req.url === '/movies') {
        console.log('Middleware movies');
        next();
    } else {
        next();
    }
})

app.get('/', (req, res) => {
    res.status(200).json({message: `app running on port ${port}`});
})

app.post('/movies', (req, res) => {
    const newId = crypto.randomUUID();

    const result = validateMovie(req.body);
    console.log(result)
    console.log(result.data);
    
    if (!result.success) {  // Changed condition
        return res.status(400).json({ error: result.error });
    }

    const newMovie = {
        id: newId,
        ...result.data  // Use result.data instead of result
    }

    movies.push(newMovie);  // Changed array mutation method

    res.status(201).json(newMovie);
})

app.use((req, res) => {  // Fixed parameter order
    res.status(404).json({message: 'page not found'})
})

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})

