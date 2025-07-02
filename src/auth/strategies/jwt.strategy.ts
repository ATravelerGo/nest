import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { AuthJwtPayload } from '../types/auth.jwtPayload';

export type JwtPayload = {
  sub: string; // 用户ID
  username: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly jwtConfiguration: ConfigType<typeof jwtConfig>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfiguration.secret!, // 从配置注入
    });
  }

  /**
   * Passport 调用该方法来校验 JWT 是否有效
   * 返回值将被挂载到 request.user 上
   */
  validate(payload: AuthJwtPayload) {
    return {
      userId: payload.sub,
    };
  }
}
