import express from "express"
import fs from 'fs/promises'
import z from 'zod'
import crypto from 'cryptoW'

const movies = JSON.parse(
    await fs.readFile(
        new URL('./movies.json', import.meta.url)
    )
);


const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(movies).json()
})

app.post('/movies', (req, res) => {
    const movieSchema = z.object({
        title: z.string(),
        year: z.number().int().min(1900).max(2025),
        director: z.string().required(),
        duration: z.number().int().positive(),
        poster: z.string().url().endsWith('.jpg'),
        genre: z.enum(['action', 'comedy', 'drama', 'horror']).array(),
        rate: z.number().min(0).max(10).default(0)
    })

    const validation = (movie) => {
        return movieSchema.safeParse(movie)
    }

    const result = validation(req.body)
})

app.use((req, res) => {
    res.status(404).send('Not Found')
})

app.listen(3001, () => {
    console.log("Here testing in another computer")
})