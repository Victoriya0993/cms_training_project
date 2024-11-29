import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(5001);
}
bootstrap();
