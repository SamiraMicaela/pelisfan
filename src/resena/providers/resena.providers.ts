import { DataSource } from "typeorm";
import { Resena } from "../entities/resena.entity";

export const resenaProviders=[
    {
        provide:'RESENA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Resena),
        inject: ['DATA_SOURCE'],
    }
]