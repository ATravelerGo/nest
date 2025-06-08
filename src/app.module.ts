import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../dbConfig';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(dbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
