import { NestFactory } from '@nestjs/core';
import { SockteModule } from './sockte.module';

async function bootstrap() {
  const app = await NestFactory.create(SockteModule);
  await app.listen(3000);
}
bootstrap();
