import { Router } from "express";
import { ProductsController } from "../controller/products.js";

export const ProductsRouter = Router()

ProductsRouter.get('/', ProductsController.getAll)
ProductsRouter.post('/', ProductsController.create)
ProductsRouter.patch('/', ProductsController.modify)
ProductsRouter.delete('/:id', ProductsController.delete)