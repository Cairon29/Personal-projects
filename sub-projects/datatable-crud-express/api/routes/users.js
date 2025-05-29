import { Router } from "express";
import { UserController } from "../controller/users.js";

export const UserRouter = Router()

UserRouter.get('/', UserController.getAll)
UserRouter.delete('/:id', UserController.delete)
UserRouter.patch('/', UserController.modify)