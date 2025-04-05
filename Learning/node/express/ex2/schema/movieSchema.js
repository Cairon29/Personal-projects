import z from 'zod';

const movieSchema = z.object({
    title: z.string({
        required_error: 'Movie title is required',
    }),
    year: z.number({
        message: 'Year error',
    }).int().min(1900).max(2025),
    director: z.string({
        required_error: 'Director is required',
    }),
    duration: z.number({
        message: 'Duration must be a number',
    }).int().min(1),
    poster: z.string({
        required_error: 'Poster is required',
    }).url().endsWith('.jpg'),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Fantasy', 'Biography', 'Drama', 'Romance', 'Comedy', 'Crime', 'Thriller', 'Sci-Fi', 'Horror', 'Animation', 'Documentary', 'Family']),
        { required_error: 'Genre is required' }
    ),
    rate: z.number().min(0).max(10).default(0)
})

export function validateMovie (movie) {
    return movieSchema.safeParse(movie);
}

