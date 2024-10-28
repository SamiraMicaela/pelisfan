import { Test, TestingModule } from '@nestjs/testing';
import { ResenaService } from './resena.service';

describe('ResenaService', () => {
  let service: ResenaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResenaService],
    }).compile();

    service = module.get<ResenaService>(ResenaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
