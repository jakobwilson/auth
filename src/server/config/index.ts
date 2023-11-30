import * as dotenv from 'dotenv';

dotenv.config();

export default {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    },

    jwt: {
        secret: process.env.JWT_SECRET as string
    }
}