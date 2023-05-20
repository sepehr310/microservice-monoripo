import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserModule, {
    transport: Transport.REDIS,
    options: {
      host: '127.0.0.1',
      port: 6379,
      retryAttempts: 5,
      retryDelay: 500
    }
  });
  app.listen()
}
bootstrap();
