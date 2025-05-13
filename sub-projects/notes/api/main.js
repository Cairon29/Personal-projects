import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';

const app = express();
app.use(express.json())
app.disable('x-powered-by')

app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:8080',
            'http://localhost:1234',
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
    port: 3306,
    user: 'root',
    database: 'notes'
})

app.get('/notes', async (req, res) => {
    await conn.beginTransaction();
    const [result] = await conn.execute(
        'SELECT user_id, name, nick_name, email FROM notes'
    )
    if (!result) {
        await conn.rollback();
        return res.status(404).json({ message: 'Not found' })
    }

    await conn.commit();
    res.json(result)
})

app.post('/notes', async (req, res) => {
    const result = notesValidate(req.body)
    if (!result.success) {
        return res.status(404).json({ message: 'No note created' })
    }

    const { data } = result
    const [result2] = await conn.execute(
        'INSERT INTO notes (user_id, name, nick_name, email) VALUES (?, ?, ?, ?)',
        [ data.name, data.nick_name, data.email]
    )

    if (!result2) {
        await conn.rollback();
        return res.status(404).json({ message: 'No note created' })
    }

    await conn.commit();
    res.status(202).json({ message: 'Note created' })
})


app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}\n URL_ADDRESS: http://localhost:${port}`);
});