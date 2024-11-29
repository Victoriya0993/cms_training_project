import { Injectable } from '@nestjs/common';
import { QUENE_NAME, RabbitMQService } from 'src/RabbitMQ/rabbitMQ.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQService: RabbitMQService) {
    this.rabbitMQService.consume(QUENE_NAME.QUENE_MICROSERVICE_2, (data) => {
      console.log(data.content.toString());
      this.rabbitMQService.ack(data);
    });
  }

  getNewTime(): Date {
    return new Date();
  }
}
