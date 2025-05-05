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

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        await conn.beginTransaction();
        const [result] = await conn.execute(
            'SELECT * from users WHERE email = ? AND password = ? ;',
            [email, password]
        )
        await conn.commit()
        res.status(200).json(result)
    } catch(e) {
        await conn.rollback()
        res.status(500).json({ error: err.message })
    }   
})

app.get('/api/users', async (req ,res) => {
    await conn.beginTransaction()
    const [result] = await conn.execute(
        'SELECT id, name, surname, email FROM users;',
    )
    if (result) {
        await conn.commit()
        return res.status(200).json(result)
    }

    return res.status(404).json({ message: 'Something went wrong' })
})

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

// Insert on Plushies table

app.post('/api/plushies', async (req, res) => {
    try {
        const { name, cost, stock } = req.body;

        await conn.beginTransaction()

        const [result] = await conn.execute(
            'INSERT INTO plushies (name, cost, stock) VALUES (?, ?, ?)',
            [name, cost, stock]
        )

        await conn.commit()
        res.status(200).json(result)
    } catch (err) {

    }
})

app.listen(3000, () => {
    console.log('running on port 3000')
})