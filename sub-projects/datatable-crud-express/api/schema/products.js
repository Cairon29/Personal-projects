// import z from 'zod'

// const userSchema = z.object({
//     nombres: z.string().required(),
//     apellidos: z.string().required(),
//     email: z.string().email().required(),
//     password: z.string().min(6).required(),
//     rol: z.string().required()
// })

// export const userValidate = (object) => {
//     return userSchema.safeParse(object)
// }

// export const userPartialValidate = (object) => {
//     return userSchema.partial().safeParse(object)
// }
