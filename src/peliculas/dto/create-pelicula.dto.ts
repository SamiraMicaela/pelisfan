import { IsString,IsNumber, IsArray } from "class-validator";
export class CreatePeliculaDto {
    @IsString()
    titulo:string;

    @IsString()
    descripcion:string;

    @IsNumber()
    duracion:number;
    
    @IsNumber()
    esteno:number;

    @IsArray()
    @IsString({ each: true }) //si saco el each:true funciona, pero no aparecen cuando pido las peliculas
    directorIds: string[];

    @IsArray()
    @IsString({ each: true })
    generoIds: string[];

    
}
