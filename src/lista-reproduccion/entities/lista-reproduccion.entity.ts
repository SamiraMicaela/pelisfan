import { Pelicula } from "src/peliculas/entities/pelicula.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ListaReproduccion {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    titulo: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.listasReproduccion, { onDelete: 'CASCADE' })
    usuario: Usuario;

    @ManyToMany(() => Pelicula)
    @JoinTable()
    peliculas: Pelicula[];
}
