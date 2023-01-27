import {initServer} from "./app";
import {initMongoDB} from "./services/db";

export const init = async () => {
    await initMongoDB();
    initServer();
};

init();