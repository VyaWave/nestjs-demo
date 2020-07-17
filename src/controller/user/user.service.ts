import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(){
  }


  findAll() {
    return [
      { title: '1 title'},
      { title: '1 title'},
      { title: '1 title'},
      { title: '1 title'}
    ]
  }
}
