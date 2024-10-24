import { DataSource } from "typeorm";
import { Pelicula } from "../entities/pelicula.entity";

export const peliculasProviders = [
    {
        provide: 'PELICULA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Pelicula),
        inject: ['DATA_SOURCE'],

    }
]