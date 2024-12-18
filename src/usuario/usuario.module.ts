import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { usuarioProviders } from './providers/usuario.providers';
import { DatabaseModule } from 'src/database/database.module';
import { HashService } from './hash/hash.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '3600s' },
  }),
    DatabaseModule],
  controllers: [UsuarioController],
  providers: [...usuarioProviders, UsuarioService, HashService, JwtStrategy],
  exports: [...usuarioProviders]
})
export class UsuarioModule { }
