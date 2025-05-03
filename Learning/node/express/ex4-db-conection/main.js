import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    database: 'plushies_db'
})

const insertUser = async ({ name, surname, email, password }) => {
    try {
        await conn.beginTransaction();

        const [userResult] = await conn.execute(
            'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)',
            [name, surname, email, password]
        )
        console.log(userResult)
        await conn.commit();
    } catch (err) {
        await conn.rollback();
        console.log('error inserting data', err)
    } finally {
        await conn.end();
    }
}

const readUsers = async () => {
    try {
        await conn.beginTransaction();

        const [userResult, b] = await conn.execute('SELECT * FROM users');
        
        console.log(userResult);
        console.log(b);
        await conn.commit();
    } catch (err) {
        await conn.rollback();
        console.log('error fetching data', err);
    } finally {
        await conn.end();
    }
}

const modifyUser = async ({ id, email }) => {
    try {
        await conn.beginTransaction();

        const [a, b] = await conn.execute(
            'UPDATE users SET email = ? where user_id = ?',
            [email, id]
        );

        console.log(a);
        console.log(b);
        
        await conn.commit();
    } catch (err) {
        await conn.rollback();
        console.log('error inserting data', err)
    } finally {
        await conn.end()
    }
}

const deleteUser = async ({ id }) => {
    try {
        await conn.beginTransaction();

        const [a, b] = await conn.execute(
            'DELETE FROM users WHERE user_id = ?',
            [id]
        );

        console.log(a);
        console.log(b);
        
        await conn.commit();
    } catch (err) {
        await conn.rollback();
        console.log('error inserting data', err)
    } finally {
        await conn.end()
    }
}

// modifyUser({ id: 1, email: 'migelAngel@gmail.com' } )
// insertUser({ name: 'gilberto', surname: 'aldana', email: 'aldanaCastroMigue@gmail.com', password: 'admin1234' })
// readUsers();
// deleteUser({ id: 1 })