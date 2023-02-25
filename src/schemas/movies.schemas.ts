import { z } from 'zod'

const movieSchema = z.object({
    name: z.string().max(50),
    description: z.string().optional().nullable(),
    duration: z.number().gt(0),
    price: z.number()
})

const returnMovieSchema = movieSchema.extend({
    id: z.number(),
})

const returnigAllMovies = returnMovieSchema.array()

const movieUpdateSchema = returnMovieSchema.partial()

export { movieSchema, returnigAllMovies, movieUpdateSchema, returnMovieSchema }