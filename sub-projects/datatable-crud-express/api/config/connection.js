import mysql from 'mysql2/promise'

const conn = await mysql.createConnection({
    host: 'localhost',
    port: 5555,
    user: 'root',
    database: 'datatable_crud'
})

export default conn;