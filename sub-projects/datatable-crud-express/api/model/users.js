import conn from "../config/connection.js"

export class UserModel {
    static async getAll ({ id }) {
        let response = { 
            status: 400,
            value: { message: 'No id entered' }
        }
        

        if (id) {

            try {
                await conn.beginTransaction()
                const [result] = await conn.execute(
                    'SELECT * FROM usuarios WHERE id_usuario = ?;',
                    [id]
                )

                if (result.length === 0) {
                    return response = { ...response, status: 404, value: 'No students found' }
                }
                return response = { ...response, status: 200, value: result }
            } catch (error) {
                await conn.rollback()
                return response = { ...response, status: 404, value: error }
            } finally {
                await conn.end()
            }

        } else {
            try {
                await conn.beginTransaction()
                const [result] = await conn.execute(
                    'SELECT * FROM usuarios;'
                )
    
                if (result.length === 0) {
                    return res.status(404).json({ message: 'No students found'})
                }
                
                return response = { ...response, status: 200, value: result }
            } catch (error){
                await conn.rollback()
                return response = { ...response, status: 404, value: error }
            } finally {
                await conn.end()
            }
        }
    }

    static async create ({ data }) {

        let response = { 
            status: 400,
            value: { message: 'No id entered' }
        }


        try{
            await conn.beginTransaction()
            const [result] = await conn.execute(
                'INSERT INTO usuarios (nombres, apellidos, email, password, rol) VALUES (?, ?, ?, ?, ?)',
                [data.nombres, data.apellidos, data.email, data.password, data.rol]
            )
            await conn.commit()
            return response = { ...response, status: 200, value: result }

        } catch (err) {
            await conn.rollback()
            return response = { ...response, status: 500, value: err.message }
        } finally {
            await conn.end()
        }
    }

    static async delete ({ id }) {
            try {
        await conn.beginTransaction()
        const [result] = await conn.execute(
            'DELETE FROM usuarios WHERE id_usuario = ?',
            [id]
        )
            await conn.commit()
            return response = { ...response, status: 200, value: result }
        } catch(error) {
            await conn.rollback()
            return response = { ...response, status: 500, value: err.message }
        } finally {
            await conn.end()
        }
    }
}