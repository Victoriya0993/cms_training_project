import { Module } from '@nestjs/common';
import { rabbitmqProviders } from './rabbitMQ.provider';
import { RabbitMQService } from './rabbitMQ.service';
import { RabbitMQController } from './rabbitMQ.controller';

@Module({
  providers: [RabbitMQService, ...rabbitmqProviders],
  exports: [...rabbitmqProviders],
  controllers: [RabbitMQController]
})
export class RabbitMQModule {}
