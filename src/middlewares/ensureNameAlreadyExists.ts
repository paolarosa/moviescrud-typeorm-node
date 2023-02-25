import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'

const ensureNameExistsMiddleware = async(req: Request, res: Response, next: NextFunction):Promise<void> => {

    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)
   
    const findMovie = await movieRepository.findOne({
        where:{
            name: req.body.name
        }
    })
    if(!Object.keys(req.body).includes("name")){
        return next()
    }
    if(findMovie){
        throw new AppError('Movie already exists.', 409)
    }

    return next()

}

export default ensureNameExistsMiddleware