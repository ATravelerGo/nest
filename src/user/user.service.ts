import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // return await this.userRepository.save(createUserDto); //这种不会触发我们在user实体中的触发器
    const user = this.userRepository.create(createUserDto); //要先create然后save才可以触发我们写的触发器
    return await this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findByEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
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
