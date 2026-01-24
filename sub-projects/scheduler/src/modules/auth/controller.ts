import type { Request, Response } from "express";
import { AuthService } from "./service.ts";

export class AuthController {
    static login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ message: 'Email and password are required' });
        }

        const { details, status, data } = await AuthService.login(email, password);

        return res.status(status).send({ details, data: data? data : null });
    }
}