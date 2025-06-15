import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from '../entities/property.entity';
import { PropertyFeature } from '../entities/propertyFeature.entity';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports: [TypeOrmModule.forFeature([Property, PropertyFeature])],
})
export class PropertyModule {}
