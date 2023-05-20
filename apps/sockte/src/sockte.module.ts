import { Module } from '@nestjs/common';
import { SockteController } from './sockte.controller';
import { SockteService } from './sockte.service';

@Module({
  imports: [],
  controllers: [SockteController],
  providers: [SockteService],
})
export class SockteModule {}
