import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationGateway } from './notification.gateway';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'message',
    }),
  ],
  providers: [NotificationGateway, NotificationService],
})
export class NotificationModule {}
