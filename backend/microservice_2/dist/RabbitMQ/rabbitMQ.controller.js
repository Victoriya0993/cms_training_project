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
exports.RabbitMQController = exports.BodySendMessage = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const rabbitMQ_service_1 = require("./rabbitMQ.service");
class BodySendMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'тело сообщения',
        example: 'привет',
    }),
    __metadata("design:type", String)
], BodySendMessage.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'ключ для доступа к очереди',
        example: 'micro_2',
    }),
    __metadata("design:type", String)
], BodySendMessage.prototype, "routing_key", void 0);
exports.BodySendMessage = BodySendMessage;
let RabbitMQController = class RabbitMQController {
    constructor(rabbitMQService) {
        this.rabbitMQService = rabbitMQService;
    }
    sendMessage(body) {
        this.rabbitMQService.publish(body.routing_key, body.message);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        description: 'отправляет сообщение в общий обменник с ключом для дальнейшей отправки в очередь',
        summary: 'отправить сообщение в обменник',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Отправляет сообщение в шину',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BodySendMessage]),
    __metadata("design:returntype", void 0)
], RabbitMQController.prototype, "sendMessage", null);
RabbitMQController = __decorate([
    (0, swagger_1.ApiTags)("rabbitMQ"),
    (0, common_1.Controller)("rabbitMQ"),
    __metadata("design:paramtypes", [rabbitMQ_service_1.RabbitMQService])
], RabbitMQController);
exports.RabbitMQController = RabbitMQController;
//# sourceMappingURL=rabbitMQ.controller.js.map