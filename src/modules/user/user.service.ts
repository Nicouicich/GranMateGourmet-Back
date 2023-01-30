import {UserModel} from "./user.schema";
import {logger} from "../../config/winston";
import {IUser} from "./user.schema";

export class UserService {
    static getAllUsers = async () => {
        try {
            return await UserModel.find({});
        } catch (e) {
            logger.error(`${e}. Hubo un error al consultar todos los usuarios`);
            return e;
        }
    };

    static getUserById = async (id: number) => {
        try {
            return await UserModel.find({id: id});
        } catch (e) {
            logger.error(`${e}. Hubo un problema al consultar por el usuario con el id: ${id}`);
            return e;
        }
    };

    static addNewUser = async (user: IUser) => {
        try {
            return await UserModel.create({
                username: user.username,
                password: user.password,
                admin: false
            });

        }
        catch (e) {
            logger.error(`${e}. Hubo un problema al agregar un nuevo usuario`);
            return null;
        }
    };

    static deleteUser = async (id: number) => {
        try {
            return await UserModel.findByIdAndDelete({id: id});
        } catch (e) {
            logger.error(`${e}. Hubo un problema al borrar el usuario con el id: ${id} `);
            return e;
        }
    };

    static existUserWithUsername = async (username: string) => {
        try {
            const user = await UserModel.findOne({username: {$regex: username, $options: 'i'}});
            console.log(user);
            return user ? true : false;

        } catch (e) {
            logger.error(`${e}. Hubo un problema al consultar el usuario por username`);
            return e;
        }
    };

}