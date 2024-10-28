import { Module } from '@nestjs/common';
import { ListaReproduccionService } from './lista-reproduccion.service';
import { ListaReproduccionController } from './lista-reproduccion.controller';
import { DatabaseModule } from 'src/database/database.module';
import { listaReproduccionProviders } from './providers/lista-reproduccion.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [ListaReproduccionController],
  providers: [...listaReproduccionProviders ,ListaReproduccionService],
  exports:[...listaReproduccionProviders]
})
export class ListaReproduccionModule {}
