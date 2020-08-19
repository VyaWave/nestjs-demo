import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'reflect-metadata';

import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/',
  });

  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  // Url console
  console.info(
    '\n-----------',
    'Server is running at: http://localhost:3000',
    '---------------- \n',
  );

  await app.listen(3000);
}
bootstrap();
