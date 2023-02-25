import { Router } from 'express'
import { createMovieController, deleteMoviesController, listMoviesController,/* , updateMoviesController  */
updateMoviesController} from '../controllers/movies.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid'
import ensureMovieExistsMiddleware from '../middlewares/ensureMovieExists'
import ensureNameExistsMiddleware from '../middlewares/ensureNameAlreadyExists'
import { movieSchema, movieUpdateSchema } from '../schemas/movies.schemas'

const movieRoutes: Router = Router()

movieRoutes.post('', ensureNameExistsMiddleware,   ensureDataIsValidMiddleware(movieSchema), createMovieController)
movieRoutes.get('', listMoviesController)
movieRoutes.delete('/:id', ensureMovieExistsMiddleware, deleteMoviesController)
movieRoutes.patch('/:id',  ensureDataIsValidMiddleware(movieUpdateSchema), ensureMovieExistsMiddleware,ensureNameExistsMiddleware, updateMoviesController)

export default movieRoutes