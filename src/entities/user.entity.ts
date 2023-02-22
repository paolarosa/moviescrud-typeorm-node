import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('movies')
class Movies {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 50, unique: true})
    name: string

    @Column({type:"text", nullable: true})
    description: string

    @Column({type:"integer"})
    duration: number

    @Column({type:"integer"})
    price: number
/* 
    @CreateDateColumn()
    createAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deleteAt: string */


}
export default Movies 