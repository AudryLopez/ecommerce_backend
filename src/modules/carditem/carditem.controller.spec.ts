import { Test, TestingModule } from '@nestjs/testing';
import { CarditemController } from './carditem.controller';
import { CarditemService } from './carditem.service';

describe('CarditemController', () => {
  let controller: CarditemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarditemController],
      providers: [CarditemService],
    }).compile();

    controller = module.get<CarditemController>(CarditemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
