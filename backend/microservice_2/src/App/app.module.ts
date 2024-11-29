import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQService } from 'src/RabbitMQ/rabbitMQ.service';
import { RabbitMQModule } from 'src/RabbitMQ/rabbitMQ.module';

@Module({
  imports: [RabbitMQModule],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule {}
