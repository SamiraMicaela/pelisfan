import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { usuarioProviders } from './providers/usuario.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [UsuarioController],
  providers: [...usuarioProviders ,UsuarioService],
  exports:[...usuarioProviders]
})
export class UsuarioModule {}
