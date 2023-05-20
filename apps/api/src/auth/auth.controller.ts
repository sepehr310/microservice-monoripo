import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseSchema } from 'apps/lib/decorators/api-response-schema.decorator';
import { TransformResponse } from 'apps/lib/decorators/transform-response.decorator';
import { SignUpWithUserNameAndPasswordDto } from './dto/sign-up-with-username-and-password.dto';

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
}
