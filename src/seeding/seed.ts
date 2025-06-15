import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { dbConfig } from '../../dbConfig';
import { PropertyFactory } from './property.factory';
import { PropertyFeatureFactory } from './propertyFeature.factory';
import { UserFactory } from './user.factory';
import { MainSeeder } from './main.seeder';
import * as process from 'node:process';

const options: DataSourceOptions & SeederOptions = {
  ...(dbConfig as DataSourceOptions),
  factories: [PropertyFactory, PropertyFeatureFactory, UserFactory],
  seeds: [MainSeeder],
};

/*
* 因为 seed 脚本通常是独立于应用启动的程序，它不是 NestJS 的模块，也不是 HTTP 请求生命周期的一部分。
所以你需要自己手动：
	•	创建数据库连接（new DataSource）
	•	初始化连接（dataSource.initialize()）
	•	通过连接执行插入操作（比如用工厂或 Seeder）
这一步是必需的，否则你没法操作数据库。
*
*
* */

const dataSource = new DataSource(options); //与当前数据库建立关系

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true); //它会检查你的实体类定义（比如字段、类型、关系），并自动同步到数据库中对应的表结构。   true 参数表示强制先清空数据库里的表再重新建，相当于“重置数据库”。
  await runSeeders(dataSource); //运行所有你配置好的 Seeder（种子脚本）。
  process.exit();
});
