import { PartialType } from '@nestjs/swagger';
import { CreateUseraddressDto } from './create-useraddress.dto';

export class UpdateUseraddressDto extends PartialType(CreateUseraddressDto) {}
