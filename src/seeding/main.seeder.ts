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
    const typeRepo = dataSource.getRepository(PropertyType);
    const propertyTypes = await typeRepo.save([
      { value: 'Condo' },
      { value: 'Apartment' },
    ]);

    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(10);

    const propertyFeatureFactory = factoryManager.get(PropertyFeature);

    const propertyFactory = factoryManager.get(Property);
    const properties = await Promise.all(
      Array(50)
        .fill('')
        .map(async () => {
          return await propertyFactory.make({
            user: faker.helpers.arrayElement(users),
            type: faker.helpers.arrayElement(propertyTypes),
            propertyFeature: await propertyFeatureFactory.save(),
          });
        }),
    );

    const propertyRepo = dataSource.getRepository(Property);
    await propertyRepo.save(properties);
  }
}
