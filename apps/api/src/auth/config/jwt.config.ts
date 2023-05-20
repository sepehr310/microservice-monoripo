import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const JwtConfig: JwtModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<JwtModuleOptions> => {
    return {
      secret: String(process.env.JWT_SECRET_KEY),
      signOptions: { expiresIn: 8500000 }
    };
  }
};
