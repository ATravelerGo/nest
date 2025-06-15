import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  avatarUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Property, (property) => property.user)
  properties: Property[];

  @ManyToMany(() => Property, (property) => property.likedBy)
  @JoinTable({ name: 'user_liked_properties' }) // 特别注意  这里是JoinTable
  likedProperties: Property[];
}
