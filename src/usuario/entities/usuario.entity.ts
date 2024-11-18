import { ListaReproduccion } from "src/lista-reproduccion/entities/lista-reproduccion.entity";
import { Resena } from "src/resena/entities/resena.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ default: 'usuario' }) // Por defecto, el rol es 'usuario'
  rol: string;

  @OneToMany(() => Resena, (resena) => resena.usuario)
  resena: Resena[];

  @OneToMany(() => ListaReproduccion, (lista) => lista.usuario)
  listasReproduccion: ListaReproduccion[];
}
