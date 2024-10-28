import { IsInt, IsString, Max, Min } from "class-validator";

export class CreateResenaDto {
    @IsInt()
    @Min(1)
    @Max(5)
    calificacion: number;

    @IsString()
    comentario: string;

    @IsInt()
    usuarioId: number;

    @IsInt()
    peliculaId: number;
}
