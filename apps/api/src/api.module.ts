import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { AuthModule } from './auth/auth.module';
import { ProxyServiceModule } from './proxy-service/proxy-service.module';
import { MessagesModule } from './messages/messages.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }), AuthModule, ProxyServiceModule, MessagesModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule { }
