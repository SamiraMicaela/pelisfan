import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasModule } from './peliculas/peliculas.module';

@Module({
  imports: [PeliculasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
