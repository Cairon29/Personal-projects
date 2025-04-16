import z from 'zod'

const bikeSchema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.number().min(1817).max(2025),
    topSpeed: z.number().positive(),
    engine: z.number().default(100),
    dryWeight: z.number(),
    wetWeight: z.number(),
})

export const bikeValidate = (object) => {
    return bikeSchema.safeParse(object)
}

export const bikePartialValidate = (object) => {
    return bikeSchema.partial.safeParse(object)
}