import { Pelicula } from "src/peliculas/entities/pelicula.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('directores')
export class Director {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nombre:string;

    @Column()
    nacionalidad:string;
    
    // relación uno a muchos: un director puede dirigir muchas películas
    @ManyToMany(()=> Pelicula, (pelicula)=> pelicula.directores)
    pelicula: Pelicula[];


}
