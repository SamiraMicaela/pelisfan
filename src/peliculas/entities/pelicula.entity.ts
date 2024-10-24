import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    duracion: number;

    @Column()
    estreno: number;

    // @ManyToMany(() => Director, director => director.pelicula)
    // directores: Director[];

    // @ManyToMany(() => Genero, genero => genero.pelicula)
    // generos: Genero[];

    // @OneToMany(() => Resena, resena => resena.pelicula)
    // resena: Resena[];
}
