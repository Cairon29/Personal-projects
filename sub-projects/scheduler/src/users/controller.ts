import { Router } from "express";
import { pool } from '../db.js';

export const UserRouter = Router()

UserRouter.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
        
        if ( !result.rows|| result.rows.length === 0 ) {
            return res.status(404).send({
                error: 'No users found',
                status: 404
            })
        }

        return res.status(200).send({
            data: result.rows,
            status: 200
        })

    } catch (error: any) {
        console.error('Error fetching users:', error)
        
        return res.status(500).send({ 
            error: 'Error fetching users.', 
            details: error.message
        })
    }
})
