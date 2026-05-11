import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { usuarioProviders } from './providers/usuario.providers';
import { DatabaseModule } from 'src/database/database.module';
import { HashService } from './hash/hash.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
//import { JwtStrategy } from './auth/jwt.strategy/jwt.strategy';


@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET, // Aquí estamos usando la clave secreta desde el .env
    signOptions: { expiresIn: process.env.JWT_EXPIRATION }, // Tiempo de expiración desde el .env
  }),
    DatabaseModule],
  controllers: [UsuarioController],
  providers: [...usuarioProviders, UsuarioService, HashService,AuthService],
  exports: [...usuarioProviders]
})
export class UsuarioModule { }
