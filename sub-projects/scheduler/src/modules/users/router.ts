import { UserController } from "./controller.ts";
import { Router } from "express";

export const UserRouter = Router()

UserRouter.get('/', UserController.getUsers)
UserRouter.post('/', UserController.createUser)
UserRouter.delete('/:id', UserController.deleteUser)
UserRouter.patch('/:id', UserController.modifyUser)
