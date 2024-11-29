import { RabbitMQService } from './rabbitMQ.service';
export declare class BodySendMessage {
    message: string;
    routing_key: string;
}
export declare class RabbitMQController {
    private readonly rabbitMQService;
    constructor(rabbitMQService: RabbitMQService);
    sendMessage(body: BodySendMessage): void;
}
