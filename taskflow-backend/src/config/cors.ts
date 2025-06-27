import { CorsOptions } from "cors"
import dotenv from 'dotenv';
dotenv.config();

const whitelist = [process.env.FRONTEND_URL];

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Error de CORS'))
        }
    },
    credentials: true
};