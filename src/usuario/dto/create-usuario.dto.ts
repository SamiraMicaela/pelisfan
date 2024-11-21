import { IsString, IsEmail, IsOptional, IsStrongPassword } from "class-validator";
export class CreateUsuarioDto {

    @IsString()
    nombre: string;

    @IsEmail()
    email: string;

    @IsString()
    userName: string;

    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }, { message: 'The password must contain a minimum of 8 characters, 1 lowercase, 1 uppercase , 1 number and 1 special symbol' })
    password: string;

    @IsOptional()
    @IsString()
    rol?: string; // El rol es opcional, por defecto será 'usuario'
}
