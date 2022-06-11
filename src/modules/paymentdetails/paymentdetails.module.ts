import { Module } from '@nestjs/common';
import { PaymentdetailsService } from './paymentdetails.service';
import { PaymentdetailsController } from './paymentdetails.controller';

@Module({
  controllers: [PaymentdetailsController],
  providers: [PaymentdetailsService]
})
export class PaymentdetailsModule {}
