import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { generoProviders } from './providers/genero.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [GeneroController],
  providers: [...generoProviders, GeneroService],
  exports: [...generoProviders]
})
export class GeneroModule { }
