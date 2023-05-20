import { Module } from '@nestjs/common';
import { NoftificationService } from './noftification.service';
import { NoftificationGateway } from './noftification.gateway';

@Module({
  providers: [NoftificationGateway, NoftificationService]
})
export class NoftificationModule {}
