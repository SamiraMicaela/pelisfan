import { IsString, IsEmail } from "class-validator";
export class CreateUsuarioDto {

    @IsString()
    nombre:string;

    @IsEmail()
    email:string;
}
