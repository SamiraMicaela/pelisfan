import { IsString, IsArray, IsNumber } from "class-validator";
export class CreateListaReproduccionDto {
    @IsString()
    titulo: string;

    @IsArray()
    @IsNumber({}, { each: true })
    peliculasIds: number[];
}
