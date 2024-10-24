
import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";

// Define un módulo de base de datos en NestJS
@Module({
    // Registra los proveedores de la base de datos en el módulo
    providers: [...databaseProviders],

    // Exporta el  proveedor 'DATA_SOURCE' para que pueda ser usado en otros módulos de la aplicación
    exports: [...databaseProviders]
})
export class DatabaseModule { }