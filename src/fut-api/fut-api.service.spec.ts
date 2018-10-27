import { Test, TestingModule } from '@nestjs/testing';
import { FutApiService } from './fut-api.service';

describe('FutApiService', () => {
  let service: FutApiService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FutApiService],
    }).compile();
    service = module.get<FutApiService>(FutApiService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
