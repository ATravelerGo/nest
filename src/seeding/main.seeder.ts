import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { PropertyType } from '../entities/propertyType.entity';
import { User } from '../entities/user.entity';
import { Property } from '../entities/property.entity';
import { faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // 创建propertyTypes mock数据 并保存到数据库
    const typeRepo = dataSource.getRepository(PropertyType);
    const propertyTypes = await typeRepo.save([
      { value: 'Condo' },
      { value: 'Apartment' },
    ]);

    // 创建users mock数据 并保存到数据库
    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(10); //这个其实就是保存到数据了也

    const propertyRepo = dataSource.getRepository(Property);
    const propertyFeatureFactory = factoryManager.get(PropertyFeature);
    const propertyFactory = factoryManager.get(Property);
    const properties = await Promise.all(
      Array(50)
        .fill('')
        .map(async () => {
          return propertyFactory.make({
            user: faker.helpers.arrayElement(users),
            type: faker.helpers.arrayElement(propertyTypes),
            propertyFeature: await propertyFeatureFactory.save(),
          });
        }),
    );
    await propertyRepo.save(properties);
  }
}
