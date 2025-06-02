import mysql from 'mysql2/promise'

export const conn = await mysql.createConnection({
    host: 'localhost',
    port: 5555,
    user: 'root',
    database: 'datatable_crud'
})


export const { PORT = 5556, SALT_ROUNDS = 10 } = process.env
