import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"

const deleteMovieService = async (idUser: number):Promise<void> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie = await movieRepository.findOne({
        where:{
            id: idUser
        }
    })
    await movieRepository.remove(movie!)

    }
    
    export {deleteMovieService}