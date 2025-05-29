import { ProductsModel } from "../model/products.js";
import { productValidate, productPartialValidate } from "../schema/products.js";

export class ProductsController {
    static async getAll(req, res) {
        const { id } = req.query;

        const productResponse = await ProductsModel.getAll({ id })
        res.status(productResponse.status).send(productResponse.value)
    }
    
    static async create(req, res){
        const result = productValidate(req.body)

        if(!result.success){
            return res.status(400).json({ message: result.error })
        }

        const { data } = result

        const productResponse = await ProductsModel.create({ data })
        res.status(productResponse.status).send(productResponse.value)
    }

    static async modify(req, res){
        const { id } =  req.query;
        if(!id) return res.json({ message: 'No id entered'}).status(400)

        const result = productPartialValidate(req.body)

        if(!result.success){
            return res.status(400).json({ message: result.error })
        }

        const { data } = result

        const productResponse = await ProductsModel.modify({ id, data })
        res.status(productResponse.status).send(productResponse.value)
    }

    static async delete(req, res) {
        const { id } = req.params;

        if(!id) return res.status(400).json({ message: 'No id entered'})

        const productResponse = await ProductsModel.delete({ id })
        res.status(productResponse.status).send(productResponse.value)
    }
}