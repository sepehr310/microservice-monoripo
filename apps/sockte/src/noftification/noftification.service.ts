import { Injectable } from '@nestjs/common';
import { CreateNoftificationDto } from './dto/create-noftification.dto';
import { UpdateNoftificationDto } from './dto/update-noftification.dto';

@Injectable()
export class NoftificationService {
  create(createNoftificationDto: CreateNoftificationDto) {
    return 'This action adds a new noftification';
  }

  findAll() {
    return `This action returns all noftification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noftification`;
  }

  update(id: number, updateNoftificationDto: UpdateNoftificationDto) {
    return `This action updates a #${id} noftification`;
  }

  remove(id: number) {
    return `This action removes a #${id} noftification`;
  }
}
