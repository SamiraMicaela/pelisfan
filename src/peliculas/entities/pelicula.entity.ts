import { IsOptional } from "class-validator";
import { Director } from "src/directores/entities/director.entity";
import { Genero } from "src/genero/entities/genero.entity";
import { Resena } from "src/resena/entities/resena.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToMany(() => Director, (director) => director.pelicula, { cascade: true })
    @JoinTable()
    directores: Director[];
 
    @ManyToMany(() => Genero, (genero) => genero.pelicula, { cascade: true })
    @JoinTable()
    generos: Genero[];

    @OneToMany(() => Resena, (resena) => resena.pelicula)
    resena: Resena[];


    
    // @Column()
    // url_imagen: string;
    
}
