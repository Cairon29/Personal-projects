import { conn, SALT_ROUNDS } from "../config/config.js"
import bcrypt from "bcrypt"


export class AuthModel {
    static async login({ data }) {

    const { email, password } = data;

    try {
        const [rows] = await conn.execute(
            "SELECT * FROM usuarios WHERE email = ?;",
            [email]
        );

        if (rows.length === 0) {
            return { status: 404, value: { message: "User not found" } };
        }

        const usuario = rows[0];
        const hashAlmacenado = usuario.password;

        const isValid = await bcrypt.compare(password, hashAlmacenado);

        if (!isValid) {
            return { status: 401, value: { message: "Invalid credentials" } };
        }

        return { status: 200, value: usuario };

        } catch (error) {
            return { status: 500, value: error };
        }
    }

    static async register({ data }){
        try{
            const encrypted_data = { ...data, password: await bcrypt.hash(data.password, SALT_ROUNDS) }

            await conn.beginTransaction()
            const [result] = await conn.execute(
                'INSERT INTO usuarios (nombres, apellidos, email, password, rol) VALUES (?, ?, ?, ?, ?)',
                [...Object.values(encrypted_data)] 
            )
            await conn.commit()
            return response = { status: 200, value: result }

        } catch (err) {
            await conn.rollback()
            return response = { status: 500, value: err.message }
        }
    }
}