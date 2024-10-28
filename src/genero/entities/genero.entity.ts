import { Pelicula } from "src/peliculas/entities/pelicula.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @ManyToMany(() => Pelicula, (pelicula) => pelicula.generos)
    pelicula: Pelicula[]

}
