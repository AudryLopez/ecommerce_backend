import { Injectable } from '@nestjs/common';
import { CreateUseraddressDto } from './dto/create-useraddress.dto';
import { UpdateUseraddressDto } from './dto/update-useraddress.dto';

@Injectable()
export class UseraddressService {
  create(createUseraddressDto: CreateUseraddressDto) {
    return 'This action adds a new useraddress';
  }

  findAll() {
    return `This action returns all useraddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} useraddress`;
  }

  update(id: number, updateUseraddressDto: UpdateUseraddressDto) {
    return `This action updates a #${id} useraddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} useraddress`;
  }
}
