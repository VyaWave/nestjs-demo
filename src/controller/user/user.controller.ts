import { Controller, Get, Render, Post, Body, Response } from '@nestjs/common';

import { UserService } from '../../service/user/user.service'

@Controller('user')
export class UserController {

  constructor(private userService: UserService ) {}

  @Get()
  @Render('default/user')
  index() {
    console.info(this.userService.getUserList())
    return {
      users: this.userService.getUserList()
    }
  }

  @Post('add')
  addUser(@Body() body, @Response() res) {
    console.info(body)
    res.redirect('/user')
  }

}
