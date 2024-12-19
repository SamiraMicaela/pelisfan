import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from './jwt-auth.guard';

describe('JwtAuthGuard', () => {
  let provider: JwtAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtAuthGuard],
    }).compile();

    provider = module.get<JwtAuthGuard>(JwtAuthGuard);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
