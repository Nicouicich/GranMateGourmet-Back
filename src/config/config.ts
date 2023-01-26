import dotenv from "dotenv"

dotenv.config();

export const config = {
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MOGNO_URI || 'mongodb://localhost:27017/gran-mate-gourmet'

}