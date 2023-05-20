import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from 'apps/user/src/user/user.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public static KEY = 'jwt';

  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: String(process.env.JWT_SECRET_KEY)
    });
  }

  async validate(payload) {
    try {
      return await this.authService.getUserByName(payload.userName);
    } catch (_e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
