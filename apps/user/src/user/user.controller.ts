import { Controller, UseFilters } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { RedisExceptionFilter } from 'apps/lib/exceptions/rcp-error.exeption';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseFilters(new RedisExceptionFilter())
  @MessagePattern('createUser')
  create(@Payload() data: any, @Ctx() context: RedisContext) {
    
    return this.userService.create(data);
  }



  @MessagePattern('findUserByUserName')
  findUserByUserName(@Payload() name: string) {
    console.log(name);
    
    return this.userService.findUserByUserName(name);
  }

}
