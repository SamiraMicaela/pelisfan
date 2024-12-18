import {Controller, Get, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
//Define las rutas que requieren autenticación JWT

@Controller('protected')
export class ProtectedController {
  @UseGuards(AuthGuard('jwt')) //Aplica el guard de autenticación JWT
  // Requiere que el usuario esté autenticado
  @Get()//Define una ruta GET para /protected
  getProtectedData() {
    return { message: 'Esta es una ruta protegida' };
  }
}