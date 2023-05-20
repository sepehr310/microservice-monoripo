import { Injectable } from '@nestjs/common';
import { SignUpWithUserNameAndPasswordDto } from './dto/sign-up-with-username-and-password.dto';
import { ProxyServiceService } from '../proxy-service/proxy-service.service';
import { User } from 'apps/user/src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private clientProxy:ProxyServiceService,
    private readonly jwtService:JwtService
    ){}
 async createUser(createAuthDto: SignUpWithUserNameAndPasswordDto) {
    const user=  await this.clientProxy.createUserProxy(createAuthDto)
    return user;
  }

 async getUserByName(name:string){
    const user=  await this.clientProxy.GetUserByNameProxy(name)
    return user;
  }
  async getJwtTokenForUser(user: User) {
    const payload = { id: user.id ,userName:user.userName};

    return {
      accessToken: this.jwtService.sign(payload)
    };
  }
}
