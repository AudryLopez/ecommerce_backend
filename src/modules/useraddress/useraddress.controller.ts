import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseraddressService } from './useraddress.service';
import { CreateUseraddressDto } from './dto/create-useraddress.dto';
import { UpdateUseraddressDto } from './dto/update-useraddress.dto';

@Controller('useraddress')
export class UseraddressController {
  constructor(private readonly useraddressService: UseraddressService) {}

  @Post()
  create(@Body() createUseraddressDto: CreateUseraddressDto) {
    return this.useraddressService.create(createUseraddressDto);
  }

  @Get()
  findAll() {
    return this.useraddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.useraddressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUseraddressDto: UpdateUseraddressDto) {
    return this.useraddressService.update(+id, updateUseraddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.useraddressService.remove(+id);
  }
}
