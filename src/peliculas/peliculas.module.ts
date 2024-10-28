import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { peliculasProviders } from './providers/pelicula.provider';
import { directorProviders } from 'src/directores/providers/director.providers';
import { generoProviders } from 'src/genero/providers/genero.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PeliculasController],
  providers: [...peliculasProviders, ...directorProviders, ...generoProviders, PeliculasService],
  exports: [...peliculasProviders]
})
export class PeliculasModule { }
