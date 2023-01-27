import express from 'express';
import cors from 'cors';
import http from 'http';

import {router as mainRouter} from '../routes/mainRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api', mainRouter);


const server = new http.Server(app);

export default server;