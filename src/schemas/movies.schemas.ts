import { z } from 'zod'
import { hashSync } from 'bcryptjs'

const movieSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(50),
    description: z.string().optional().nullable(),
    duration: z.number(),
    price: z.number()
})

const returnigAllMovies = movieSchema.array()

const movieUpdateSchema = movieSchema.partial()

export { movieSchema, returnigAllMovies, movieUpdateSchema }