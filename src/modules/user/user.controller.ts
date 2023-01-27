import {UserModel} from "./user.schema";
import {Request, Response} from "express";
import {logger} from "../../config/winston";

export class UserController {

    static getUsers = async (req: Request, res: Response) => {
        console.log("hola");
        // await UserModel.find({})
        try {
            res.send("data");
        } catch (e) {
            logger.error(e + "Error while fetching users");
        }
    };

    static createUser = async (req: Request, res: Response) => {
        try {
            const {username, password} = req.body;
            const newUser = await UserModel.create({username, password});
            res.status(200).json({
                data: newUser
            });
        }
        catch (e) {
            logger.error(e + `Error while creating a new user`);
        }
    };
}