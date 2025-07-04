import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import dbConfig from './config/db.config';
import dbConfigProduction from './config/db.config.production';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true, //env文件里可以互相引用
      load: [dbConfig, dbConfigProduction], //最好加上，可以gpt问下 配合registerAs使用
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV === 'production' ? dbConfigProduction : dbConfig,
    }),
    UserModule,
    PropertyModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
