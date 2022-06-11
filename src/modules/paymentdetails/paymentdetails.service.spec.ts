import { Test, TestingModule } from '@nestjs/testing';
import { PaymentdetailsService } from './paymentdetails.service';

describe('PaymentdetailsService', () => {
  let service: PaymentdetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentdetailsService],
    }).compile();

    service = module.get<PaymentdetailsService>(PaymentdetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
