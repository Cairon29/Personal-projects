import { UserModel } from "../model/users.js"
import { userPartialValidate } from "../schema/users.js"

export class UserController {
    static async getAll(req, res) {
        const { id } = req.query;

        const userResponse = await UserModel.getAll({ id })
        res.status(userResponse.status).send(userResponse.value)
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.json({ message: 'No id entered'})
        }

        const userResponse = await UserModel.delete({ id })
        res.status(userResponse.status).send(userResponse.value)
    }

    static async modify(req, res) {
        
        const { id } = req.query;
        if (!id) return res.json({ message: 'no id entered'})
        
        const result = userPartialValidate(req.body)
    
        if(!result.success) {
            return res.status(400).json({ message: 'invalid data entered on the request' })
        }
    
        const { data } = result
        
        const userResponse = await UserModel.modify({ id, data })
        res.status(userResponse.status).send(userResponse.value)
    }
}