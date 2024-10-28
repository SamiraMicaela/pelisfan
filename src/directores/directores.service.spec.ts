import { Test, TestingModule } from '@nestjs/testing';
import { DirectoresService } from './directores.service';

describe('DirectoresService', () => {
  let service: DirectoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectoresService],
    }).compile();

    service = module.get<DirectoresService>(DirectoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
