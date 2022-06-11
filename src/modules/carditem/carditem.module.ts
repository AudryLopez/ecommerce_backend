import { Module } from '@nestjs/common';
import { CarditemService } from './carditem.service';
import { CarditemController } from './carditem.controller';

@Module({
  controllers: [CarditemController],
  providers: [CarditemService]
})
export class CarditemModule {}
