import { IsString } from "class-validator";

export class CreateDirectorDto {
    @IsString()
    nombre:string;

    @IsString()
    nacionalidad:string;
}
