import { movieSchema, returnigAllMovies, movieUpdateSchema, returnMovieSchema } from '../schemas/movies.schemas'
import { z } from 'zod'
import { Movie } from '../entities'
import { Repository } from 'typeorm'

type IMovie = z.infer<typeof movieSchema>
type IMovies = z.infer<typeof returnigAllMovies>
type IMovieReturning = z.infer<typeof returnMovieSchema>
type IMovieUpdate = z.infer<typeof movieUpdateSchema>
type iMovieRepo = Repository<Movie>;

export { IMovie, IMovies, IMovieUpdate, iMovieRepo, IMovieReturning }
