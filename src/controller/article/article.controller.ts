import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../news/news.service'

@Controller('article')
export class ArticleController {

  constructor(private readonly newsService: NewsService){

  }
  @Get()
  index(){
    const data = this.newsService.findAll()
    return 'news 加载成功...'
  }
}
