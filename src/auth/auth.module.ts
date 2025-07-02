import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import JwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync(JwtConfig.asProvider()),
    ConfigModule.forFeature(JwtConfig),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
