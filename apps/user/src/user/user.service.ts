import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignUpWithUserNameAndPasswordDto } from 'apps/api/src/auth/dto/sign-up-with-username-and-password.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }
  async create(createUserDto: SignUpWithUserNameAndPasswordDto) {
    return this.userRepository.create(createUserDto).save()
  }

  async createNewUser(userName: string, password: string) {
    const userExists = await this.userRepository.findOne({
      where: {
        userName
      }
    });

    if (userExists) {
      throw new BadRequestException('User with this username already exists');
    }

    const user = await this.userRepository.create({
      userName,
      password
    });

    return user;
  }

  async findUserByUserName(userName: string) {
    return await this.userRepository.createQueryBuilder('user')
      .andWhere(`user.userName = ${userName}`)
      .getOne()
  }

  async findUserById(id: number) {
    return await this.userRepository.createQueryBuilder('user')
      .andWhere(`user.id = ${id}`)
      .getOne()
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
