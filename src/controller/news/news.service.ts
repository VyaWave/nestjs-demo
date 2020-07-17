import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class NewsService {
  @Get()
  findAll() {
    return [
      { title: '新闻 title'},
      { title: '新闻1新闻 title'},
      { title: '1新闻新闻新闻 title'},
      { title: '1新闻新闻新闻新闻新闻 title'}
    ]
  }
}
