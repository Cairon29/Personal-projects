import type { Request, Response } from "express";
// @ts-ignore
import bcrypt from 'bcrypt';
import { UserService } from './service.ts';
import { User } from "../../types/types.ts";
import { checkFields, checkOptionalFields } from "../../utils/req_field_checker.ts";

export class UserController {
    static getUsers = async (req: Request, res: Response) => {
        const response = await UserService.getUsers();
        if (response.status === 200) {
            return res.status(200).send({
                data: response.data,
                status: 200,
                success: response.success
            })
        }
        return res.status(response.status).send({
            error: response.error,
            details: response.details,
            success: response.success,
            status: response.status
        })
    }

    static createUser = async (req: Request, res: Response) => {
        const req_fields = ['full_name', 'email', 'phone', 'password']

        const check_result = checkFields(req, req_fields);
        if (check_result) {
            return res.status(check_result.status).send(check_result);
        }

        const { full_name, email, phone, password }: User = req.body;

        const input_data: User = {
            full_name,
            email,
            phone,
            password
        }

        const response = await UserService.createUser(input_data);
        if (response.status === 201) {
            return res.status(201).send({
                data: response.data,
                status: 201,
                success: response.success
            })
        }
        return res.status(response.status).send({
            error: response.error,
            details: response.details,
            status: response.status
        })
    }

    static deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                error: 'Missing required field: id',
                status: 400,
                success: false
            })
        }

        if (typeof id !== 'string') {
            return res.status(400).send({
                error: 'Invalid id type',
                status: 400,
                success: false
            })
        }

        const response = await UserService.deleteUser(id);
        if (response.status === 200) {
            return res.status(200).send({
                data: response.data,
                status: 200,
                success: response.success
            })
        }
        return res.status(response.status).send({
            error: response.error,
            details: response.details,
            status: response.status,
            success: response.success
        })
    }

    static modifyUser = async (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                status: 400,
                error: 'Missing required field: id'
            })
        }

        if (typeof id !== 'string') {
            return res.status(400).send({
                error: 'Invalid id type',
                status: 400,
                success: false
            })
        }

        const { full_name, email, phone, password } = req.body;

        if (!full_name && !email && !phone && !password) {
            return res.status(400).send({
                status: 400,
                error: 'No fields to update'
            })
        }

        const input_data = {
            full_name,
            email,
            phone,
            password,
            id
        }

        const response = await UserService.modifyUser(input_data);

        return res.status(response.status).send({
            error: response.error ? response.error : undefined,
            data: response.data,
            details: response.details,
            status: response.status,
            success: response.success
        })
    }
}