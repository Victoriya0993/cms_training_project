"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitmqProviders = void 0;
const amqp = require('amqplib');
const dotenv = require("dotenv");
dotenv.config();
const { AMQP_SERVER, } = process.env;
exports.rabbitmqProviders = [
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
//# sourceMappingURL=rabbitMQ.provider.js.map