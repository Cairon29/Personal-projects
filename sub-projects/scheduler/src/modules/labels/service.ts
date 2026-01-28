import { pool } from '../../db.js';
import type { Res } from "../../types/types.ts";

export class LabelService {
    static async getLabels(): Promise<Res> {
        
        try {
            // @ts-ignore
            const { rows } = await pool.query('SELECT * FROM labels');
            
            if (rows instanceof Array && rows.length === 0) {
                return {
                    status: 404,
                    success: false,
                    error: 'No labels found',
                    details: 'No labels found in the database'
                }
            }

            return {
                status: 200,
                success: true,
                data: rows  
            }
        
        } catch (error) {
            return {
                status: 500,
                success: false,
                error: 'Internal server error',
                details: error instanceof Error ? error.message : String(error)
            }
        }
    }
}