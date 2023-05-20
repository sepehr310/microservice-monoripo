import { Module } from '@nestjs/common';
import { ProxyServiceService } from './proxy-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'AUTH_SERVICE',
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      }
    },
  ])],
  providers: [ProxyServiceService]
})
export class ProxyServiceModule { }
