import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { NotificationService } from './notification.service';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Server, Socket } from 'socket.io';

@Processor('message')
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationGateway {
  constructor(private readonly notificationService: NotificationService) {}
  @WebSocketServer()
  server: Server;
  @Process()
  @SubscribeMessage('getmessages')
  async transcode(job: Job<unknown>,@ConnectedSocket() client: Socket) {
    console.log(job.data);
    this.server.emit('messages', job.data);
    
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
