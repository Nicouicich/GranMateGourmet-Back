import mongoose from "mongoose";
import {config} from "../config/config";
import { logger } from "../config/winston";

const connectionString = config.MONGO_URI || 'mongodb://localhost:27017/gran-mate-gourmet';

export const initMongoDB = async () => {
    try {
        logger.info("Conectando a la DB");
        mongoose.set('strictQuery', true);
        await mongoose.connect(connectionString);
        logger.info("Conectado a la DB");
    } catch (e) {
        logger.error(`ERROR => ${e}`);
    }
};