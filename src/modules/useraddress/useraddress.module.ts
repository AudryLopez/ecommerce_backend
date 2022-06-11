import { Module } from '@nestjs/common';
import { UseraddressService } from './useraddress.service';
import { UseraddressController } from './useraddress.controller';

@Module({
  controllers: [UseraddressController],
  providers: [UseraddressService]
})
export class UseraddressModule {}
