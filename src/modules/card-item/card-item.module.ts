import { Module } from '@nestjs/common';
import { CardItemService } from './card-item.service';
import { CardItemController } from './card-item.controller';

@Module({
  controllers: [CardItemController],
  providers: [CardItemService]
})
export class CardItemModule {}
