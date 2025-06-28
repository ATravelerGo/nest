import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://neondb_owner:npg_CUyY3eNLnzS6@ep-winter-snowflake-a8x413o4-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
  // entities: ['src/**/*.entity{.ts,.js}'], //这个和下面那个只能同时开启一个
  autoLoadEntities: true,
  synchronize: true,
};
