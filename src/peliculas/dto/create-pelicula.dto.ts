import { IsString,IsNumber, IsArray } from "class-validator";
import { Director } from "src/directores/entities/director.entity";
import { Genero } from "src/genero/entities/genero.entity";
export class CreatePeliculaDto {
    @IsString()
    titulo:string;

    @IsString()
    descripcion:string;

    @IsNumber()
    duracion:number;
    

    @IsNumber()
    estreno:number;

    @IsArray()
    @IsString({ each: true }) //si saco el each:true funciona, pero no aparecen cuando pido las peliculas
    directorIds: string[];

    @IsArray()
    @IsString({ each: true }) 
    generoIds: string[]; 

    //@IsString()
    //url_imagen: string;
}
