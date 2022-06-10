import { Injectable } from '@nestjs/common';
import { CreateCardItemDto } from './dto/create-card-item.dto';
import { UpdateCardItemDto } from './dto/update-card-item.dto';

@Injectable()
export class CardItemService {
  create(createCardItemDto: CreateCardItemDto) {
    return 'This action adds a new cardItem';
  }

  findAll() {
    return `This action returns all cardItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cardItem`;
  }

  update(id: number, updateCardItemDto: UpdateCardItemDto) {
    return `This action updates a #${id} cardItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardItem`;
  }
}
