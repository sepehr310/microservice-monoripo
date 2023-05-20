import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  const config = new DocumentBuilder()
  .setTitle('Microservice')
  .setDescription('The Microservice API description')
  .setVersion('0.1 beta')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);

app.useGlobalPipes(new ValidationPipe());
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
