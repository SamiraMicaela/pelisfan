import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Pelicula } from "src/peliculas/entities/pelicula.entity";

@Entity()
export class Resena {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'int', width: 1 })
    calificacion: number;

    @Column({ type: 'text' })
    comentario: string;


    @ManyToOne(() => Usuario, (usuario) => usuario.resena, { onDelete: 'CASCADE' })
    usuario: Usuario;

    @ManyToOne(() => Pelicula, (pelicula) => pelicula.resena, { onDelete: 'CASCADE' })
    pelicula: Pelicula;

}
