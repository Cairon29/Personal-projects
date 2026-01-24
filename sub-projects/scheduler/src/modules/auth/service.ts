import Res from '../../types/types.ts'
import { pool } from '../../db.js';
// @ts-ignore
import bcrypt from 'bcrypt';

export class AuthService {

    async login(email: string, password: string): Promise<Res> {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return { details: 'User not found', status: 404 };
        }
        
        const user = result.rows[0];

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return { details: 'Incorrect password', status: 401 };
        }

        console.log(result);
        return { details: `Login successful. User: ${user.full_name}`, status: 200 };
    }
}