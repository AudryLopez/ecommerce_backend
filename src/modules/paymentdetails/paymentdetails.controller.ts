import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentdetailsService } from './paymentdetails.service';
import { CreatePaymentdetailDto } from './dto/create-paymentdetail.dto';
import { UpdatePaymentdetailDto } from './dto/update-paymentdetail.dto';

@Controller('paymentdetails')
export class PaymentdetailsController {
  constructor(private readonly paymentdetailsService: PaymentdetailsService) {}

  @Post()
  create(@Body() createPaymentdetailDto: CreatePaymentdetailDto) {
    return this.paymentdetailsService.create(createPaymentdetailDto);
  }

  @Get()
  findAll() {
    return this.paymentdetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentdetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentdetailDto: UpdatePaymentdetailDto) {
    return this.paymentdetailsService.update(+id, updatePaymentdetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentdetailsService.remove(+id);
  }
}
