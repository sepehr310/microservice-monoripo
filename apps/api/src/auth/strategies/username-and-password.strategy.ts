import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as Bcrypt from 'bcrypt';
import { User } from 'apps/user/src/user/entities/user.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class UserNameAndPasswordStrategy extends PassportStrategy(Strategy, 'username-and-password') {
  public static KEY = 'username-and-password';

  constructor(private authService: AuthService) {
    super({
      usernameField: 'userName'
    });
  }

  async validate(userName: string, password: string): Promise<any> {
    let user: any;

    try {
      user = await this.authService.getUserByName(userName);
    } catch (_e) {
      user = null;
    }

    if (!user) {
      throw new UnauthorizedException('Invalid user data');
    }

    if (!(await Bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid user data');
    }

    return user;
  }
}
