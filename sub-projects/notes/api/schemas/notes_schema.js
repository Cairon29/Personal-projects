import z from 'zod'

const noteSchema = z.object({
    title: z.string().required(),
    description: z.string().required(),
    fk_user_id: z.number().required()
})

export const noteValidate = (object) => {
    return noteSchema.safeParse(object)
}

export const notePartialValidate = (object) => {
    return noteSchema.partial().safeParse(object)
}