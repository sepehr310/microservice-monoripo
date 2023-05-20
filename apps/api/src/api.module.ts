import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { AuthModule } from './auth/auth.module';
import { ProxyServiceModule } from './proxy-service/proxy-service.module';

@Module({
  imports: [AuthModule, ProxyServiceModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule { }
