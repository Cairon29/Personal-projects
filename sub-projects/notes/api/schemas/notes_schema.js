import z from 'zod'

const noteSchema = z.object({
    title: z.string().required(),
    description: z.string().required(),
    date: z.string().required(),
})

export const noteValidate = (object) => {
    return noteSchema.safeParse(object)
}

export const notePartialValidate = (object) => {
    return noteSchema.partial().safeParse(object)
}