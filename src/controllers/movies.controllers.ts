import { Request, Response } from 'express'
import { IMovie, IMovieUpdate } from '../interfaces/movies.interfaces'
import { createMovieService } from '../services/createMovie.service'
import { deleteMovieService } from '../services/deleteMovies.service'
import { listMoviesService } from '../services/listMovies.service' 
import { updateMoviesService } from '../services/updateMovies.service'

const createMovieController = async (req:Request, res:Response) =>{

    const movieData: IMovie = req.body
    const newMovie = await createMovieService(movieData)
    return res.status(201).json(newMovie)

}

 const listMoviesController = async(req:Request, res:Response) =>{
   const {page, perPage, order, sort}  = req.query
    const movies = await listMoviesService(page, perPage, order, sort)
    return res.json(movies)
}
 
const deleteMoviesController = async(req:Request, res:Response) =>{
    await deleteMovieService(parseInt(req.params.id))
    return res.status(204).send()
}

const updateMoviesController = async(req:Request, res:Response) =>{
    const movieData: IMovieUpdate[] = req.body
    const idMovie = parseInt(req.params.id)
    const updateMovie = await updateMoviesService(movieData, idMovie)
    return res.json(updateMovie)
} 


export{ createMovieController,  listMoviesController,  deleteMoviesController, updateMoviesController}