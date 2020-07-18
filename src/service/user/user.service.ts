import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {


  getUserList(){
    return [
      {
        userName: ' 金晨1',
        age: 32
      },

      {
        userName: ' 金晨2',
        age: 32
      },

      {
        userName: ' 金晨3',
        age: 32
      },

      {
        userName: ' 金晨4',
        age: 32
      },
    ]
  }
}
