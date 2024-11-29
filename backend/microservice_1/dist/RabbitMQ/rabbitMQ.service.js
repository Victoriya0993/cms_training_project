"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQService = exports.QUENE_NAME = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
const { EXCHANGE_NAME, } = process.env;
var QUENE_NAME;
(function (QUENE_NAME) {
    QUENE_NAME["QUENE_MICROSERVICE_2"] = "queue_microservice_2";
})(QUENE_NAME = exports.QUENE_NAME || (exports.QUENE_NAME = {}));
let RabbitMQService = class RabbitMQService {
    constructor(rabbitMQ) {
        this.rabbitMQ = rabbitMQ;
    }
    consume(quene, callback) {
        this.rabbitMQ.consume(quene, callback, { noAsk: false });
    }
    publish(key, data) {
        this.rabbitMQ.publish(EXCHANGE_NAME, key, Buffer.from(data));
    }
    sendToQueue(quene, data) {
        this.rabbitMQ.sendToQueue(quene, Buffer.from(data), {
            persistent: true,
        });
    }
    ack(data) {
        this.rabbitMQ.ack(data);
    }
};
RabbitMQService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ASYNC_CONNECTION_RABBITMQ')),
    __metadata("design:paramtypes", [Object])
], RabbitMQService);
exports.RabbitMQService = RabbitMQService;
//# sourceMappingURL=rabbitMQ.service.js.map