import { IMovie } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import{ Movie } from '../entities'
import { Repository } from "typeorm";
import { movieSchema } from "../schemas/movies.schemas";

const createMovieService = async (userData: IMovie):Promise<IMovie> => {

const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
const movie = movieRepository.create(userData)
await movieRepository.save(movie)
const newMovie = movieSchema.parse(movie)

return newMovie
}

export {createMovieService}