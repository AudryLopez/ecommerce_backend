import { Test, TestingModule } from '@nestjs/testing';
import { CardItemService } from './card-item.service';

describe('CardItemService', () => {
  let service: CardItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardItemService],
    }).compile();

    service = module.get<CardItemService>(CardItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
