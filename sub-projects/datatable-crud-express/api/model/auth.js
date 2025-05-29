import conn from "../config/connection.js"

export class AuthModel {
    static async login({ data }) {
         let response = { 
            status: 400,
            value: { message: 'No user deleted' }
        }

        const { email, password } = data

        try {
            await conn.beginTransaction()
            const [result] = await conn.execute(
                'SELECT * FROM usuarios WHERE email = ? AND password = ? ;',
                [email, password]
            )

            await conn.commit()

            return response = { ...response, status: 200, value: result }

        } catch (error) {
            await conn.rollback()
            return response = { ...response, status: 500, value: error }
        }
    }

    static async register({ data }){
        let response = { 
            status: 400,
            value: { message: 'No user deleted' }
        }

        try{
            await conn.beginTransaction()
            const [result] = await conn.execute(
                'INSERT INTO usuarios (nombres, apellidos, email, password, rol) VALUES (?, ?, ?, ?, ?)',
                [...Object.values(data)] 
            )
            await conn.commit()
            return response = { ...response, status: 200, value: result }

        } catch (err) {
            await conn.rollback()
            return response = { ...response, status: 500, value: err.message }
        }
    }
}