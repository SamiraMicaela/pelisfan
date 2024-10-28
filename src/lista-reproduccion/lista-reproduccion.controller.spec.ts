import { Test, TestingModule } from '@nestjs/testing';
import { ListaReproduccionController } from './lista-reproduccion.controller';
import { ListaReproduccionService } from './lista-reproduccion.service';

describe('ListaReproduccionController', () => {
  let controller: ListaReproduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaReproduccionController],
      providers: [ListaReproduccionService],
    }).compile();

    controller = module.get<ListaReproduccionController>(ListaReproduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
