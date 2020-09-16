import { Test, TestingModule } from '@nestjs/testing';
import { SecondcategoryController } from './secondcategory.controller';

describe('SecondcategoryController', () => {
  let controller: SecondcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecondcategoryController],
    }).compile();

    controller = module.get<SecondcategoryController>(SecondcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
