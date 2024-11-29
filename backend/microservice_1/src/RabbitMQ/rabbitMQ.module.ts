import { Module } from '@nestjs/common';
import { rabbitmqProviders } from './rabbitMQ.provider';
import { RabbitMQService } from './rabbitMQ.service';

@Module({
  providers: [RabbitMQService, ...rabbitmqProviders],
  exports: [...rabbitmqProviders],
})
export class RabbitMQModule {}
