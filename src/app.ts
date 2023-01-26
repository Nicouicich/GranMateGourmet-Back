import {config} from './config/config';
import server from './services/server';
import {logger} from './config/winston';

export const initServer = () => {
    server.listen(config.PORT, () => {
        logger.info(`Server up on port ${config.PORT}`);
    });
};

