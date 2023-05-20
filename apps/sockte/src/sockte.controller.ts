import { Controller, Get } from '@nestjs/common';
import { SockteService } from './sockte.service';

@Controller()
export class SockteController {
  constructor(private readonly sockteService: SockteService) {}

  @Get()
  getHello(): string {
    return this.sockteService.getHello();
  }
}
