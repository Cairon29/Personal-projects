import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

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

const conn = await mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    database: 'plushies_db'
})

// http://localhost:3000/api/users

app.post('/api/users', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;

        await conn.beginTransaction()
        const [result] = await conn.execute(
            'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)',
            [name, surname, email, password]
        )
        await conn.commit()
        res.json(result)
    } catch (err) {
        await conn.rollback()
        res.status(500).json({ error: err.message })
    }
})

app.listen(3000, () => {
    console.log('running on port 3000')
})