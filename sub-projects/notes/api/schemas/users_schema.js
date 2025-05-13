import z from 'zod';

const userSchema = z.object({
    name: z.string().required(),
    nickName: z.string().required(),
    email: z.string().email().required(),
    password: z.string().min(6).required(),
})

export const userValidate = (object) => {
    return userSchema.safeParse(object)
}

export const usersPartialValidate = (object) => {
    return userSchema.partial().safeParse(object)
}