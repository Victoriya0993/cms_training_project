import { Injectable } from '@nestjs/common';
import { RabbitMQService } from '../RabbitMQ/rabbitMQ.service';
import content_json from './data/content.json';
import initial_content_json from './data/initialcontent.json';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQService: RabbitMQService) { }

  getContent(): string {
    return JSON.stringify(content_json.content);
  }

  createPage(title): string {
    const contents = initial_content_json.initial_content;

    const content = contents.find(c => c.title === title);

    if (content) {
      this.rabbitMQService.publish('logs', `Создана страница ${title}`);
    }

    return JSON.stringify(content);
  }
}
