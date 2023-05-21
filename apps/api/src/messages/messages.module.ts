import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { BullModule } from '@nestjs/bull';
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'message',
    }),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
