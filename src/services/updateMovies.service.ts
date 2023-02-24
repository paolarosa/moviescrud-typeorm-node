import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovies, IMovieUpdate } from "../interfaces/movies.interfaces";
import { movieSchema } from '../schemas/movies.schemas'

/* const updateMoviesService = async (newMovieData: IMovieUpdate, idMovie:number):Promise<IMovies> =>{

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    const oldMoviesData = await movieRepository.findOneBy({
        id: idMovie
    })
    const movies = movieRepository.create({
        ...oldMoviesData,
        ...newMovieData
    })
    await movieRepository.save(movies)
    const updateMovie = movieSchema.parse(movies)
    return updateMovie
}

export { updateMoviesService} */