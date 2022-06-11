import { PartialType } from '@nestjs/swagger';
import { CreatePaymentdetailDto } from './create-paymentdetail.dto';

export class UpdatePaymentdetailDto extends PartialType(CreatePaymentdetailDto) {}
