import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiProperty,
} from '@nestjs/swagger';
import { RabbitMQService } from './rabbitMQ.service';

export class BodySendMessage {
  @ApiProperty({
    type: 'string',
    description: 'тело сообщения',
    example: 'привет',
  })
  message: string;
  @ApiProperty({
    type: 'string',
    description: 'ключ для доступа к очереди',
    example: 'micro_2',
  })
  routing_key: string;
}

@ApiTags("rabbitMQ")
@Controller("rabbitMQ")
export class RabbitMQController {
  constructor(private readonly rabbitMQService: RabbitMQService) { }

  @Post()
  @ApiOperation({
    description: 'отправляет сообщение в общий обменник с ключом для дальнейшей отправки в очередь',
    summary: 'отправить сообщение в обменник',
  })
  @ApiResponse({
    status: 200,
    description: 'Отправляет сообщение в шину',
  })
  sendMessage(@Body() body: BodySendMessage) {
    this.rabbitMQService.publish(body.routing_key, body.message);
  }
}
