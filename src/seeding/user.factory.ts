import { setSeederFactory } from 'typeorm-extension';
import { User } from '../entities/user.entity';
import { faker } from '@faker-js/faker';

export const UserFactory = setSeederFactory(User, () => {
  const user = new User();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.avatarUrl = faker.image.avatar();
  return user;
});
