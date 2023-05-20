import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { ApiResponseSchema } from 'apps/lib/decorators/api-response-schema.decorator';
import { TransformResponse } from 'apps/lib/decorators/transform-response.decorator';
import { SignUpWithUserNameAndPasswordDto } from './dto/sign-up-with-username-and-password.dto';
import { SignInWithUserNameAndPasswordDto } from './dto/sign-in-username-password.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthTokensDto } from './dto/auth-tokens.dto';
import { UserNameAndPasswordStrategy } from './strategies/username-and-password.strategy';
import { User } from 'apps/user/src/user/entities/user.entity';
import { AuthUser } from 'apps/lib/decorators/auth-user.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiResponseSchema()
  @TransformResponse({ message: 'SignUp successful' })
  @HttpCode(HttpStatus.OK)
  @Post('/sign-up')
  async signUp(@Body() signUpDto: SignUpWithUserNameAndPasswordDto) {
    const user = await this.authService.createUser(
      signUpDto
    );
  }

  @ApiBasicAuth()
  @ApiResponseSchema({ model: AuthTokensDto })
  @TransformResponse({ message: 'Token fetched successfully' })
  @UseGuards(AuthGuard(UserNameAndPasswordStrategy.KEY))
  @HttpCode(HttpStatus.OK)
  @Post('/sign-in')
  async logIn(@AuthUser() user: InstanceType<typeof User>, @Body() sigInDto: SignInWithUserNameAndPasswordDto) {
    return await this.authService.getJwtTokenForUser(
      user
    );
  }
}
