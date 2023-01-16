import { createPool } from "mysql2/promise"

import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
} from './config.js'

export const pool = createPool({
    user: DB_HOST,
    password: DB_PASWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})
