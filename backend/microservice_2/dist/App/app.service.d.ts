import { RabbitMQService } from '../RabbitMQ/rabbitMQ.service';
export declare class AppService {
    private readonly rabbitMQService;
    constructor(rabbitMQService: RabbitMQService);
    getContent(): string;
    createPage(title: any): string;
}
