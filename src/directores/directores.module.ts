import { Module } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { DirectoresController } from './directores.controller';
import { DatabaseModule } from 'src/database/database.module';
import { directorProviders } from './providers/director.providers';

@Module({
    imports:[DatabaseModule],
  controllers: [DirectoresController],
  providers: [...directorProviders,DirectoresService],
  exports:[...directorProviders]
})
export class DirectoresModule {}
