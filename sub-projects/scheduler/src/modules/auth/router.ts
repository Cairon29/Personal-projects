import { Router } from 'express';
import { AuthController } from './controller.ts';

export const AuthRouter = Router()

AuthRouter.post('/login', AuthController.login)
