import { Test, TestingModule } from '@nestjs/testing';
import { PaymentdetailsController } from './paymentdetails.controller';
import { PaymentdetailsService } from './paymentdetails.service';

describe('PaymentdetailsController', () => {
  let controller: PaymentdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentdetailsController],
      providers: [PaymentdetailsService],
    }).compile();

    controller = module.get<PaymentdetailsController>(PaymentdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
