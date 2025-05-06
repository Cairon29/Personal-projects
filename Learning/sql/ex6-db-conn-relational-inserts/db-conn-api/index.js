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

// DB Connection

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

app.get('/api/users', async (req, res) => {
    try {
        await conn.beginTransaction()
        const [result] = await conn.execute(
            'SELECT user_id, name, surname, email FROM users;'
        )
        await conn.commit()
        
        if (result.length === 0) {
            return res.status(404).json({ message: 'No users found' })
        }
        
        return res.status(200).json(result)
    } catch (error) {
        await conn.rollback()
        return res.status(500).json({ message: 'Internal server error', error: error.message })
    }
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

// get all plushies

app.get('/api/plushies', async (req, res) => {
    try {
        await conn.beginTransaction()
        const [result] = await conn.execute(
            'SELECT plush_id, name, cost, stock FROM plushies;'
        )
        await conn.commit()
        
        if (result.length === 0) {
            return res.status(404).json({ message: 'No plushies found' })
        }
        
        return res.status(200).json(result)
    } catch (error) {
        await conn.rollback()
        return res.status(500).json({ message: 'Internal server error', error: error.message })
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