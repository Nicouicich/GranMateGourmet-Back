import {IUser} from "./user.schema";
import {Request, Response} from "express";
import {UserService} from "./user.service";

export class UserController {

    static getUsers = async (req: Request, res: Response) => {
        const users = await UserService.getAllUsers();
        const status = users ? 200 : 400;

        res.status(status).send({
            data: users
        });
    };

    static createUser = async (req: Request, res: Response) => {

        const {username, password} = req.body;
        const existUser = await UserService.existUserWithUsername(username);
        let status, message;

        if (!existUser) {
            const newUser: IUser = {
                username: username,
                password: password,
                admin: false
            };
            const result = await UserService.addNewUser(newUser);
            if (result != null) {
                status = 200;
                message = "El usuario: fue creado con exito";
            } else {
                status = 400;
                message = "Hubo un problema con el servidor y el usuario no pudo ser creado";
            }
        } else {
            status = 409;
            message = `El usuario: ${username} ya existe. Por favor elegi otro`;

        }
        res.status(status).send({
            data: message
        });
    };

    static deleteUser = async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        let message, status;

        if (id) {
            const user = await UserService.deleteUser(id);
            if (user) {
                status = 200;
                message = `El usuario con el ID: ${id} fue borrado exitosamente`;

            } else {
                status = 404;
                message = `Usuario con el ID: ${id} no encontrado`;

            }
        } else {
            status = 400;
            message = "ID no dado para borrar un usuario";
        }

        res.status(status).send({
            data: message
        });
    };

    static getUserById = async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        let status, message;

        if (id) {
            const user = await UserService.getUserById(id);
            if (user) {
                status = 200;
                message = user;

            } else {
                status = 404;
                message = `Usuario con el ID: ${id} no encontrado`;

                res.status(404).send({
                    data: `Usuario con el ID: ${id} no encontrado`
                });
            }
        } else {
            status = 400;
            message = "ID no entregado para encontrar un usuario por ID";
        }
        res.status(status).send({
            data: message
        });
    };
}