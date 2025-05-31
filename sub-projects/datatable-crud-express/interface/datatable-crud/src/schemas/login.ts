import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type LoginForm = z.infer<typeof loginSchema>

export const loginValidate = (object: LoginForm) => {
    return loginSchema.safeParse(object)
}