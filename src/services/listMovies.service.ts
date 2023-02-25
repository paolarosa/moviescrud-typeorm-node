import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovies } from "../interfaces/movies.interfaces";
import { returnigAllMovies } from '../schemas/movies.schemas'

const listMoviesService = async (page: any, perPage: any, order: any, sort: any): Promise<any> => {

  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
  if(!page && perPage < 0){
    perPage = 5
  }
  if (!+page) {
    page = 1;
  }
  if (page <= 0) {
    page = 1
  } 
  
  if(perPage < 0){
    page = 1 
  }
  if(/* !Number.isInteger(perPage) && perPage < 0  &&  */perPage > 5 && perPage < 0){
  perPage = 5
  }
  


  const take: number = Number(perPage) || 5
  const skip: number = Number(page) || 1
  /*    if (page <= 0 || perPage <= 0) {
       page = 1;
       perPage = 5;
     }
     if (perPage > 5 || perPage < 0) {
       perPage = 5;
     }
     if(!+perPage){
       perPage = 5;;
     }   */


  let prevPage: string | null = `http://localhost:3000/movies?page=${skip - 1}&perPage=${take}`;
  if (page - 1 <= 0) {
    prevPage = null;
  }
  let nextPage: string | null  = `http://localhost:3000/movies?page=${+skip + 1}&perPage=${take}`; 
  
  
 
  const [findMovies,count] = await movieRepository.findAndCount({
    take: take,
    skip: take * (skip - 1),
    order: {
        [sort]: order
      
      
      /*  id: {
        direction: order
      }  */
    } 
    
  }) 
  nextPage = count <= perPage * page? null : `http://localhost:3000/movies?page=${+skip + 1}&perPage=${take}` 
/*   const pages = count / perPage
  if(count % 5 === 0 && pages === +page || findMovies.length < 5){
    nextPage = null;
  }    */


  const movies = returnigAllMovies.parse(findMovies)
  const result = {
    prevPage: prevPage,
    nextPage: nextPage,
    count,
    data: movies
  }
  
  return result
}

export { listMoviesService } 