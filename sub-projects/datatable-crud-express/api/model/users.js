import conn from "../config/connection.js"

export class UserModel {
    static async getAll ({ id }) {
        let response = { 
            status: 400,
            value: { message: 'No id entered' }
        }
        

        if (id !== undefined) {

            try {
                await conn.beginTransaction()
                const [result] = await conn.execute(
                    "SELECT * FROM usuarios WHERE id_usuario = ?;",
                    [id]
                )
                return response = { ...response, status: 200, value: result }
            } catch (error) {
                await conn.rollback()
                return response = { ...response, status: 404, value: error }
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
            }
        }
    }

    static async delete ({ id }) {
        
        let response = { 
            status: 400,
            value: { message: 'No id entered' }
        }

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
        }
    }

    static async modify({ id, data }) {
        let response = { 
            status: 400,
            value: { message: ['No id entered', 'No data entered'] }
        }

        try {

            let keys = []
            let values = []

            for (let key in data) {
                keys.push(`${key} = ?`)
                values.push(data[key])
            }

            let concatedKeys = keys.join(", ")

            await conn.beginTransaction()

            const [result] = await conn.execute(
                "UPDATE usuarios SET " + concatedKeys + " WHERE id_usuario = ?;", 
                [...values, id]
            )

            await conn.commit()

            return response = { ...response, status: 200, value: {userId: id, data: result} }
        } catch (error) {
            await conn.rollback()
            return response = { ...response, status: 500, value: error.message }
        }
    }
}