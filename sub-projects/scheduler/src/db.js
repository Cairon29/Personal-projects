import { Pool } from 'pg'
import config from './config.js'

export const pool = new Pool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password.toString(),
  database: config.db.database,
  port: Number(config.db.port),
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})