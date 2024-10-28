import { Director } from "src/directores/entities/director.entity";
import { Genero } from "src/genero/entities/genero.entity";
import { Resena } from "src/resena/entities/resena.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    duracion: number;

    @Column()
    estreno: number;

    @ManyToMany(() => Director, directores => directores.pelicula/*, {eager:true}*/)
    directores: Director;

    @ManyToMany(() => Genero, genero => genero.pelicula)
    generos: Genero[];

    @OneToMany(() => Resena, resena => resena.pelicula)
    resena: Resena[];
}
