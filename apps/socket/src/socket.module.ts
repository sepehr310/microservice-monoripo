import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';
import { SocketService } from './socket.service';
import { NotificationModule } from './notification/notification.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    NotificationModule,
  ],
  controllers: [SocketController],
  providers: [SocketService],
})
export class SocketModule {}
