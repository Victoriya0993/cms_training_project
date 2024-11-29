import { RabbitMQService } from 'src/RabbitMQ/rabbitMQ.service';
export declare class AppService {
    private readonly rabbitMQService;
    constructor(rabbitMQService: RabbitMQService);
    getNewTime(): Date;
}
