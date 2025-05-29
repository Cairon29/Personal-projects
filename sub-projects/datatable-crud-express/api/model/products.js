import conn from "../config/connection.js"

export class ProductsModel {
    static async getAll({ id }){
         let response = { 
            status: 400,
            value: { message: 'No id entered' }
        }

        if (id !== undefined) {
            try {
                await conn.beginTransaction()
                const [result] = await conn.execute(
                    "SELECT * FROM productos WHERE id_usuario = ?;",
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
                    'SELECT * FROM productos;'
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

    static async create({ data }){
        let response = { 
            status: 400,
            value: { message: 'No user deleted' }
        }

        try {
            await conn.beginTransaction()
            const [result] = await conn.execute(
                "INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES (?, ?, ?, ?)",
                [...Object.values(data)] 
            )

            return response = { ...response, status: 200, value: result }

        } catch (error) {
            await conn.rollback()
            return response = { ...response, status: 500, value: err.message }
        }
    }

    static async modify({ id, data }){
        let response ={
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

            const [result] =  await conn.execute(
                "UPDATE productos SET " + concatedKeys + "WHERE id_producto = ?",
                [...values, id]
            )

            await conn.commit()

            return response = { ...response, status: 200, value: {productId: id, data: result} }
        } catch (error) {
            await conn.rollback()
            return response = { ...response, status: 500, value: error.message }
        }
    }

    static async delete({ id }){
        let response = { 
            status: 400,
            value: { message: 'No id entered' }
        }

        try {
            await conn.beginTransaction()
            const [result] = await conn.execute(
                'DELETE FROM productos WHERE id_producto = ?',
                [id]
            )
            await conn.commit()
            return response = { ...response, status: 200, value: result }
        } catch(error) {
            await conn.rollback()
            return response = { ...response, status: 500, value: err.message }
        }
    }
}