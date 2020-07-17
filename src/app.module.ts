import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './controller/user/user.service';
import { NewsService } from './controller/news/news.service';
import { ArticleController } from './controller/article/article.controller';

@Module({
  imports: [],
  controllers: [NewsController, UserController, AppController, ArticleController],
  providers: [AppService, UserService, NewsService],
})
export class AppModule {}
