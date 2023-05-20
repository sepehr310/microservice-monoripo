import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as Bcrypt from 'bcrypt';
import { User } from 'apps/user/src/user/entities/user.entity';
import { UserService } from 'apps/user/src/user/user.service';

@Injectable()
export class EmailAndPasswordStrategy extends PassportStrategy(Strategy, 'userName-and-password') {
  public static KEY = 'userName-and-password';

  constructor(private usersService: UserService) {
    super({
      usernameField: 'userName'
    });
  }

  async validate(userName: string, password: string): Promise<any> {
    let user: User;

    try {
      user = await this.usersService.findUserByUserName(userName);
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
