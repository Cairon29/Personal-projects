import z from 'zod'

export const registerSchema = z.object({
    nombres: z.string(),
    apellidos: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
}).refine((data) => data.password === data.confirm_password, {
    message: "Las contraseñas no coinciden",
    path: ["confirm_password"],
})

export type registerForm = z.infer<typeof registerSchema>

export const registerValidate = (object: registerForm) => {
    return registerSchema.safeParse(object)
}