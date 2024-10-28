import { Test, TestingModule } from '@nestjs/testing';
import { DirectoresController } from './directores.controller';
import { DirectoresService } from './directores.service';

describe('DirectoresController', () => {
  let controller: DirectoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectoresController],
      providers: [DirectoresService],
    }).compile();

    controller = module.get<DirectoresController>(DirectoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
