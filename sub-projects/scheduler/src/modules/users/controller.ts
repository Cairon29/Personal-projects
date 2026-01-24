import type { Request, Response } from "express";
// @ts-ignore
import bcrypt from 'bcrypt';
import { UserService } from './service.ts';

export class UserController {
    static getUsers = async (req: Request, res: Response) => {
        const response = await UserService.getUsers();
        if (response.status === 200) {
            return res.status(200).send({
                data: response.data,
                status: 200
            })
        }
        return res.status(response.status).send({
            error: response.error,
            details: response.details,
            status: response.status
        })
    }

    static createUser = async (req: Request, res: Response) => {
        const { full_name, email, phone, password } = req.body;
        
        const requested_fields = ['full_name', 'email', 'phone', 'password']

        for (const field of requested_fields) {
            if (!req.body[field]) {
                return res.status(400).send({
                    error: `Missing required field: ${field}`,
                    status: 400
                })
            }
        }

 

        const response = await UserService.createUser(full_name, email, phone, password);
        if (response.status === 201) {
            return res.status(201).send({
                data: response.data,
                status: 201
            })
        }
        return res.status(response.status).send({
            error: response.error,
            details: response.details,
            status: response.status
        })

    }
}