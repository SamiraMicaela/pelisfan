import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { usuarioProviders } from './providers/usuario.providers';
import { DatabaseModule } from 'src/database/database.module';
import { HashService } from './hash/hash.service';

@Module({
  imports:[DatabaseModule],
  controllers: [UsuarioController],
  providers: [...usuarioProviders ,UsuarioService, HashService],
  exports:[...usuarioProviders]
})
export class UsuarioModule {}
