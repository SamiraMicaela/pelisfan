import { DataSource } from "typeorm";
import { ListaReproduccion } from "../entities/lista-reproduccion.entity";

export const listaReproduccionProviders=[
    {
        provide:'LISTAREPRODUCCION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ListaReproduccion),
        inject: ['DATA_SOURCE'],
    }
]