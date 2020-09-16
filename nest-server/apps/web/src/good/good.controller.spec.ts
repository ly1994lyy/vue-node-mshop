import { Test, TestingModule } from '@nestjs/testing';
import { GoodController } from './good.controller';

describe('GoodController', () => {
  let controller: GoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodController],
    }).compile();

    controller = module.get<GoodController>(GoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
