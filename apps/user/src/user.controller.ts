import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload, Ctx, RedisContext } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @MessagePattern('createUser')
  // create(@Payload() data: any, @Ctx() context: RedisContext) {
  //   console.log(data);
  //   console.log(context)
    
  //   return data //this.userService.create(data);
  // }
}
