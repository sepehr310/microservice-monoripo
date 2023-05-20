import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'apps/user/src/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProxyServiceModule } from '../proxy-service/proxy-service.module';

@Module({
  imports: [ProxyServiceModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
