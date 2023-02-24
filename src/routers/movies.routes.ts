import { Router } from 'express'
import { createMovieController, deleteMoviesController, listMoviesController/* , updateMoviesController  */} from '../controllers/movies.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid'
import ensureMovieExistsMiddleware from '../middlewares/ensureMovieExists'
import { movieSchema, movieUpdateSchema } from '../schemas/movies.schemas'

const movieRoutes: Router = Router()

movieRoutes.post('', ensureDataIsValidMiddleware(movieSchema), createMovieController)
movieRoutes.get('', listMoviesController)
movieRoutes.delete('/:id', ensureMovieExistsMiddleware, deleteMoviesController)
/* movieRoutes.patch('/:id', ensureDataIsValidMiddleware(movieUpdateSchema), ensureMovieExistsMiddleware, updateMoviesController) */

export default movieRoutes