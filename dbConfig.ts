import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://neondb_owner:npg_CUyY3eNLnzS6@ep-winter-snowflake-a8x413o4-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  // entities: ['src/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};
