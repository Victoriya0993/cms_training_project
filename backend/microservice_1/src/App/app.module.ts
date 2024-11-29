import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { rabbitmqProviders } from 'src/RabbitMQ/rabbitMQ.provider';
import { RabbitMQModule } from 'src/RabbitMQ/rabbitMQ.module';
import { RabbitMQService } from 'src/RabbitMQ/rabbitMQ.service';

@Module({
  imports: [RabbitMQModule],
  controllers: [AppController],
  providers: [AppService, RabbitMQService]
})
export class AppModule {}
