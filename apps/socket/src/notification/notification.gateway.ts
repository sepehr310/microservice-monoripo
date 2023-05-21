import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { NotificationService } from './notification.service';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('message')
@WebSocketGateway()
export class NotificationGateway {
  constructor(private readonly notificationService: NotificationService) {}

  @Process()
  async transcode(job: Job<unknown>) {
    console.log(job);
    
  }

  // @SubscribeMessage('createNotification')
  // create(@MessageBody() createNotificationDto: CreateNotificationDto) {
  //   return this.notificationService.create(createNotificationDto);
  // }

  // @SubscribeMessage('findAllNotification')
  // findAll() {
  //   return this.notificationService.findAll();
  // }

  // @SubscribeMessage('findOneNotification')
  // findOne(@MessageBody() id: number) {
  //   return this.notificationService.findOne(id);
  // }

  // @SubscribeMessage('updateNotification')
  // update(@MessageBody() updateNotificationDto: UpdateNotificationDto) {
  //   return this.notificationService.update(updateNotificationDto.id, updateNotificationDto);
  // }

  // @SubscribeMessage('removeNotification')
  // remove(@MessageBody() id: number) {
  //   return this.notificationService.remove(id);
  // }
}
