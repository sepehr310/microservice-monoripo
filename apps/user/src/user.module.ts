import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserServiceModule } from './user/user.module';

@Module({
  imports: [UserServiceModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
