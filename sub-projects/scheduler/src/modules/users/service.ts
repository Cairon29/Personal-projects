// @ts-ignore
import bcrypt from 'bcrypt';
import { pool } from '../../db.js';

import Res from '../../types/types.js';

export class UserService {
    static getUsers = async (): Promise<Res> => {
        try {
            const result = await pool.query('SELECT * FROM users')
            
            if ( !result.rows|| result.rows.length === 0 ) {
                return {
                    status: 404,
                    error: 'No users found'
                }
            }

            return {
                status: 200,
                details: 'Users fetched successfully',
                data: result.rows
            }
        } catch (error: any) {
            console.error('Error fetching users:', error)
            
            return { 
                status: 500,
                error: 'Error fetching users.', 
                details: error.message
            }
        }
    }

    static createUser = async (full_name: string, email: string, phone: string, password: string): Promise<Res> => {
        
        let hashed_password: string = '';
        hashed_password = await bcrypt.hash(password, 10);

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await pool.query(
                'INSERT INTO users (full_name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *',
                [full_name, email, phone, hashedPassword]
            );

            return {
                status: 201,
                details: 'User created successfully',
                data: result.rows
            }
        } catch (error: any) {
            console.error('Error creating user:', error)
            return { 
                status: 500,
                error: 'Error creating user.', 
                details: error.message
            }
        }
    }
}