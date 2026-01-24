// @ts-ignore
import bcrypt from 'bcrypt';
import { pool } from '../../db.js';
import { Res, User } from '../../types/types.js';
import { generateToken }  from '../../utils/handle_token.ts';



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

    static createUser = async (input_data: User): Promise<Res> => {
        const { full_name, email, phone, password } = input_data;
        
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
                data: {
                    user: result.rows[0],
                    token: generateToken(result.rows[0].id)
                }
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

    static deleteUser = async (id: string): Promise<Res> => {
        try {
            const result = await pool.query(
                'DELETE FROM users WHERE id = $1',
                [id]
            );
            
            if (result.rowCount === 0) {
                return {
                    status: 404,
                    error: 'User not found',
                    details: 'No user found with the provided id'
                }
            }

            return {
                status: 200,
                details: 'User deleted successfully',
                data: result.rows
            }
        } catch (error: any) {
            console.error('Error deleting user:', error)
            return { 
                status: 500,
                error: 'Error deleting user.', 
                details: error.message
            }
        }

    }

    static modifyUser = async (input_data: User): Promise<Res> => {
        try {
            const { id } = input_data;

            const data: Partial<User> = {};

            for (const key in input_data) {
                const k = key as keyof User;
                if (k !== 'id' && input_data[k] !== undefined) {
                    data[k] = input_data[k];
                }
            }

            if (Object.keys(data).length === 0) {
                return {
                    status: 400,
                    error: 'No fields provided for update'
                };
            }

            if (data.password) {
                data.password = await bcrypt.hash(data.password, 10);
            }

            const keys = Object.keys(data);
            const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
            const values = keys.map(key => data[key as keyof User]);
            values.push(id);

            const result = await pool.query(
                `UPDATE users SET ${setClause} WHERE id = $${values.length} RETURNING *`,
                values
            );
            
            if (result.rowCount === 0) {
                return {
                    status: 404,
                    error: 'User not found',
                    details: 'No user found with the provided id'
                }
            }

            return {
                status: 200,
                details: 'User modified successfully',
                data: result.rows[0]
            }
        } catch (error: any) {
            console.error('Error modifying user:', error)
            return { 
                status: 500,
                error: 'Error modifying user.', 
                details: error.message
            }
        }
    }
}