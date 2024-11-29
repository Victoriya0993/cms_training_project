import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getContent(): string {
    return this.appService.getContent();
  }

  @Post('/createnewpage')
  createPage(@Body() body: { title: string }): string {
    return this.appService.createPage(body.title);
  }
}
