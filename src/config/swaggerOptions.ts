import {config} from "./config";
import path from 'path';

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gran Mate Gourmet API",
      version: '1.0.0',
      description: "Library"
    },
    servers: [
      {
        url: `http://localhost:${config.PORT}`
      }
    ],
  },
  apis: [`${path.join(__dirname, "../**/**/*.routes.ts")}`],
};