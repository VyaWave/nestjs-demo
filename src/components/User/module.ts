import { Module, Global } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './controller';
import { UserService } from './service';
import { User } from './entity';

// @Global() // 全局模块
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 可以导出
})
export class UserModule {}
