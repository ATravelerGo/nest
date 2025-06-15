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

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
