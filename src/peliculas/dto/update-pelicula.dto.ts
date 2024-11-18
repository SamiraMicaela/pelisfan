import { PartialType } from '@nestjs/mapped-types';
import { CreatePeliculaDto } from './create-pelicula.dto';
import { IsArray, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePeliculaDto extends PartialType(CreatePeliculaDto) {
    @IsOptional()
    @IsString()
    titulo?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsNumber()
    duracion?: number;

    @IsOptional()
    @IsNumber()
    estreno?: number;

    @IsOptional()
    @IsArray()
    @IsUUID('all', { each: true }) // el each asegura que sea un array de UUIDs
    directorIds?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID('all', { each: true }) 
    generoIds?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID('all', { each: true })
    resena?: string[];
     
}
