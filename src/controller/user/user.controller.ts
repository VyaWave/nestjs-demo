import { Controller, Get, Query, Post, Body, Response, Render } from '@nestjs/common';

@Controller('user')
export class UserController {

  // 查询
  @Get()
  @Render('default/user')
  index(){
    return {
      name: '张三',
      age: '28'
    }
  }

  // @Get('')
  // index(){
  //   return '这是一个用户'
  // }

  // Psot
  @Post('doAdd')
  doAdd(@Body() body, @Response() res) {
    console.info(body)
    res.redirect('/user')
    return '添加成功'
  }
}
