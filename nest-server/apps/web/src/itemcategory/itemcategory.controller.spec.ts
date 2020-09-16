import { Test, TestingModule } from '@nestjs/testing';
import { ItemcategoryController } from './itemcategory.controller';

describe('ItemcategoryController', () => {
  let controller: ItemcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemcategoryController],
    }).compile();

    controller = module.get<ItemcategoryController>(ItemcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
