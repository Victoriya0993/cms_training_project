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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const rabbitMQ_service_1 = require("../RabbitMQ/rabbitMQ.service");
const content_json_1 = __importDefault(require("./data/content.json"));
const initialcontent_json_1 = __importDefault(require("./data/initialcontent.json"));
let AppService = class AppService {
    constructor(rabbitMQService) {
        this.rabbitMQService = rabbitMQService;
    }
    getContent() {
        return JSON.stringify(content_json_1.default.content);
    }
    createPage(title) {
        const contents = initialcontent_json_1.default.initial_content;
        const content = contents.find(c => c.title === title);
        if (content) {
            this.rabbitMQService.publish('logs', `Создана страница ${title}`);
        }
        return JSON.stringify(content);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rabbitMQ_service_1.RabbitMQService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map