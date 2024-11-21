import { IsEmail, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Password must contain a minimum of 8 characters and at least 1 lower case, 1 upper case, 1 number and 1 special character',
    },
  )
  password: string;
}