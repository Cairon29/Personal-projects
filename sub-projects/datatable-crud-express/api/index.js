import express from 'express'
import cors from 'cors'
import conn from './config/connection.js'

import { userValidate, userPartialValidate } from './schema/users.js'

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

app.get('/api/users', async (req, res) => {
    try {
        await conn.beginTransaction()
        conn [result] = await conn.execute(
            'SELECT * FROM usuarios'
        )

        if (result.length === 0) {
            return res.status(404).json({ message: 'No students found'})
        }
        
        await conn.end()
        
        return res.status(200).json(result)
    } catch (error){
        await conn.rollback()
        return res.status(400).json({ message: error })
    }
})

app.post('/api/users', async (req, res) => {
    try {
        const result =  userValidate(req.body)

        if(!result.success) {
            return res.status(400).json({ message: result.error })
        }

        const { data } =  result

        await conn.beginTransaction()
        const [result2] = await conn.execute(
            'INSERT INTO usuarios (nombres, apellidos, email, password, rol) VALUES (?, ?, ?, ?, ?)',
            [data.nombres, data.apellidos, data.email, data.password, data.rol]
        )
        await conn.commit()
        res.json(result2)

    } catch (err) {
        await conn.rollback()
        res.status(500).json({ error: err.message })
    }
})

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await conn.beginTransaction()
        const [result] = await conn.execute(
            'DELETE FROM usuarios WHERE id_usuario = ?',
            [id]
        )
        await conn.commit()
        res.json(result)
    } catch(error) {
        await conn.rollback()
        return res.status(400).json({ message: 'Error deleting the error:', error})
    }
})

// app.patch('/api/users/:id', async (req, res) => {
//     const { id } = req.params;

//     if (!id) return res.json({ message: 'no id entered'})

//     const result = userPartialValidate(req.body)

//     if(!result.success) {
//         return res.status(400).json({ message: 'invalid data entered on the request' })
//     }

//     const { data } = result
    
//     try {
//             await conn.beginTransaction()
//             const [result2] = await conn.execute(
//                 'UPDATE usuarios SET ? WHERE id_usuario = ?',
//                 [data, id]
//             )
//             await conn.commit()
//             res.json(result2)
//     } catch (err) {
//         await conn.rollback()
//         res.status(500).json({ error: err.message })
//     }
// })

app.listen(PORT, () => {
    console.log('currently running on port 5556');
})