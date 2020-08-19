import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  Response,
  Req,
  HttpCode,
  Header,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';

import { UserService } from './service';

import { User } from './interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  private readonly users: User[] = [];

  @Get()
  @Render('default/user')
  index() {
    return {
      users: this.userService.getUserList(),
    };
  }

  // 增加
  @Post('create')
  addUser(@Body() body) {
    console.info('body', body);
    return this.userService.createOne(body);
  }

  @Post()
  create(@Body() user: User) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() user: User) {
    return `This action returns all cats (limit: ${user.name} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
