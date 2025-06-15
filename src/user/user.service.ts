import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CustomService } from './custom.service';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  @Inject(CustomService)
  private customRepository: CustomService;

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    console.log(this.customRepository);
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
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
