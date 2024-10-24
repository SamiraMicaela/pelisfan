import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { peliculasProviders } from './providers/pelicula.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PeliculasController],
  providers: [...peliculasProviders ,PeliculasService],
  exports:[...peliculasProviders]
})
export class PeliculasModule {}
