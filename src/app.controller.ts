import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  getHomeView() {
    return {
      name: '张三',
      age: '20'
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
