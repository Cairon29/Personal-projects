import z from 'zod';

const productSchema = z.object({
    name: z.string({
        required_error: 'Product name is required',
    }),
    price: z.number().min(0).default(0),
    category: z.string({
        required_error: 'Product category is required',
    }),
    inStock: z.boolean().default(false),
    rating: z.number().min(0).max(10).default(0),
    tags: z.array(
        z.enum(['basic', 'premium', 'new', 'trending', 'sale', 'featured', 'eco', 'premium', 'professional']),
    )
})

export const validateProduct = (product) => {
    return productSchema.safeParse(product)
}

export const validatePartialProduct = (product) => {
    return productSchema.partial().safeParse(product)
}