import { Module } from '@nestjs/common';
import { ResenaService } from './resena.service';
import { ResenaController } from './resena.controller';
import { resenaProviders } from './providers/resena.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ResenaController],
  providers: [...resenaProviders , ResenaService],
  exports:[...resenaProviders]
})
export class ResenaModule {}
