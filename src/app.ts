import {config} from './config/config';
import server from './services/server';

export const initServer = () => {
    server.listen(config.PORT, () => {
        console.log(`Server up on port ${config.PORT}`);
    });
};

