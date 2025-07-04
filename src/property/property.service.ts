import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../entities/property.entity';
import { Repository } from 'typeorm';
import { PaginationPropertyDto } from './dto/pagination-property.dto';

@Injectable()
export class PropertyService {
  @InjectRepository(Property)
  private propertyRepository: Repository<Property>;

  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepository.save(createPropertyDto);
  }

  async findAll(paginationPropertyDto: PaginationPropertyDto) {
    return await this.propertyRepository.find({
      skip:
        (paginationPropertyDto.pageIndex - 1) * paginationPropertyDto.pageSize,
      take: paginationPropertyDto.pageSize,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
