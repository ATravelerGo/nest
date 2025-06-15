import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { LoggerMiddleWare } from '../middleware/LoggerMiddleWare';
import { CustomService } from './custom.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: CustomService,
      useClass: CustomService,
    },
  ],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('user');
  }
}
