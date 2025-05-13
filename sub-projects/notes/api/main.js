import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';

import { notesValidate, notesPartialValidate } from "./schemas/notes_schema.js";
import { usersValidate, usersPartialValidate } from "./schemas/users_schema.js";

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

app.get('/users', async (req, res) => {
    await conn.beginTransaction();
    const [result] = await conn.execute(
        'SELECT user_id, name, nick_name, email FROM users'
    )
    if (!result) {
        await conn.rollback();
        return res.status(404).json({ message: 'No users found' })
    }

    await conn.commit();
    res.json(result)
})

app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const [result] = await conn.execute(
        'SELECT user_id, name, nick_name, email FROM users WHERE user_id = ?',
        [id]
    )
    if (!result) {
        await conn.rollback();
        return res.status(404).json({ message: 'No users found' })
    }

    await conn.commit();
    res.status(200).json(result)
})

app.get('/notes', async (req, res) => {
    await conn.beginTransaction();
    const [result] = await conn.execute(
        'SELECT note_id, title, description, date, fk_user_id FROM notes'
    )
    if (!result) {
        await conn.rollback();
        return res.status(404).json({ message: 'No notes found' })
    }

    await conn.commit();
    res.json(result)
})

app.get('/notes/:id', async (req, res) => {
    const { id } = req.params
    const [result] = await conn.execute(
        'SELECT note_id, title, description, date, fk_user_id FROM notes WHERE note_id = ?',
        [id]
    )
    if  (!result) {
        await conn.rollback();
        return res.status(404).json({ message: 'No notes found' })
    }

    await conn.commit();
    res.status(200).json(result)
})



/*___________________________________________________________________________ */


app.post('/notes', async (req, res) => {
    const result = notesValidate(req.body)
    if (!result.success) {
        return res.status(404).json({ message: 'Incorrect data entered' })
    }

    const { data } = result
    const [result2] = await conn.execute(
        'INSERT INTO notes (title, description fk_user_id) VALUES (?, ?, ?)',
        [ data.title, , data.description, data.fk_user_id ]
    )

    if (!result2) {
        await conn.rollback();
        return res.status(404).json({ message: 'Error creating the user' })
    }

    await conn.commit();
    res.status(202).json({ message: 'Note created' })
})

app.post('/users', async (req, res) => {
    const result = usersValidate(req.body)
    if (!result.success) {
        return res.status(404).json({ message: 'Incorrect data entered' })
    }

    const  { data } = result
    const [result2] = await conn.execute(
        'INSERT INTO users (name, nick_name, email, password) VALUES (?,?,?,?)',
        [ data.name, data.nickName, data.email, data.password ]
    )

    if (!result2) {
        await conn.rollback();
        return res.status(404).json({ message: 'Error creating the user' })
    }

    await conn.commit();
    res.status(202).json({ message: 'User created' })
})

/*___________________________________________________________________________ */

app.patch('/notes/:id', async (req, res) => {
    const  { id } = req.params
    if (!id) {
        return res.status(404).json({ message: 'No note id entered' })
    }

    const result = notesPartialValidate(req.body)

    if (!result.success) {
        return res.status(404).json({ message: 'Incorrect data entered' })
    }

    const { data } = result
    const keys = Object.keys(data)
    const values = Object.values(data)
    const query = `UPDATE notes SET ${keys.map((key) => (`${key} = ?`)).join(', ')} WHERE note_id = ?`
    const [result2] = await conn.execute(query, [...values, id])

    if (!result2) {
        await conn.rollback();
        return res.status(404).jsob({ message: 'Error updating the note'})
    }
    await conn.commit();
    res.status(200).json({ message: 'Note updated', result });
})

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}\n URL_ADDRESS: http://localhost:${port}`);
});