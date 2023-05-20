import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ProxyServiceModule } from '../proxy-service/proxy-service.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConfig } from './config/jwt.config';
import { UserNameAndPasswordStrategy } from './strategies/username-and-password.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(JwtConfig),
    ProxyServiceModule,
  ],
  controllers: [AuthController],
  providers: [JwtStrategy,UserNameAndPasswordStrategy,AuthService]
})
export class AuthModule { }
