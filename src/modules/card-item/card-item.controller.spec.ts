import { Test, TestingModule } from '@nestjs/testing';
import { CardItemController } from './card-item.controller';
import { CardItemService } from './card-item.service';

describe('CardItemController', () => {
  let controller: CardItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardItemController],
      providers: [CardItemService],
    }).compile();

    controller = module.get<CardItemController>(CardItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
