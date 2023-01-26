import {Router} from "express";
import {router as userRouter} from "../modules/user/user.routes";
import {swaggerOptions} from '../config/swaggerOptions';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const router = Router();
const specs = swaggerJsDoc(swaggerOptions);

router.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
router.use('/user', userRouter);

export {router};