import { DataSource } from "typeorm";
import { Director } from "../entities/director.entity";

export const directorProviders = [
    {
        provide: 'DIRECTOR_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Director),
        inject: ['DATA_SOURCE'],

    }
]