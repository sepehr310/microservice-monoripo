import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignUpWithUserNameAndPasswordDto } from './dto/sign-up-with-username-and-password.dto';
import { ProxyServiceService } from '../proxy-service/proxy-service.service';

@Injectable()
export class AuthService {
  constructor(
    private clientProxy:ProxyServiceService
    ){}
 async createUser(createAuthDto: SignUpWithUserNameAndPasswordDto) {
    return await this.clientProxy.createUserProxy(createAuthDto);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
