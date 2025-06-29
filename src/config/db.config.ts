import * as process from 'node:process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';

//registerAs 是 NestJS 提供的一个工具函数，用于为你的配置项命名空间化（命名注册），以便你通过 ConfigService 时可以清晰地访问结构化配置。
/*
* @Description:
* •	给配置定义一个命名空间（key）
	•	让你在 ConfigService.get() 时可以按模块名获取子配置
	•	配合 ConfigModule.forRoot({ load: [...] }) 使用
* @Author: zhangChen
* @Date: 2025-06-29 19:33:25
* @LastEditTime: 2025-06-29 19:33:25
*/
export default registerAs('dbConfig.dev', (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    url: process.env.DB_URL,
    // entities: ['dist/**/*.entity.js'], //这个和下面那个只能同时开启一个  之前写的是src/ 会报错的，现在用dist/ 就不报错
    autoLoadEntities: true, //强烈推荐，可以少很多操心事，避免很多错误
    synchronize: true,
  };
});
