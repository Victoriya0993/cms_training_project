import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

const {
  EXCHANGE_NAME,
} = process.env;


export enum QUENE_NAME  {'QUENE_MICROSERVICE_2' = 'queue_microservice_2'}
@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('ASYNC_CONNECTION_RABBITMQ')
    private rabbitMQ: any,
  ) {}


  consume(quene: QUENE_NAME, callback: (data) => void) {
    this.rabbitMQ.consume(quene, callback, { noAsk: false }); // указываем, что отправка ответа только вручную, без автоподтверждения)
  }

  publish (key, data) {
    this.rabbitMQ.publish(EXCHANGE_NAME, key, Buffer.from(data));
  }

  sendToQueue(quene: QUENE_NAME, data) {
    this.rabbitMQ.sendToQueue(quene, Buffer.from(data), {
      persistent: true, //persistent признак того, что сообщения нужно сохранять
    });
  }

  ack(data){
    this.rabbitMQ.ack(data);
  }
}
