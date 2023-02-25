import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovie, IMovieReturning, IMovieUpdate } from "../interfaces/movies.interfaces";
import { movieSchema, movieUpdateSchema, returnMovieSchema } from '../schemas/movies.schemas'

const updateMoviesService = async (newMovieData: IMovieUpdate[], idMovie:number):Promise<IMovieReturning>  =>{

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    const oldMoviesData = await movieRepository.findOneBy({
        id: idMovie
    })

    const movies = movieRepository.create({
        ...oldMoviesData,
        ...newMovieData
    })

    await movieRepository.save(movies)
    const updateMovie = returnMovieSchema.parse(movies)
    return updateMovie  
}

export { updateMoviesService} 