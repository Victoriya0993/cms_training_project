export declare enum QUENE_NAME {
    'QUENE_MICROSERVICE_2' = "queue_microservice_2"
}
export declare class RabbitMQService {
    private rabbitMQ;
    constructor(rabbitMQ: any);
    consume(quene: QUENE_NAME, callback: (data: any) => void): void;
    publish(key: any, data: any): void;
    sendToQueue(quene: QUENE_NAME, data: any): void;
    ack(data: any): void;
}
