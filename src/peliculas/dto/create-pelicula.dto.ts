import { IsString,IsNumber } from "class-validator";
export class CreatePeliculaDto {
    @IsString()
    titulo:string;

    @IsString()
    descripcion:string;

    @IsNumber()
    duracion:number;
    
    @IsNumber()
    esteno:number;
}
