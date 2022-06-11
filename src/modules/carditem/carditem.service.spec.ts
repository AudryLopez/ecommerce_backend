import { Test, TestingModule } from '@nestjs/testing';
import { CarditemService } from './carditem.service';

describe('CarditemService', () => {
  let service: CarditemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarditemService],
    }).compile();

    service = module.get<CarditemService>(CarditemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
