import { Entity, Column, PrimaryGeneratedColumn/* , CreateDateColumn, UpdateDateColumn, DeleteDateColumn  */} from "typeorm";

@Entity('movies')
class Movie {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type:"varchar", length: 50, unique: true})
    name: string

    @Column({type:"text", nullable: true})
    description?: string | undefined | null

    @Column({type:"integer"})
    duration: number

    @Column({type:"integer"})
    price: number

}
export { Movie }