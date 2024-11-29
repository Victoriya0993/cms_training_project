const amqp = require('amqplib');
import * as dotenv from 'dotenv';

dotenv.config();

const {
  AMQP_SERVER,
} = process.env

export const rabbitmqProviders = [
  {
    provide: 'ASYNC_CONNECTION_RABBITMQ',
    useFactory: async () => {
      const amqpServer = AMQP_SERVER;
      const connection = await amqp.connect(amqpServer);
      const channel = await connection.createChannel();
      channel.prefetch(1);

      return channel;
    },
  },
];
