import { UserModel } from "../model/users.js"
import { userValidate } from "../schema/users.js"

export class UserController {
    static async getAll(req, res) {
        const { id } = req.query

        // if (isNaN(id)) {
        //     return res.status(400).json({ message: 'No id entered' }) 
        // }

        const userResponse = await UserModel.getAll({ id })
        res.status(userResponse.status).send(userResponse.value)
    }

    static async create(req, res) {
        
        const result =  userValidate(req.body)

        if(!result.success) {
            return res.status(400).json({ value: result.error })
        }

        const { data } =  result

        const userResponse = await UserModel.create({ data })
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
        
// app.patch('/api/users/:id', async (req, res) => {
//     const { id } = req.params;

//     if (!id) return res.json({ message: 'no id entered'})

//     const result = userPartialValidate(req.body)

//     if(!result.success) {
//         return res.status(400).json({ message: 'invalid data entered on the request' })
//     }

//     const { data } = result
    
//     try {
//             await conn.beginTransaction()
//             const [result2] = await conn.execute(
//                 'UPDATE usuarios SET ? WHERE id_usuario = ?',
//                 [data, id]
//             )
//             await conn.commit()
//             res.json(result2)
//     } catch (err) {
//         await conn.rollback()
//         res.status(500).json({ error: err.message })
//     }
// })
    }
}