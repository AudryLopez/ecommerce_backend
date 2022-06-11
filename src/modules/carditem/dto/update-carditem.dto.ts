import { PartialType } from '@nestjs/swagger';
import { CreateCarditemDto } from './create-carditem.dto';

export class UpdateCarditemDto extends PartialType(CreateCarditemDto) {}
