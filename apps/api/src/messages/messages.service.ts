import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class MessagesService {
  constructor(@InjectQueue('message') private messageQueue: Queue) {}
  create(createMessageDto: CreateMessageDto) {
  return this.messageQueue.add(createMessageDto )
  }
}
