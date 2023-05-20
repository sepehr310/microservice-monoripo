import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { NoftificationService } from './noftification.service';
import { CreateNoftificationDto } from './dto/create-noftification.dto';
import { UpdateNoftificationDto } from './dto/update-noftification.dto';

@WebSocketGateway()
export class NoftificationGateway {
  constructor(private readonly noftificationService: NoftificationService) {}

  @SubscribeMessage('createNoftification')
  create(@MessageBody() createNoftificationDto: CreateNoftificationDto) {
    return this.noftificationService.create(createNoftificationDto);
  }

  @SubscribeMessage('findAllNoftification')
  findAll() {
    return this.noftificationService.findAll();
  }

  @SubscribeMessage('findOneNoftification')
  findOne(@MessageBody() id: number) {
    return this.noftificationService.findOne(id);
  }

  @SubscribeMessage('updateNoftification')
  update(@MessageBody() updateNoftificationDto: UpdateNoftificationDto) {
    return this.noftificationService.update(updateNoftificationDto.id, updateNoftificationDto);
  }

  @SubscribeMessage('removeNoftification')
  remove(@MessageBody() id: number) {
    return this.noftificationService.remove(id);
  }
}
