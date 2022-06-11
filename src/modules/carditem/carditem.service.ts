import { Injectable } from '@nestjs/common';
import { CreateCarditemDto } from './dto/create-carditem.dto';
import { UpdateCarditemDto } from './dto/update-carditem.dto';

@Injectable()
export class CarditemService {
  create(createCarditemDto: CreateCarditemDto) {
    return 'This action adds a new carditem';
  }

  findAll() {
    return `This action returns all carditem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carditem`;
  }

  update(id: number, updateCarditemDto: UpdateCarditemDto) {
    return `This action updates a #${id} carditem`;
  }

  remove(id: number) {
    return `This action removes a #${id} carditem`;
  }
}
