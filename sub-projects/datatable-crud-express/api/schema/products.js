import z from 'zod'

const productSchema = z.object({
    nombre: z.string().min(1),
    descripcion: z.string().min(1),
    precio: z.number().min(1),
    cantidad: z.number().min(1)
})

export const productValidate = (object) => {
    return productSchema.safeParse(object)
}

export const productPartialValidate = (object) => {
    return productSchema.partial().safeParse(object)
}
