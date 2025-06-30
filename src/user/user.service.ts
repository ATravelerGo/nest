import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User>;
  create(createUserDto: CreateUserDto) {
    // return await this.userRepository.save(createUserDto);
    return '你好呀';
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    // return this.userRepository.update(id, updateUserDto);
    return '更新了';
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
