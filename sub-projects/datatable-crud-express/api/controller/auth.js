import { AuthModel } from "../model/auth.js";
import { loginValidate } from "../schema/login.js";
import { userValidate } from "../schema/users.js";

export class AuthController {
    static async login(req, res) {
        const result = loginValidate(req.body)

        if(!result.success) {
            return res.status(400).json({ value: result.error })
        }

        const { data } = result

        const loginResponse = await AuthModel.login({ data })
        res.status(loginResponse.status).send(loginResponse.value)
    }

    static async register(req, res) {
        
        const result =  userValidate(req.body)

        if(!result.success) {
            return res.status(400).json({ value: result.error })
        }

        const { data } =  result

        const userResponse = await AuthModel.register({ data })
        res.status(userResponse.status).send(userResponse.value)
    }
}