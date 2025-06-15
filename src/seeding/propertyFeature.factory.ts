import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, () => {
  const propertyFeature = new PropertyFeature();

  propertyFeature.area = faker.number.int({ min: 25, max: 25000 });
  propertyFeature.bathrooms = faker.number.int({ min: 1, max: 3 });
  propertyFeature.bedrooms = faker.number.int({ min: 1, max: 3 });
  propertyFeature.parkingSpots = faker.number.int({ min: 1, max: 3 });
  propertyFeature.hasBalcony = faker.datatype.boolean();
  propertyFeature.hasSwimmingPool = faker.datatype.boolean();
  propertyFeature.hasGardenYard = faker.datatype.boolean();

  return propertyFeature;
});
