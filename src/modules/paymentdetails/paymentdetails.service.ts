import { Injectable } from '@nestjs/common';
import { CreatePaymentdetailDto } from './dto/create-paymentdetail.dto';
import { UpdatePaymentdetailDto } from './dto/update-paymentdetail.dto';

@Injectable()
export class PaymentdetailsService {
  create(createPaymentdetailDto: CreatePaymentdetailDto) {
    return 'This action adds a new paymentdetail';
  }

  findAll() {
    return `This action returns all paymentdetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentdetail`;
  }

  update(id: number, updatePaymentdetailDto: UpdatePaymentdetailDto) {
    return `This action updates a #${id} paymentdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentdetail`;
  }
}
