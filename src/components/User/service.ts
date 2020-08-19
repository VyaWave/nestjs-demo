import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // 查找 全部
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // 查找 单个
  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  // 创建 单个
  createOne({ name, age, title }): Promise<User> {
    return this.usersRepository.save({
      name,
      age,
      title,
    });
  }

  // 移除单个
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  getUserList() {
    return [
      {
        userName: ' 金晨1',
        age: 32,
      },
    ];
  }
}
