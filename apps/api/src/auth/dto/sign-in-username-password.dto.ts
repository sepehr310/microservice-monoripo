import { IsArray, IsEmail, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInWithUserNameAndPasswordDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  @IsString()
  password: string;

}
