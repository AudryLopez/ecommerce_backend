import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarditemService } from './carditem.service';
import { CreateCarditemDto } from './dto/create-carditem.dto';
import { UpdateCarditemDto } from './dto/update-carditem.dto';

@Controller('carditem')
export class CarditemController {
  constructor(private readonly carditemService: CarditemService) {}

  @Post()
  create(@Body() createCarditemDto: CreateCarditemDto) {
    return this.carditemService.create(createCarditemDto);
  }

  @Get()
  findAll() {
    return this.carditemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carditemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarditemDto: UpdateCarditemDto) {
    return this.carditemService.update(+id, updateCarditemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carditemService.remove(+id);
  }
}
