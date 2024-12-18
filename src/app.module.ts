import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasModule } from './peliculas/peliculas.module';
import { DirectoresModule } from './directores/directores.module';
import { GeneroModule } from './genero/genero.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ListaReproduccionModule } from './lista-reproduccion/lista-reproduccion.module';
import { ResenaModule } from './resena/resena.module';
import { HashService } from './usuario/hash/hash.service';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,  // Hace que las variables de entorno estén disponibles globalmente
  }),
    PeliculasModule, DirectoresModule, GeneroModule, UsuarioModule, ListaReproduccionModule, ResenaModule],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
