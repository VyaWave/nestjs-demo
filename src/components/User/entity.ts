import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '默认名称' })
  name: string;

  @Column({ default: '默认职位' })
  title: string;

  @Column({ default: 20 })
  age: number;
}
