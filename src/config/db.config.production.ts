import * as process from 'node:process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    url: process.env.DB_URL,
    // entities: ['dist/**/*.entity.js'], //这个和下面那个只能同时开启一个  之前写的是src/ 会报错的，现在用dist/ 就不报错
    autoLoadEntities: true, //强烈推荐，可以少很多操心事，避免很多错误
    synchronize: false, //生产环境一定要把他设置成false
  };
};
