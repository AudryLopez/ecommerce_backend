import { PartialType } from '@nestjs/swagger';
import { CreateCardItemDto } from './create-card-item.dto';

export class UpdateCardItemDto extends PartialType(CreateCardItemDto) {}
