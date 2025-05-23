import z from 'zod'

const userSchema = z.object({
    nombres: z.string(),
    apellidos: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    rol: z.number().min(1).max(2)
})

export const userValidate = (object) => {
    return userSchema.safeParse(object)
}

export const userPartialValidate = (object) => {
    return userSchema.partial().safeParse(object)
}
