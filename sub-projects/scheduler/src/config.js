import 'dotenv/config'

export const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD.toString(),
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
  },
  app: {
    port: process.env.PORT || 5555,
    nodeEnv: process.env.NODE_ENV || 'development',
    githubToken: process.env.GITHUB_TOKEN,
    saltRounds: process.env.SALT_ROUNDS || 10,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE || '7d',
  }
}

export default config