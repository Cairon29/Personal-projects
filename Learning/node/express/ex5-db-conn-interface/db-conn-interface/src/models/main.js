import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    database: 'plushies_db'
})
export class dbFeats {
    
    static async insertUser ({ name, surname, email, password }) {
        try {
            await conn.beginTransaction();
    
            const [userResult] = await conn.execute(
                'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)',
                [name, surname, email, password]
            )
            await conn.commit();
            return userResult
        } catch (err) {
            await conn.rollback();
            return `error inerting data: ${err}`
        } finally {
            await conn.end();
        }
    }
    static async readUsers() {
        try {
            await conn.beginTransaction();
            const response = await conn.execute('SELECT * FROM users');
            await conn.commit();
            return response
        } catch (err) {
            await conn.rollback();
            return `error inerting data: ${err}`
        } finally {
            await conn.end();
        }
    }
    
    static async modifyUser ({ id, email }) {
        try {
            await conn.beginTransaction();
    
            const result = await conn.execute(
                'UPDATE users SET email = ? where user_id = ?',
                [email, id]
            );

            await conn.commit();
            return result;
        } catch (err) {
            await conn.rollback();
            return `error inerting data: ${err}`
        } finally {
            await conn.end()
        }
    }
    
    static async deleteUser ({ id }) {
        try {
            await conn.beginTransaction();
    
            const result = await conn.execute(
                'DELETE FROM users WHERE user_id = ?',
                [id]
            );
            await conn.commit();
            return result
        } catch (err) {
            await conn.rollback();
            return `error inerting data: ${err}`
        } finally {
            await conn.end()
        }
    }
}



// modifyUser({ id: 1, email: 'migelAngel@gmail.com' } )
// insertUser({ name: 'gilberto', surname: 'aldana', email: 'aldanaCastroMigue@gmail.com', password: 'admin1234' })
// readUsers();
// deleteUser({ id: 1 })