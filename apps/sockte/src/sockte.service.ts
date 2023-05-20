import { Injectable } from '@nestjs/common';

@Injectable()
export class SockteService {
  getHello(): string {
    return 'Hello World!';
  }
}
