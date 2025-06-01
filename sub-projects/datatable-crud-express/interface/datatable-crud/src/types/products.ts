import { z } from   'zod'

export const productSchema = z.object({
    id_producto: z.number().min(1),
    nombre: z.string().min(1),
    descripcion: z.string().min(1),
    precio: z.number().min(1),
    cantidad: z.number().min(1),
    creado_en: z.date()
})


export type ProductType = z.infer<typeof productSchema>

export type ProductArrayType = [
    number,
    string,
    string,
    string,
    number,
    string
]

/*
    "id_producto": 8,
    "nombre": "Pan aliñado",
    "descripcion": "Pan tradicional con sabor mantequilla",
    "precio": "700.00",
    "cantidad": 100,
    "creado_en": "2025-05-29T16:55:23.000Z"
*/