import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../dbConfig';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(dbConfig), PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
