import { Module } from '@nestjs/common';
import { SockteController } from './sockte.controller';
import { SockteService } from './sockte.service';
import { NoftificationModule } from './noftification/noftification.module';

@Module({
  imports: [NoftificationModule],
  controllers: [SockteController],
  providers: [SockteService],
})
export class SockteModule {}
