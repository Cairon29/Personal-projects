import type { Request, Response } from "express";
import { AuthService } from "./service.ts";

export class AuthController {
    static login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ error: 'Email and password are required' });
        }

        const { details, status, data, success } = await AuthService.login(email, password);

        console.log({ details, status, data, success });


        return res.status(status).json({ details, data: data ? data : null, success });
    }
}