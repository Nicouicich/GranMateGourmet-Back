import {initServer} from "./app";
import {initMongoDB} from "./services/db";

const init = async () => {
    await initMongoDB();
    initServer();
};

init();