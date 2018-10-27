import { Test, TestingModule } from '@nestjs/testing';
import { FutApiController } from './fut-api.controller';

describe('FutApi Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FutApiController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FutApiController = module.get<FutApiController>(FutApiController);
    expect(controller).toBeDefined();
  });
});
