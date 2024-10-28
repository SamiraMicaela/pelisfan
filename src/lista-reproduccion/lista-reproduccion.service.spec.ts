import { Test, TestingModule } from '@nestjs/testing';
import { ListaReproduccionService } from './lista-reproduccion.service';

describe('ListaReproduccionService', () => {
  let service: ListaReproduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaReproduccionService],
    }).compile();

    service = module.get<ListaReproduccionService>(ListaReproduccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
